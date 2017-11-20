#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <netdb.h>
#include <signal.h>
#include <fcntl.h>
#include <stdbool.h>
#include <wiringPi.h>
#include "../include/softServo.h"
#include "ServerUtils.c"

#include "../include/EmbeddedServer.h"



int main(int argc, char* argv[])
{
    struct sockaddr_in clientaddr;
    socklen_t addrlen;
    char c;    
    //Default Values PATH = ~/ and PORT=10000
    char PORT[6];
    ROOT = getenv("PWD");
    strcpy(PORT,"10000");
    int slot=0;
    printf("Server started at port no. %s%s%s with root directory as %s%s%s\n",
        "\033[92m",PORT,"\033[0m","\033[92m",ROOT,"\033[0m");
    // Setting all elements to -1: signifies there is no client connected
    int i;
    for (i=0; i<CONNMAX; i++)
        clients[i]=-1;
    startServer(PORT, &listenfd);
    // ACCEPT connections
    while (1)
    {
        addrlen = sizeof(clientaddr);
        clients[slot] = accept (listenfd, (struct sockaddr *) &clientaddr, &addrlen);
        if (clients[slot]<0)
            error ("accept() error");
        else
        {
            if ( fork()==0 )
            {
                respond(slot,ROOT);
                exit(0);
            }
        }
        while (clients[slot]!=-1) slot = (slot+1)%CONNMAX;
    }
    return 0;
}


  
/**
* This functions initializes the server
**/
void startServer(char *port, int *listenfd)
{
	//init(); //init pins
    struct addrinfo hints, *res, *p;
    // getaddrinfo for host
    memset (&hints, 0, sizeof(hints));
    hints.ai_family = AF_INET;
    hints.ai_socktype = SOCK_STREAM;
    hints.ai_flags = AI_PASSIVE;
    if (getaddrinfo( NULL, port, &hints, &res) != 0)
    {
        perror ("getaddrinfo() error");
        exit(1);
    }
    // socket and bind
    for (p = res; p!=NULL; p=p->ai_next)
    {
        *listenfd = socket (p->ai_family, p->ai_socktype, 0);
        if (*listenfd == -1) continue;
        if (bind(*listenfd, p->ai_addr, p->ai_addrlen) == 0) break;
    }
    if (p==NULL)
    {
        perror ("socket() or bind()");
        exit(1);
    }

    freeaddrinfo(res);

    // listen for incoming connections
    if ( listen (*listenfd, 1000000) != 0 )
    {
        perror("listen() error");
        exit(1);
    }
}
/**
* Sends not found status 404
**/
void sendNotFound(int n)
{
	write(clients[n], NOT_FOUND_HEADER, strlen(NOT_FOUND_HEADER)); //FILE NOT FOUND
}

/**
*
* Manages clients requests (OPTIONS, POST , GET , PUT , POST)
**/
void respond(int n,char* ROOT)
{
    memset( (void*)mesg, (int)'\0', 99999 );
    rcvd=recv(clients[n], mesg, 99999	, 0);
    if (rcvd<0)    // receive error
        fprintf(stderr,("recv() error\n"));
    else if (rcvd==0)    // receive socket closed
        fprintf(stderr,"Client disconnected upexpectedly.\n");
    else    // message received
    {
        int j=0;
        bool bandera = false;
        for (int i = 0; i < 99999; i++)
        {
        	if (mesg[i]=='{' || bandera == true)
        	{
        		datos[j] = mesg[i];
        		bandera = true;
        		j=j+1;
        	}
        }
        reqline[0] = strtok (mesg, " \t\n");
        //handles GET verb
        if ( strncmp(reqline[0], "GET\0", 4)==0 )              get_verb(n);
        //handles GET verb
        else if ( strncmp(reqline[0], "OPTIONS\0", 4)==0)      options_verb(n);
        //handles GET verb
        else  if ( strncmp(reqline[0], "POST\0", 4)==0 )       post_verb(n);
        //handles GET verb
        else  if ( strncmp(reqline[0], "PUT\0", 4)==0 )        put_verb(n);
    }
    //Closing SOCKET
    shutdown (clients[n], SHUT_RDWR);         //All further send and recieve operations are DISABLED...
    close(clients[n]);
    clients[n]=-1;
}

/**
*   Returns 200 ok status to clients for allowing put and post methods
**/
void options_verb(int n)
{
	if(checkBadRequest(n)) //checks format of the request
    {	
    	//checks if the request is for /servo or /variables
        if (strncmp(reqline[1], "/servo/\0", 6)==0  || strncmp(reqline[1], "/variables/\0", 5)==0)
        {
        	//returns headers
        	send(clients[n], SUCCESS_HEADER , strlen(SUCCESS_HEADER), 0);               	
        }
        else if ( strncmp(reqline[1], "/users/\0", 2)==0 || strncmp(reqline[1], "/login/\0", 2)==0)
        {           
        	//returns headers
	        send(clients[n], SUCCESS_HEADER , strlen(SUCCESS_HEADER), 0);          
        }
        //not found
        else    sendNotFound(n);
    }
}

/**
* Validates the password and user name
*/
void put_user(int n)
{
	reqline[1] = "/user.json";    
	strcpy(path, ROOT);
	strcpy(&path[strlen(ROOT)], reqline[1]);
	printf("file: %s\n", path);
	if ( (fd=open(path, O_RDONLY))!=-1 )    //FILE FOUND
	{
		//compares pass and username
	    validar_cuenta(datos,path);
	    if (validacion=='C')
	    {
	    	//send ok 200 staus
	       	send(clients[n], SUCCESS_HEADER , strlen(SUCCESS_HEADER), 0);            
	    }
	    else
	    {
	    	//sends internal server error
	        send(clients[n],INTERNAL_SERVER_ERROR_HEADER, strlen(INTERNAL_SERVER_ERROR_HEADER) , 0);
	    }
	    
	}
}

/**
* Changes the state of servo identified by id
**/
void put_servo(int n)
{
	//obtiene el json
    int action =  get_servo_value(datos);
  
    printf("%d\n",action);


    if (wiringPiSetup () == -1)
    {
        ;
    //fprintf (stdout, "oops: %s\n", strerror (errno)) ;
    //return 1 ;
    }

    softServoSetup (0, 1, 2, 3, 4, 5, 6, 7) ;

    delay (1000) ;

    softServoWrite (0,  1000) ;

    delay (1000) ;

    softServoWrite (0,  500) ;

    delay (1000) ;
    softServoWrite (0,  0) ;

    delay (1000) ;

    softServoWrite (0,  100) ;

    
    send(clients[n], SUCCESS_HEADER , strlen(SUCCESS_HEADER), 0);  
}

/**
*  This functions performs put for users and servo
**/
void put_verb(int n)
{
	//checks format
	if(checkBadRequest(n))
    {         
    	//if is put for users 
    	if (strncmp(reqline[1], "/login/\0", 6)==0 )
        {
            put_user(n); //put user for login
        }                 
        //if is put for servo
        else if (strncmp(reqline[1], "/servo/\0", 6)==0)
        {
        	//put servo
        	put_servo(n);        	
        } 
        else   sendNotFound(n);//not found status
    }
}

/*
* Takes a photograph and sends it to clients 
*/
void get_photo(int n)
{
			strcpy(path, ROOT);
        	//take picture in ./
        	const char * command = "fswebcam imagen.jpg";
        	//name of photo 
        	const char * img_name = "/imagen.jpg";
        	int tf = system(command);
        	//constructs the path where the file is
            strcpy(&path[strlen(ROOT)], img_name);
            printf("file: %s\n", path);
            //open the file
            if ( (fd=open(path, O_RDONLY))!=-1 || (tf != -1))    //FILE FOUND
            {
                //send header to client
                send(clients[n], HEADER_IMG , strlen(HEADER_IMG), 0);
                //writes the file    
                while ( (bytes_read=read(fd, data_to_send, BYTES))>0 )
                    write (clients[n], data_to_send, bytes_read);

            }
            else sendNotFound(n);
}

/**
* Performs a get for the rsource called variables, checking its condition
* from GPIOs 
**/
void get_variables(int n)
{
	//send the success header to client
	send(clients[n], SUCCESS_HEADER , strlen(SUCCESS_HEADER), 0);         
    short x ;
    
    //variable where json resource is concatenated
    char jsonVariables[100] = "";

    strcat(jsonVariables ,"{\"temperatura\":");
    strcat(jsonVariables ,"18");
    strcat(jsonVariables ,",\"humedad\":");
    strcat(jsonVariables ,"32"); 
    strcat(jsonVariables , ",\"flexor\":");
    strcat(jsonVariables , "0");
    strcat(jsonVariables , "}");
    
    //send the json string to the client 
    write (clients[n], jsonVariables, strlen(jsonVariables));
    
}

/**
*Performs get for Variables status and photgrah
*/
void get_verb(int n)
{
	//checks format
	if(checkBadRequest(n))
    {         
    	//checks if get is for variables
        if ( strncmp(reqline[1], "/variables/\0", 6)==0)
        {
        	//calls get for variables
            get_variables(n); 
        }
        //checks if get is for picture
        else if ( strncmp(reqline[1], "/imagen/\0", 7)==0)
        {
        	//calls get for photo
        	get_photo(n);
        }
        //return 404
        else sendNotFound(n);
    }
}

/*
*Executes post request for users resources
*/
void post_verb(int n)
{
	if(checkBadRequest(n))
    {   
            //compares if url is related to users 
            if ( strncmp(reqline[1], "/users/\0", 4)==0 )
                reqline[1] = "/user.json";       
            strcpy(path, ROOT);
            //constructs the path to the file
            strcpy(&path[strlen(ROOT)], reqline[1]);
            if ( (fd=open(path, O_RDONLY))!=-1 )    //FILE FOUND
            {
            	//saves file modified
                guarda_Archivo(datos,path);
                //send body response to clients
                send(clients[n], SUCCESS_HEADER , strlen(SUCCESS_HEADER), 0);    
                    while ( (bytes_read=read(fd, data_to_send, BYTES))>0 )
                        write (clients[n], data_to_send, bytes_read);
            }
            //sends 404
            else  sendNotFound(n);
    }
}

/*
*Checks the format of an request and writes 400 bad request status to clients
*returns true wether the request is correct
*/
bool checkBadRequest(int n)

{
	//splits header strings
	reqline[1] = strtok (NULL, " \t");
    reqline[2] = strtok (NULL, " \t\n");
    if ( strncmp( reqline[2], "HTTP/1.0", 8)!=0 && strncmp( reqline[2], "HTTP/1.1", 8)!=0 )
    {
    	//write status
        write(clients[n], BAD_REQUEST_HEADER, strlen(BAD_REQUEST_HEADER));
        return false;
    }
    return true;
}
