
# Extension Tasks

There are a lot of ways this project can be extended.

## 1 Designing a PCB

Now you have a prototype sensor module can you design a custom PCB ready for manufacture?

1. Start by downloading the [Fritzing](http://fritzing.org/home/) software and reproduce your breadboard layout.
    1. You will need to install [additional components](https://github.com/squix78/esp8266-fritzing-parts).
2. Switch to the Schematic tab and refine your circuit schematic.
3. Finally use the PCB tab to design a compact PCB.
4. Calculate the Bill Of Materials (BOM) for each board.

Up to this point you have been using the ESP8266 Development Board. By switching to a standard [ESP8266 ESP-12E module](https://www.ebay.co.uk/itm/ESP-12E-ESP8266-IoT-WiFi-Transceiver-Module-Serial-Wireless/312008977197?hash=item48a52f2b2d:m:mAw165vfPXCDHslKmjRLRFg) you should be able to reduce the BOM considerably but you will need to redesign the PCB to accomodate this (especially as it uses a different pin pitch). You will need to find the [pinout](http://www.kloppenborg.net/images/blog/esp8266/esp8266-esp12e-specs.pdf) and download the [Fritzing models](https://github.com/ydonnelly/ESP8266_fritzing).

Can you replace more of these development modules with individual components?

What is your final BOM for each populated PCB?

How would you get your PCB etched and assembled? What are the costs involved?

The final step is to design a custom case for this, allowing space for all components to function.

## 2 The Core Technology

The core project utilises the ESP8266 module however this is not the only platform you could use. Here are a few alternatives you might consider, given the requirements for the sensor to communicate over a WiFI network:

1. [Raspberry Pi](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/) - Either a model 3 with built-in wifi (and bluetooth) or an earier version with additional dongles.
2. [Arduino Uno Wifi](https://store.arduino.cc/arduino-uno-wifi): A standard Arduino board with integrated Wifi.
