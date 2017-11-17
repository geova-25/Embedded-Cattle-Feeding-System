

all: EmbeddedServer
 
APP = EmbeddedServer
SRC = $(APP).c
#CC = arm-poky-linux-gnueabi-gcc -march=armv7ve -marm -mfpu=neon-vfpv4 -mfloat-abi=hard -mcpu=cortex-a7 --sysroot=/opt/poky/2.3/sysroots/cortexa7hf-neon-vfpv4-poky-linux-gnueabi

CFLAGS = -c
#Estática
EmbeddedServer: $(SRC)
#-I es para el .h  y -L donde está el .a o el .sysroots

		$(CC) -L ../lib -I ../include -o ../bin/$(APP) $(SRC) -lpinDriver

clean: 
		rm  ../bin/$(APP)
		
