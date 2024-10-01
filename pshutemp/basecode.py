import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BOARD)
# set to board mode
# raspberrypi.stackexchange.com/questions/12966/what-is-the-difference-between-board-and-bcm-for-gpio-pin-numbering#:~:text=The%20GPIO.BOARD%20option%20specifies%20that%20you


# raspi.tv/2013/rpi-gpio-basics-5-setting-up-and-using-outputs-with-rpi-gpio#:~:text=Today%20is%20output%20day.%20I%E2%80%99m%20going#:~:text=Today%20is%20output%20day.%20I%E2%80%99m%20going

# this signal will be taken from the command that
# it recieves from python and flask io
# currently not nearly set up yet
# so signal is going to be placed here

signal = 0

# https://fossbytes.com/wp-content/uploads/2021/04/gpio-pins-raspberry-pi-4-e1617866771594-1024x553.png
# pin chart for reference

# each wheel will be controlled by individual pin
# front right
GPIO.setup(17, GPIO.OUT)
# front left
GPIO.setup(27, GPIO.OUT)
# back right
GPIO.setup(22, GPIO.OUT)
# back left
GPIO.setup(23, GPIO.OUT)

# everything is temporary for now
# drive forward
if signal == 1:
    GPIO.output(17, .5)
    GPIO.output(27, .5)
    GPIO.output(22, .5)
    GPIO.output(23, .5)

# right
if signal == 2:
    GPIO.output(17, 1)
    GPIO.output(27, .2)
    GPIO.output(22, 1)
    GPIO.output(23, .2)

# left
if signal == 3:
    GPIO.output(17, .2)
    GPIO.output(27, 1)
    GPIO.output(22, .2)
    GPIO.output(23, 1)

# back
if signal == 4:
    
    # will somehow use a motor controller to move back
    # https://www.electronicshub.org/raspberry-pi-l298n-interface-tutorial-control-dc-motor-l298n-raspberry-pi/
    
    GPIO.output(17, .5)
    GPIO.output(27, .5)
    GPIO.output(22, .5)
    GPIO.output(23, .5)