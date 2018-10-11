
# Electronic Equipment

Congratulations, you have been assigned to develop the sensor module for this project. You will need to apply the skills you have learned on the CHSE programme, on the 307CR module or through your personal learning.

Your task is to build a prototype IoT module that captures data from one or more sensors, cleans this and sends it through to the API being developed by the rest of your team. To be able to complete this work you need:

- familiarity with electronic circuits:
  - Analog circuits
  - The I2C serial bus
  - Serial communication
- familiarity with the Arduino platform:
  - Working with the IDE
  - building Arduino Libraries
- familiarity with the C++ programming language

As well as being able to build circuits with microcontrollers, you should also be able to:

- Create Arduino (C++) libraries.
- Write C++ unit tests and generate code coverage reports.
- Be familiar with Git and GitHub (stage(`add`), `commit`, `push`, `pull`).

Make sure you configure your laptop correctly and be ready to start writing the app in **week 4**. If you are not completely comfortable with any of the skills listed above you have between now and week 4 to resolve this.

## The Microcontroller

The core of your sensor module will be based around the [ESP8266](https://en.wikipedia.org/wiki/ESP8266) Wifi chip with self-contained microcontroller. This is the most commonly-used chip in Internet of Things (IoT) devices.

You will be provided with an **ESP8266 Development Module**.

![ESP8266 Development Module](../../.images/nodemcu.png)

 Whilst it comes with its own Software Development Kit (SDK) based around freeRTOS, there are a number of more popular options:

- NodeMCU (based around the Lua programming language).
- MicroPython
- Arduino

## Sensors

There are a number of sensors that can be used for environmental sensors but it is important that you only pick those that are supported by Arduino libraries. The table below shows some of the most useful ones and includes links to online tutorials. If you identify other useful ones, let the module leader know and they can be added to the list.

| Environment                                           | Sensor       | Interface  |
| ----------------------------------------------------- | ------------ | ---------- |
| [_Temperature_](https://goo.gl/aNBgtK)                | _DS18B20_    | _1-WIRE_   |
| [_Temperature_](https://goo.gl/Jt4AvX)                | _TC74_       | I2C        |
| [Temperature and humidity](https://goo.gl/xdoFG6)     | DHT11        | 1-WIRE*    |
| [NH3,NOx, alcohol, smoke, CO2](https://goo.gl/zxCetD) | MQ-135       | ANALOG/THR |
| Hygrometer                                            | YL-69        | -          |
| [_UV_](https://goo.gl/3s6J4o)                         | _GUVA-S12SD_ | _ANALOG_   |
| [UV](https://goo.gl/1stWus)                           | VEML6070     | I2C        |
| [Light](https://goo.gl/YUftqv)                        | TSL2561      | I2C        |
| [Dust](https://goo.gl/MTNiyf)                         | GP2Y1010AU0F | ANALOG     |
| _Dust_                                                | _DSM501A_    | -          |
| [Vibration](https://goo.gl/4tNLi5)                    | SW-420       | THR        |
| [Sound](https://goo.gl/bCxrXF)                        | KY-038       | ANALOG/THR |
| [_Real time clock_](https://goo.gl/yBnyVe)            | _DS1307_     | _I2C_      |
| [Real time clock](https://goo.gl/yBnyVe)              | DS3231       | I2C        |
| [_Combustible Gas, Smoke_](https://goo.gl/2fBk1t)     | _MQ-2_       | -          |
| _Alcohol gas_                                         | _MQ-3_       | -          |
| _CH4 / Natural gas_                                   | _MQ-4_       | -          |
| _LPG, Natural Gas, Town Gas_                          | _MQ-5 MQ-6_  | -          |
| _CO (carbon monoxide)_                                | _MQ-7_       | -          |
| _Hydrogen_                                            | _MQ-8_       | -          |
| _Carbon Monoxide, Coal Gas, Liquefied Gas_            | _MQ-9_       | -          |

## Displays

As part of this project you may want to add a screen to display useful information such as the IP address etc.

| Display                                          | Interface |
| ------------------------------------------------ | --------- |
| [SSD1306 I2C OLED Screen](https://goo.gl/idmyaz) | I2C       |

## Equipment List

**You will be provided with kit** to use during the project however you may wish to purchase your own resources, below you can find a full costed kit. Prices and links are for Amazon but you can find these a lot cheaper if you shop around and you may be able to find some of this kit in the electronics lab (ask the supervisor in the lab first).

### Team Kits

The following items will be in the kit issued to your team. Make sure you check everything is there before signing for it.

| Equipment                                                   | Cost  |
| Equipment                                                   | Qty | Cost  |
| ----------------------------------------------------------- | --: | ----: |
| [Storage box](http://amzn.eu/hyI4x9J)                       | 1   | £7.30 |
| [NodeMCU ESP8266 CP2102 v3](http://amzn.eu/iFhW1f4)         | 1   | £6.99 |
| [Micro-USB cable 30cm](http://amzn.eu/eJ6z1Ux)              | 1   | £3.99 |
| [Breadboard](http://amzn.eu/4r8UL9Q)                        | 2   | £1.56 |
| [Breadboard power supply](http://amzn.eu/3YVPeDC)           | 1   | £2.48 |
| [AA Battery Holder to 9v](http://amzn.eu/616kZXO)           | 1   | £1.99 |
| [Power Jack to 9v clip](http://amzn.eu/9HzCdCB)             | 1   | £1.00 |
| [Jumper wires](http://amzn.eu/ejw4p3Q)                      | 65  | £3.95 |
| [Mixed resistors](http://amzn.eu/76cxzbo)                   | -   | £1.00 |
| [Mult-coloured LED](http://amzn.eu/88DIvzz)                 | 6   | £1.00 |
| [RGB LED](http://amzn.eu/in4Ovho)                           | 4   | £1.00 |
| [Temperature sensor module DS18B20](http://amzn.eu/6h2mzBC) | 1   | £1.35 |
| [Temperature/Humidity module DHT11](http://amzn.eu/glrhIqs) | 1   | £1.46 |
| [Gas sensor MQ-135](http://amzn.eu/h573jLl)                 | 1   | £5.60 |
| [Light sensor GY-2561 TSL2561](http://amzn.eu/a07k83G)      | 1   | £1.62 |
| [Vibration sensor SW-420](http://amzn.eu/crleUBd)           | 1   | £1.76 |
| [Sound sensor KY-038](http://amzn.eu/3tkqZG2)               | 1   | £3.60 |
| [Ultrasonic sensor HC-SR04](http://amzn.eu/cEqKyuC)         | 1   | £1.00 |

**NOTE:** One member of the team will have to sign for the kit at the start of the project. Any missing items will be charged at the prices in the table above.

### Basic Electronic Components

As well as the various sensors you will need some basic electronic components. These can be obtained from the electronics lab on the second floor of the EEC building.

| Component                        | Qty |
| -------------------------------- | --: |
| Variable (trimmer) resistor 10K  |   2 |
| Variable (trimmer) resistor 100K |   2 |
| Resistor 27K                     |   5 |
| Push button (DP)                 |   5 |

### Additional Sensors

Your lab supervisor will be able to provide limited quantities of the following additional sensors.

| Equipment                                                      | Cost   | Qty |
| -------------------------------------------------------------- | -----: | --: |
| [UV sensor VEML6070](http://amzn.eu/grXhZ2C)                   | £10.42 |   5 |
| [Dust sensor GP2Y1010AU0F](http://amzn.eu/5xqZT1y)             |  £8.76 |   5 |
| [GY-NEO6MV2 NEO-6M GPS Module](http://amzn.eu/j07kOl8)         |  £5.99 |   5 |
| [Real time clock DS3231](http://amzn.eu/0VfAOTr)               |  £4.99 |   2 |
| [0.96 ssd1306 i2c OLED](http://amzn.eu/g3Be2pk)                |  £6.99 |   5 |

## Lab Equipment

During your project you may need to troubleshoot your circuits. There are a number of tools that can be accessed in the Electronics lab on the second floor of the ECB. Make sure you have researched their purpose and how they are used.

| Equipment                                              | Cost   | Qty |
| ------------------------------------------------------ | -----: | --: |
| [Multimeter](http://amzn.eu/gMtjFrh)                   |  £3.82 |   2 |
| [USB voltage/current meter](http://amzn.eu/0Hdmuff)    |  £3.99 |   2 |
| [Soldering iron](http://amzn.eu/0yH0Mbu)               |  £6.95 |   1 |
| [Bus pirate v4](http://amzn.eu/f8b1qrQ)                | £38.99 |   1 |
| [Bus pirate probes](http://amzn.eu/cbTu20s)            |  £5.99 |   1 |
| [Open workbench logic sniffer](http://amzn.eu/8Pl4BUy) | £62.99 |   1 |
| [Logic sniffer cable x8](http://amzn.eu/e4sUOjy)       |  £9.68 |   2 |
| [Mini-USB cable 15cm](http://amzn.eu/bdsP2Ql)          |  £2.49 |   2 |

## Connecting to the API

Whatever data you collect will need to be passed to the API developed by the rest of your team. This data will be transmitted over the WiFI network using the built-in WiFi on the NodeMCU board and should publish data to a message queue server (which will need to be set up by your team), using the [MQTT protocol](https://www.ibm.com/developerworks/community/blogs/5things/entry/5_things_to_know_about_mqtt_the_protocol_for_internet_of_things?lang=en).

There are some existing IoT data patforms that use MQTT, you should investigate these:

- [Adafruit](https://io.adafruit.com)
- [Thinger](https://console.thinger.io)
