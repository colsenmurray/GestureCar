import serial
import time

com_port = 'COM5'
bluetooth = serial.Serial(com_port, 9600)
time.sleep(2)
flag = True

# while flag:
speed = 2
steer = 3
print(chr(ord('f') + steer))
bluetooth.write(chr(ord('a') + speed).encode())
bluetooth.flush()
time.sleep(.03)
bluetooth.write(chr(ord('f') + steer).encode())
bluetooth.flush()
time.sleep(5)

bluetooth.write('S'.encode())