import serial
import time

com_port = 'COM5'
bluetooth = serial.Serial(com_port, 9600)
time.sleep(2)
flag = True

# while flag:
command = 'F'
bluetooth.write(command.encode())
time.sleep(10)

bluetooth.write('S'.encode())