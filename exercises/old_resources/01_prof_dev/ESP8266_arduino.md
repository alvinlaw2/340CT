
# Configuring ESP8266 Development Using the Arduino IDE

Although the IoT kit comes complete with an [ESP8266 development board](https://www.losant.com/blog/top-6-esp8266-modules) which can be programmed in C++ using the [Arduino IDE](https://www.arduino.cc/en/Main/Software) or with [MicroPython](https://docs.micropython.org/en/latest/esp8266/esp8266/tutorial/intro.html), you should only use it if you are already familiar with either of these development environments. If not you are advised to use whatever microcontroller and tool chain you are most comfortable with.

The rest of this worksheet covers setting up the Arduino IDE to be able to use it to create scripts and flash them. 

You will need to install drivers on your computer. Look on the base of the NodeCMU. If it states you need the **2102 driver** you can download and install [here](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers).

Install the Arduino IDE

Install the [CH340 Drivers](https://sparks.gogo.co.nz/ch340.html) for your chosen platform.

You may need to install the [NodeMCU Drivers](https://github.com/nodemcu/nodemcu-devkit/tree/master/Drivers) for your chosen platform.

Here are the [Official FTDI Drivers](http://www.ftdichip.com/Drivers/VCP.htm) for the different operating systems.

Arduino > Preferences

Paste the following into the **Additional Boards Manager** box.

`http://arduino.esp8266.com/stable/package_esp8266com_index.json`

Click on OK to close the Preferences window

Tools > Boards > Board manager.

find `esp8266 by esp8266 community` and install the latest version (2.4.0 at the time of writing).

## Board setup for programming

After installing the drivers, you can choose the correct board in your IDE.

In Arduino IDE --> Tools --> Board --> NodeMCU 1.0 (ESP 12E Module)

If the option is available, modify the reset method in Arduino IDE to "nodemcu" by selecting `Tools -> Reset Method -> nodemcu`.

If the sketch doesn't upload correctly you may need to change the board type to `Generic ESP8266 Module`.

NOTE

Next you need to set the COM port and baud rate.

To find out the COM port that the arduino is plugged into, you can unplug the arduino, check the port which are active via Tools --> Port in Arduino IDE.  Then plug the board in again and you should see an additional COM port listed and select it.

On a Mac the port looks like `/dev/cu-wchusbserial1460`.

To find out which COM port you have connected your NodeMCU development board to, you can use Device Manager or a Serial Watcher [Apps Anywhere](https://appsanywhere.coventry.ac.uk/) program.

For programming you will need to select the COM port and Baud Rate 115200 Upload Speed.

## Useful Libraries

You will need to install a number of libraries to add more functionality to your Arduino projects. These need to be unzipped and placed in a `libraries/` directory inside the save directory. There are many libraries to use but you might find the following useful:

1. The [ESP8266/Arduino](https://github.com/esp8266/Arduino/releases) library was installed when you added the json link to the boards manager. It includes the [ESP8266WiFi](https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/readme.html) library to connect to WiFi access points using an SSID and password.
2. The [imroy/PuSubClient](https://github.com/Imroy/pubsubclient) library makes it simple to connect and publish to an MQTT broker (server) from an ESP8266.
3. Adafruit have created their own [Adafruit_MQTT_Library](https://github.com/adafruit/Adafruit_MQTT_Library) which makes it easy to connect to and publish data to their cloud server.
4. The [ArduinoUnit](https://github.com/mmurdoch/arduinounit/releases) library allows you to write and run unit and integration tests.

## Connecting to WiFi

One of the most important jobs is to make sure the NodeMCU can connect to a WiFI network, otherwise you won't be able to send any data to the API. There is a useful library called `ESP8266WiFi` which was installed if you followed the steps above. Below is a simple sketch to test the connection to the WiFi network.

```cpp
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>

ESP8266WiFiMulti WiFiMulti;

void setup() {
    Serial.begin(115200);
    delay(10);

    // We start by connecting to a WiFi network
    WiFiMulti.addAP("ECL-LEGO-ROBOTS", "9cjjp64270");

    Serial.println();
    Serial.println();
    Serial.print("Wait for WiFi... ");

    while(WiFiMulti.run() != WL_CONNECTED) {
        Serial.print(".");
        delay(500);
    }

    Serial.println("");
    Serial.println("WiFi connected");
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());

    delay(500);
}


void loop() {
    
}
```

### Connecting in the Lab

Unfortunately IoT devices such as NodeMCU (and Lego!) can't connect to the Main University WiFi and so we have set up a network for you to use.

The `ECL-LEGO-ROBOTS` network is setup to allow internet on ports 1883 and 8883 and so you should connect to this and make sure you only use these ports to communicate.

### Connecting at Home

You should be able to connect to your home Wifi network without any issues. If you are having problems check the _security settings_ and, if available, choose `WPA/WPA2-PSK (mixed mode)`. If you discover any more information that might be useful to others, edit this document and file a _merge request_.

You should see the NodeMCU listed under _connected devices_ on your router admin page, with the name `ESP_XXXXXX` where XXXXXX is part of the Mac Address.

## Writing Modular Code

Create a library.

## References

http://www.instructables.com/id/Quick-Start-to-Nodemcu-ESP8266-on-Arduino-IDE/
