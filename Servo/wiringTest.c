#include <stdio.h>
#include <errno.h>
#include <string.h>

#include <wiringPi.h>
#include "softServo.h"

int main ()
{
	if (wiringPiSetup () == -1)
	{
	fprintf (stdout, "oops: %s\n", strerror (errno)) ;
	return 1 ;
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
/*
	softServoWrite (1, 1000) ;
	softServoWrite (2, 1100) ;
	softServoWrite (3, 1200) ;
	softServoWrite (4, 1300) ;
	softServoWrite (5, 1400) ;
	softServoWrite (6, 1500) ;
	softServoWrite (7, 2200) ;
*/

	delay (1000) ;

}
