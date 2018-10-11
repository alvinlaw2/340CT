
# Programming Refresher Express

If you are completing this worksheet it is assumed that you are already familiar with both NodeJS and the `Express` package that is used to build dynamic websites. This worksheet will serve as a refresher whilst learning how to use a technique called **Test-Driven Development** which you will need to apply on a regular basis during the remainder of this module.

If you are not familiar with NodeJS and Express ask your lab tutor for additional resources.

Navigate to the `exercises/01_prof_dev/express/` directory which contains a simple dynamic website that uses the **Express** web server and the **Handlebars** templating engine. Examine the folder structure and you will see that there are several directories:

```
.
├── index.js
├── modules
│   └── todo.js
├── package.json
├── public
│   └── style.css
├── __tests__
│   └── todo.test.js
└── views
	├── home.handlebars
	└── layouts
		└── main.handlebars
```

1. The `index.js` file contains the _routes_ script that controls the website.
2. The `modules/` directory contains the three modules that will contain the business logic.
3. the `package.json` file contains the project metadata.
4. The `public/` directory contains files that can be directly accessed by the web server
2. The `__tests__/` directory contains test scripts that matche each of the modules
3. The `views/` directory contains the _Handlebars_ page templates used by the express renderer


 and open the `package.json` file. Notice that there are certain modules listed as dependencies and others labelled as devDependencies. Use the `npm install` command to install all of these.

Start the web server using `node index.js` and access the URL (this will be `localhost:8080` if you are running it on your workstation). This will display a simple web page containing a form where you can add items to your list. Try adding some items.

## Model-View-Controller Architecture

One of the most important techniques you can apply to your software is the MVC architectural pattern.

![MVC Pattern](https://yangsiyin.files.wordpress.com/2016/07/mvc_diagram.png)

[codeproject.com](https://yangsiyin.wordpress.com/2016/07/29/about-the-mvc-design-pattern-2/)

lets see how the todo app implements the MVC Design Pattern.

### Model

The model represents the data model used by the app. This includes all business logic and data storage. In the todo app this is represented by the files in the `modules/` directory. In our example there is only one module but there could be as many as needed.

### View

The view is the presentation layer of the application. In the todo app this is represented by the contents of the `views/` directory. These are the handlebar template files that will be filled with data and sent to the client in the http response.

### Controller

The controller is responsible for taking the user input (http request), interacting with the model and finally determining what view to send back to the client in the http response. In the todo app this is represented by the `index.js` script.

## Unit Tests

One of the most important tools available to agile development teams is the **Unit Testing Framework**. This is used to write comprehensive automated tests that cover all the code in the app **model**. There should be one test suite per module. If you examine the `__tests__/` directory you will see that there is a `todo.test.js` script that contains the tests for the `modules/todo.js` script.

Lets start by running the tests using the `npm run` command. This produces the following output.

```
add
  ✓ check there is a single item (4ms)
  ✓ adding a single item
clear
  ✓ clear list with items (1ms)
  ✓ clearing empty list should throw error
getAll
  ✓ retrieving a single item (1ms)
  ✓ retrieving empty list should throw an error

----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |      100 |      100 |      100 |      100 |                   |
 todo.js  |      100 |      100 |      100 |      100 |                   |
----------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        0.445s, estimated 1s
```

As you can see, the tests are grouped by function.

1. There are three functions in the `todo.js` script and the tests cover all three. Each test has a human-readable name and the tick `✓` marks indicate the tests have passed.
2. Underneath the list of tests is the _code coverage summary table which indicates how much of the code in your model is covered by the unit tests. If you want more detail, open the `coverage/lcov-report/index.html` file in the web browser which shows how many times each line of the code has been tested.
3. The final section is a summary that shows the overall status.

Open the `todo.test.js` file and see if you can understand how the tests have been written. In the next section you will be writing you own tests so its important you understand the syntax!

## Test-Driven Development

Now we can put our newfound skills to the test by learning to program using a technique called **Test-Driven Development** (TDD). This requires you to follow a short iterative 3-step process:

1. First you write a test to define the next bit of functionality to be written. When the test is run it will fail because the functionality has not been written yet (doh!).
2. Next you write code to implement the feature, stopping as soon as the new test passes.
3. Finally you tidy up (refactor) the code to make it easier to follow making sure the test still passes.

So lets make a start.

### Understanding How The Form Works

Before we can implement any improvements we need to understand how the script currently works, so lets take a look at the form we are submitting, this is in the default _layout_ file and can be found in the `views/layouts/main.handlebars` file.

1. The form element `<form method="post" action="/">` shows that the form sends a POST request to `/`.
2. Opening the `index.js` file you can see two routes:
	1. The first, `app.get()` handles GET requests.
	2. The second, `app.post()` handles POST requests, this is the route that handles the form data.
3. The route is simply calling the `todo.add()` function then redirecting back to the `app.get()` route. This means we need to fix the `todo.add()` function. This is in the `modules/todo.js` file.
4. The `add()` function in the `todo.js` file is currently very simple, it creates an object containing the item and quantity data it has been passed then pushes this onto the array.

### First Iteration

Try clicking on the **Add item** button without entering an item name or quantity. What happens? We want to be able to prevent this from happening. Based on our understanding it is clear we need to improve the `todo.add()` function.

The first step is to define the functionality we want in the form of a test. Clearly we need to throw an error rather than simply add a blank item to the list. Since we are testing the `add()` function we need to add an extra test to this section of the suite.

```javascript
test('adding a blank string should throw an error', () => {
	expect.assertions(1)
	try {
		todo.add('bread', 1)
		todo.add('', '')
	} catch(err) {
		expect(err.message).toBe('item is blank string')
	}
})
```

Notice that the test expects a single assertion that checks that the error message is correct. Try running the test suite, notice that this new test fails!

```
add
  ✓ check there is a single item (6ms)
  ✓ adding a single item (1ms)
  ✕ adding a blank string should throw an error (9ms)
clear
  ✓ clear list with items (1ms)
  ✓ clearing empty list should throw error (1ms)
getAll
  ✓ retrieving a single item (1ms)
  ✓ retrieving empty list should throw an error (1ms)
```

Step 2 is editing the function so that the test passes. To do this we need to check for a string with a length of 0. Here is the modified function:

```javascript
module.exports.add = (item, qty) => {
	if(item.length === 0) {
		throw new Error('item is blank string')
	}
	data.push({item: item, qty: qty})
}
```

Try running the test suite again, notice that all the tests now pass. Time to move onto step 3.

The third and final step is to refactor the code, that is to change its structure and layout to improve legibility. In this case, since there is only a single line in the conditional we can remove the curly braces as shown:

```javascript
module.exports.add = (item, qty) => {
	if(item.length === 0) throw new Error('item is blank string')
	data.push({item: item, qty: qty})
}
```

We run the test suite again to make sure we have not broken anything. The tests still all pass so we have now completed our first iteration of TDD!

### Test Your Understanding

Now you have completed the first iteration, repeat the TDD process as you solve each of the issues listed below:

1. Try entering a non-number in the _Qty_ field, what happens? We need to check that the value is a valid number before adding it to the list. If it is not a valid number, a value of **1** should be used.
2. Try leaving the _Qty_ field blank, what happens? In this situation the value of **1** should be used.
3. Try adding the same item twice, what happens? Adding the same item should increase the quantity rather than adding a duplicate item.
4. Try adding a capitalised item (such as `Bread`) then adding the same item in lowercase (such as `bread`), what happens? All list items should be stored in lowercase.

### Implementing a Delete Functionality

There is a **delete** link at the end of every row in the list. What happens when you click on these?

Now you are familiar with writing unit tests and applying a TDD methodology its time to stretch you knowledge by implementing the missing functionality. The route has already been created and there is a `delete()` function in the `todo.js` script although it currently doesn't do anything.

Apply the TDD methodology to implement the following (this will require 5 iterations):

1. Use the [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method to delete the array index passed as a parameter to the `delete()` function.
2. If the index passed in the parameter is larger than the size of the array you should throw an error.
3. If the parameter is not a number an error should be thrown.
4. If the parameter is not an integer (whole number) an error should be thrown.
5. If the parameter is a whole number below `0` an error should be thrown.

----

## 7 Preparation

You will need to ensure your skills are up to date before we begin preparation in week 3.

### 7.2 API Team

1. Subscribe to an MQTT data feed on [Adafruit](https://io.adafruit.com/) using NodeJS and print data to terminal. There is a good [online tutorial](https://learn.adafruit.com/adafruit-io/mqtt-api) to get you started.
2. Build an MQTT server. Heroku offer a [free hosting option](https://devcenter.heroku.com/articles/cloudmqtt)

### 7.3 Front End

1. Get familiar with the mapping APIs! (Google Maps / Apple Maps)
