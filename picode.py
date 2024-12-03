#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  untitled.py
#
#  Copyright 2024  <pear@raspberrypi>
#
#  This program is free software; you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation; either version 2 of the License, or
#  (at your option) any later version.
#
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#
#  You should have received a copy of the GNU General Public License
#  along with this program; if not, write to the Free Software
#  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
#  MA 02110-1301, USA.
#
#


# majority of code taken and inspired from Raspberry Pi Tutorial
# by Alexander Baran-Harper on YouTube

import socket

host = ''
port = 9875 # any portname can be used

# makes socket?
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
print("socket made")
try:
    s.bind((host, port))
except socket.error as msg:
    print(msg)

s.listen(1) # socket starts listening
print("socket listening")



  # i love indent based langauge that is a glorified C wrapper
while True:

    connection, address = s.accept()
    print("connected to: " +address[0] + ":" + str(address[1]))

    data = connection.recv(1024)

    if data.decode() == '0':
        print("turn off everything")
        # shut off engine first
        s.close()
    elif data.decode() == '1':
        print("go forward")
    elif data.decode() == '2':
        print("go right")
    elif data.decode() == '3':
        print("go left")
    elif data.decode() == '4':
        print("backward")

connection.close()