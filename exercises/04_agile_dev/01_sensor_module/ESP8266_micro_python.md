
# Configuring MicroPython.

Install the `esptool` and download the [firmware](http://micropython.org/download#esp8266). Plug in the NodeMCU and check which serial port it is connected to. Once this has been found out you can erase the current flash and flash it with the one you have jist downloaded. Note that a baud rate of 115200 seems to work.
```
$ sudo pip install esptool
$ ls /dev/tty.*
$ esptool.py --port /dev/tty.SLAB_USBtoUART erase_flash
$ esptool.py --port /dev/tty.SLAB_USBtoUART --baud 115200 write_flash --flash_size=detect 0 esp8266-20171101-v1.9.3.bin
```

## Connecting to the Board

Once the board is flashed, it configures itself as an access point called MicroPython-xxxxxx, where xxxxxx is part of the MAC address, the password is `micropythoN`. If you connect to this access point you can see the device at the IP address `192.168.4.1`.

