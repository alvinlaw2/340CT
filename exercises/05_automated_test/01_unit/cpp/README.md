
## Unit Testing C++ Code

In this tutorial we will be using the [Google Test](https://github.com/google/googletest) unit testing framework.

## Installation

Rather than provide instructions for different platforms there are already detailed instruction for [Linux](https://stackoverflow.com/questions/13513905/how-to-setup-googletest-as-a-shared-library-on-linux). [MacOS](https://github.com/iat-cener/tonatiuh/wiki/Installing-Google-Test-For-Mac) and [Windows](https://github.com/iat-cener/tonatiuh/wiki/Installing-Google-Test-For-Windows).

## Getting Started

Here is a [really good tutorial](https://www.ibm.com/developerworks/aix/library/au-googletestingframework.html) from IBM showing you how to write your first unit test suite.

## Unit Testing Arduino Code

https://stackoverflow.com/questions/780819/how-can-i-unit-test-arduino-code

https://github.com/mmurdoch/arduinounit/

### Arduino Emulators

https://github.com/maniacbug/ncore

https://github.com/buserror/simavr

## GitHub CovCom for CxxTest handout:

https://github.com/covcom/122COM/blob/2016-17_jan/testinglecture_handout.pdf

## Creating your first Cxx Test

### Install CxxTest and get g++

This process can be done from command line on Windows or Mac.  Just make sure you have a C++ compiler installed (e.g. g++) and have downloaded CxxTest.
You can download CxxTest from [here](https://sourceforge.net/projects/cxxtest/files/cxxtest/)

Once you have CxxTest installed you can unzip to a suitable directory on your system.

On the University PCs g++ is **not** installed by default!  In order to get it you can launch codeblocks from the apps anywhere system, and then you will find the g++ in the directory:  C:\Program Files (x86)\CodeBlocks\MinGW\bin\g++.exe

### Creating your first Cxx Test Suite

Unit testing involes testing your own code.  I.e. you should not be testing any API or library calls.  You will need to seperate your source code from your API calls.  I suggest creating a seperate class with methods for your business logic code (i.e. any code **not** invloved wih input or output API calls).

So in my example I have Maths.h and Maths.cpp which contains my business logic (a simple add function).  For yours, you may be calculating a moving average etc.
Then you will need to write a test suite for CxxTest to work, let's call it - TestSuiteCXX.h
You can see an example for the structure of a Cxx test suite [here](http://cxxtest.com/guide.html).

We can run the test suite from command line with the following 3 statements:

cxxtestgen --error-printer -o runner.cpp MyTestSuite1.h

g++ -o runner -I$CXXTEST runner.cpp

./runner

This will give you output such as:
Running cxxtest tests (1 test).OK!

Now, you **will** need to modify these commands based on the your project paths on the system you use and the CxxTest and g++ install directories etc.
On my system (Uni PC) the commands look like:

H:\_Lecturer\302CEM\cxxtest-4.4\cxxtest-4.4\bin\cxxtestgen --error-printer -o runner.cpp TestSuiteCxx.h

"C:\Program Files (x86)\CodeBlocks\MinGW\bin\g++" -o runner -IH:\_Lecturer\302CEM\cxxtest-4.4\cxxtest-4.4 runner.cpp Maths.cpp

.\runner

Note on Uni PCs I manged to get this working through the default windows command line - cmd.exe.  Note Windows powershell.exe did not work for me!


Once you have this working from command line you can then investigate automated testing via creating you own custom build scripts.

The build process including tests can also be automated (i.e. automated testing) via a build system e.g. Makefiles, an example is here:
https://emou.wordpress.com/2009/10/02/unit-testing-in-c-using-cxxtest/


## Switching from the Arduino IDE to using VSCode

**Optionally** you can switch to using the VSCode IDE for Arduino development.  This IDE has numerous benefits over the Arduino IDE.

Steps to setting up VSCode for Arduino Development:
1. Install Arduino IDE
2. Install VS Code
3. In VS Code Open Folder for storing your C++ project and create C++ files and Arduino .ino files.
4. Install C++ extension in VSCode
5. Install Arduino extension in VSCode
6. In VSCode User Settings set:

```json
{
    "arduino.additionalUrls": "http://arduino.esp8266.com/stable/package_esp8266com_index.json"
}
```

7. In VSCode Board Manager Install esp8266
8. Ctrl-Shift-P  Change Board Type  Adafruit HUZZAH ESP8266
9. Set c_cpp_properties.json with paths to Arduino install
10. Force Intellisense to use the "Tag Parser" in the User Settings:
11. Set up the c_cpp_properties.json
https://github.com/Microsoft/vscode-arduino/issues/438


