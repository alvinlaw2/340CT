
# Programming Refresher APIs

If you are completing this worksheet it is assumed that you are already familiar with the design of **Web APIs** and their development using NodeJS and the `Restify` package. This worksheet will serve as a refresher whilst learning how to use a technique called **Test-Driven Development** which you will need to apply on a regular basis during the remainder of this module.

If you are not familiar with API design or the use of NodeJS and Restify ask your lab tutor for additional resources.

Navigate to the `exercises/01_prof_dev/web_api/` directory which contains a simple web api built using **NodeJS** and the [restify](http://restify.com) package. Examine the folder structure and you will see that there are several directories:

```
├── __tests__
│   └── module.test.js
├── index.js
├── module.js
└── package.json
```

1. The `index.js` file contains the _routes_ script that controls the public-facing API.
2. The `module.js` directory contains the business logic.
3. the `package.json` file contains the project metadata.
4. The `__tests__/` directory contains a test scripts for the `module.js` script.


 Open the `package.json` file. Notice that there are certain modules listed as dependencies and others labelled as devDependencies. Use the `npm install` command to install all of these.

## Using the API

Install the [Postman](https://www.getpostman.com) software and launch. Now start the API using `node index.js`. There is a single resource collection called **items** and we will be adding to, deleting and retrieving from this collection by utilising different _HTTP methods_.

### Adding Items

To add items to a collection we need to use the **POST** method, specifying the data in the request body. In postman, select the **POST** method from the dropdown list and enter the collection URL to the right of this as shown below. In the request **Body** tab enter the required data as a JSON string. In the **Headers** tab create a new header called `Content-Type` with a value of `application/json` to let the API know your data is in the JSON format. If you click on the **Send** button your request will be sent to the API and you should see some data in the _response body_ tab as shown below.

![the Postman tool](images/postman_post.png)

You have added a new resource to the **items** collection. Try adding a few other items.

Examine the `index.js` script and locate the route that is being called. It starts with the line:

```javascript
server.post('/items', (req, res) => {
```

This calls the `add()` function in the `module.js` script. Open this file to understand how it works.

### Displaying Items

There are two ways to display the data, either all the items together (the collection) or an individual item (a resource) and an API should allow for both.

Change the method from POST to **GET** in Postman and use the **Send** button to make the HTTP request. Notice that the response contains an array with all the items you added.

Now change the URL to point to a resource within the collection by appending an extra URL segment: `localhost:8080/items/bread`, notice that this returns details of the _bread_ item. What happens if you access a resource that does not exist? Study the code to understand how this code works.

### Deleting Items

The final action we need to take on resources is to delete them. Keep the same URL in Postman but change the method to **DELETE**. Send the request to the server, what happens? Now display the collection, is the bread item in the array? Now send the same request, what happens?

## Unit Tests

One of the most important tools available to agile development teams is the **Unit Testing Framework**. This is used to write comprehensive automated tests that cover all the code in the app **model**. There should be one test suite per module. If you examine the `__tests__/` directory you will see that there is a `todo.test.js` script that contains the tests for the `modules/todo.js` script.

Lets start by running the tests using the `npm run` command. This produces the following output.

```
add
  ✓ adding a valid item (3ms)
getResource
  ✓ existing single item
  ✓ item not in the list (1ms)
getAll
  ✓ retrieving one item (1ms)
remove
  ✓ remove item from list (1ms)
  ✓ remove item that does not exist
extractBodyData
  ✓ extracts all fields
clear
  ✓ clears a list containing one item

-----------|----------|----------|----------|----------|-------------------|
File       |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------|----------|----------|----------|----------|-------------------|
All files  |      100 |      100 |      100 |      100 |                   |
 module.js |      100 |      100 |      100 |      100 |                   |
-----------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        1.221s
```

As you can see, the tests are grouped by function.

1. There are six functions in the `module.js` script and the tests cover all of these. Each test has a human-readable name and the tick `✓` marks indicate the tests have passed.
2. Underneath the list of tests is the _code coverage summary table which indicates how much of the code in your model is covered by the unit tests. If you want more detail, open the `coverage/lcov-report/index.html` file in the web browser which shows how many times each line of the code has been tested.
3. The final section is a summary that shows the overall status.

Open the `todo.test.js` file and see if you can understand how the tests have been written. In the next section you will be writing you own tests so its important you understand the syntax!

## Test-Driven Development

Now we can put our newfound skills to the test by learning to program using a technique called **Test-Driven Development** (TDD). This requires you to follow a short iterative 3-step process:

1. First you write a test to define the next bit of functionality to be written. When the test is run it will fail because the functionality has not been written yet (doh!).
2. Next you write code to implement the feature, stopping as soon as the new test passes.
3. Finally you tidy up (refactor) the code to make it easier to follow making sure the test still passes.

So lets make a start.

### First Iteration

Use Postman to send an HTTP request without a request body, what happens? If the request body is missing we want to flag this as an error and send a useful message back to the client.

#### Write a Failing Test

The first step is to define the functionality we want in the form of a test. Clearly we need to throw an error rather than simply ignore the request. Since the data is extracted in the `extractBodyData()` function we need to add an extra test to this section of the suite.

```javascript
test('throws error if body data is missing', () => {
	expect.assertions(1)
	try {
		const request = {body: undefined}
		list.extractBodyData(request)
	} catch(err) {
		expect(err.message).toBe('missing request body')
	}
})
```

If we run the test suite again we should find a that this new test fails!.

```
add
  ✓ adding a valid item (4ms)
getResource
  ✓ existing single item (1ms)
  ✓ item not in the list
getAll
  ✓ retrieving one item
remove
  ✓ remove item from list (1ms)
  ✓ remove item that does not exist (1ms)
extractBodyData
  ✓ extracts all fields
  ✕ throws error if body data is missing (11ms)
clear
  ✓ clears a list containing one item

● extractBodyData › throws error if body data is missing
  expect(received).toBe(expected) // Object.is equality
  Expected: "missing request body"
  Received: "Cannot read property 'item' of undefined"

    105 |                     list.extractBodyData(request)
    106 |             } catch(err) {
  > 107 |                     expect(err.message).toBe('missing request body')
        |                                         ^
    108 |             }
    109 |     })
    110 |

    at Object.toBe (__tests__/module.test.js:107:24)

-----------|----------|----------|----------|----------|-------------------|
File       |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------|----------|----------|----------|----------|-------------------|
All files  |      100 |      100 |      100 |      100 |                   |
 module.js |      100 |      100 |      100 |      100 |                   |
-----------|----------|----------|----------|----------|-------------------|
Test Suites: 1 failed, 1 total
Tests:       1 failed, 8 passed, 9 total
Snapshots:   0 total
Time:        1.38s
```

As you can see the summary indicates which tests have failed and the assertion that caused the failure.

#### Write Code to Pass the Test

The next step in the TDD process is to modify the `extractBodyData()` function until all the tests pass. Try making the following changes:

```javascript
module.exports.extractBodyData = request => {
	if(request.body === undefined) {
		throw new Error('missing request body')
	}
	return {item: request.body.item, qty: request.body.qty}
}
```

If you run the test suite, all the tests should now pass!

#### Refactor the Code

The third and final step in TDD is to clean up the code to make it easier to read. Try making the following changes.

```javascript
module.exports.extractBodyData = request => {
	if(!request.body) throw new Error('missing request body')
	return {item: request.body.item, qty: request.body.qty}
}
```

Don't be afraid to play around with your code at this stage, you will immediately know if you break it because after every change you will run the test suite again.

### TDD Second Iteration

What happens if the request body data is not a valid JSON string? Use postman and in the body enter the string "Hello World!", what response do you get? Use the 3 steps of the TDD process to ensure the API sends a user-friendly message in the response.

Use the three-step TDD technique to solve this issue, remember:

1. Write a failing test to describe the functionality.
2. Write code to pass the test.
3. Refactor the code ensuring all the tests still pass.

### Test Your Understanding

Now you have mastered the TDD technique, use it to solve the following. Remember each task should be a complete 3-step iteration:

1. Try adding an item called `bread` and another called `Bread`, what happens? These should be treated as the same item with the quantities combined.
2. Add another piece of data called `cost` to each list object, this represents the unit cost of the item.
3. Add a **total** field to the collection data that stores the total cost of the shopping.
