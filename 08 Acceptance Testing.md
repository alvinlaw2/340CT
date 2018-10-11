
# Acceptance Testing

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done.

You should refer to [this week's presentation](https://drive.google.com/open?id=1zShIZrqubjfqAf68On-mWzwmaU45shqY_2IVzzn5TJ0).

Unlike in previous labs where each subteam carried out all the tasks, in this worksheet some of you will be carrying out part 1 and some of you part 2. Make sure you are clear as to which you should be doing.

1. If your system is _directly used by the client_ (such as a website or smartphone app) you need to complete task 1 **User-Facing Acceptance Testing**.
2. If your system is _not_ directly accessed by the client (such as an API or embedded microcontroller) you need to complete task 2 **Backend Acceptance Testing**

## 1 User-Facing Acceptance Testing

Since the end users will directly interact with your part of the system you will need to implement your acceptance tests using Gherkin/Cucumber. 

### 1.1 Defining Scenarios

Before starting your next sprint, revisit each of the completed _user stories_ and define each of them using a _business-readable DSL_ such as Gherkin. There is an example in the `exercises`.

1. Create a `features/` directory.
2. Create a file with a `.feature` extension for each user story.
3. At the top of each of the files create a **feature** and add the user story.
4. Now define a number of **scenarios** to clearly and unambiguously define all the tests you need to carry out.
5. Under each scenario, list the steps required.
6. Finally you need to create a short _Javascript_ script called `testRunner.js` which will run the `gherkindoc` tool to generate your **documentation site**.

### 1.2 Executable Specifications

By now you should have a complete set of feature files that cover all the user stories you have developed so far. The next step is to convert these into _executable specifications_ using the **Cucumber** tool. This takes each _feature file_ and tries to run these against the software you are developing.

To achieve this you need to set up a series of step definitions that _translate_ lines in your _scenarios_ into automated steps that are carried out on your software. There are two decisions to be made:

1. What language will you use to write the step definitions? Although Cucumber was originally written in **Ruby** it has been ported to many other languages including Python, Java and Nodejs (JavaScript).
2. What driver will you use to allow the step definitions to interact with your product.

There is some documentation plus sample code in the `exercises/09_acceptance/` directory to get you started.
    
You can find some examples in the `exercises/09_acceptance/` directory.

## 2 Backend Acceptance Testing

You will need to implement a suite of acceptance tests but, since you part of the system is not directly accessed by the end users, you won't need to define features and scenarios using Gherkin/Cucumber.

There are a number of examples in the `exercises/09_acceptance/03_acceptance_testing/` directory and you will be able to find additional resources online.

### 2.1 Microcontrollers and Acceptance Testing

Acceptance testing can (and should) be carried out on an embedded system. The software should be flashed onto the controller and then tested:

1. The test suite should subscribe to the apropriate MQTT channel.
2. It should supply an input to one or more of the pins.
3. The data coming from the MQTT channel should be compared to an expected value.

For this to work you will need a way to control the voltages being fed to the inputs. Probably the easiest way would be to use a second microcontroller (Arduino) and write a script to generate voltages at the ouput pins based on data sent through the USB/Serial cable.
