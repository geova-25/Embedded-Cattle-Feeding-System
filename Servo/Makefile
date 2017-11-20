CC	= arm-poky-linux-gnueabi-gcc -march=armv7ve -marm -mfpu=neon-vfpv4 -mfloat-abi=hard -mcpu=cortex-a7 --sysroot=/opt/poky/2.3/sysroots/cortexa7hf-neon-vfpv4-poky-linux-gnueabi
all: servoTest

servoTest: 
		gcc -o wiringTest wiringTest.c softServo.c -L ./ -I ./ -lwiringPi -lpthread

clean:
		rm *.a
