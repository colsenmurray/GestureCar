import socket

host = '10.130.241.239'  
PORT = 9875

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((host, PORT))



while True:
    command = input("command: ")
    if command == '0': # shut down stuff
        s.send(command.encode())
        s.close()
    else:
        s.send(command.encode())
        
s.close()
