
# Configuring The IoT Editor

Install [Visual Studio Code](https://code.visualstudio.com) and then install the [PlatformIO](https://platformio.org) plugin. This can take some time!

Once installed you will need to restart VS Code. After restarting you will see the **PlatformIO Home** icon in the blue **Status Bar**. If the bar is not visible you can fix this using the _View > Show Status Bar_ menu. Clicking on this brings up the **PIO Home** screen and displays the **PlatformIO Toolbar** at the bottom of the IDE. This contains a number of important buttons:

![PlatformIO Toolbar](../.images/platformio_toolbar.png)

1. Home
2. Build
3. Upload
4. Upload to remote device
5. Clean
6. Test
7. Run task
8. Serial monitor
9. New terminal

## 1 Creating a PlatformIO Account

In order to complete this tutorial you will need to log in with a [**PlatformIO** account](https://community.platformio.org). Yu will be sent an activation email.

Locate the **New Project** button on the **PIO Home** screen and click it to launch the wizard.

![The PlatformIO Wizard](../.images/platformio_wizard.png)

You should give your project a title (Blink). For the board use the dropdown list to select the **NodeMCU 1.0 (ESP-12E Module)** and make sure the **Arduino** framework is selected. There is a default location for the project files but if you uncheck the **Location** checkbox you can choose where to save the project.

If you open the explorer tab in VSCode (the first icon down the left of the editor) you can see that PlatformIO has created a series of directories and files:

```
project_dir
├── lib
│   └── readme.txt
├── platformio.ini
└── src
    └── main.cpp
```

The project files should be saved in the `src/` directory and any project-specific libraries need to be in separate directories in the `lib/` directory.

Open the `src/main.cpp` file and replace its contents with the following:

``cpp
#include "Arduino.h"

#define LED_BUILTIN 2

void setup() {
  // initialize LED digital pin as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
``

Plug in your ESP8266, click on the **Build** button. Once the code is compiled and linked click on the **Upload** button to upload the hex file to the microcontroller. This should result in the onboard LED flashing on and off.

## 2 Unit Testing

Note that this feature requires a [paid account](https://platformio.org/pricing). The cheapest option is the **Basic Non-Commercial** licence. Your first month is free.

Now we will write some unit tests for our program. Start by creating a new directory called `test/` and create a file in it called `test_main.cpp`. Your project directories and files should look soemthing like the following:

```
project_dir
├── lib
│   └── readme.txt
├── platformio.ini
├── src
│   └── main.cpp
└── test
    └── test_main.cpp
```

Edit the `main.cpp` file and add the two lines as shown.

```cpp

#include "Arduino.h"

#ifndef UNIT_TEST  // IMPORTANT LINE!

#define LED_BUILTIN 2

void setup() {
  // initialize LED digital pin as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}

#endif    // IMPORTANT LINE!
```

Now add the following code to the new test file.

```cpp
#include <Arduino.h>
#include <unity.h>

#ifdef UNIT_TEST

void test_led_builtin_pin_number(void) {
    TEST_ASSERT_EQUAL(LED_BUILTIN, 2);
}

void test_led_state_high(void) {
    digitalWrite(LED_BUILTIN, HIGH);
    TEST_ASSERT_EQUAL(digitalRead(LED_BUILTIN), HIGH);
}

void test_led_state_low(void) {
    digitalWrite(LED_BUILTIN, LOW);
    TEST_ASSERT_EQUAL(digitalRead(LED_BUILTIN), LOW);
}

void setup() {
    // NOTE!!! Wait for >2 secs
    // if board doesn't support software reset via Serial.DTR/RTS
    delay(2000);

    UNITY_BEGIN();    // IMPORTANT LINE!
    RUN_TEST(test_led_builtin_pin_number);

    pinMode(LED_BUILTIN, OUTPUT);
}

uint8_t i = 0;
uint8_t max_blinks = 5;

void loop() {
    if (i < max_blinks)
    {
        RUN_TEST(test_led_state_high);
        delay(500);
        RUN_TEST(test_led_state_low);
        delay(500);
        i++;
    }
    else if (i == max_blinks) {
      UNITY_END(); // stop unit testing
    }
}

#endif
```

To run the tests click on the **Test** button, you will need to log in with your PlatforIO account.