
# The ECMA6 Programming Language

In this lab you will get to grips with the ECMA6 programming language by learning to build dynamic websites

## 1 Templating

We will start by producing dynamic web pages that combine a static layout with dynamic data using a **templating view engine**.

There are a number of _templating view engines_ that are compatible with Express however in this worksheet we will be using one of the more popular ones, called [Handlebars](https://www.npmjs.com/package/handlebars). This needs to be imported into your script and set the default _layout page_.

### 1.1 Basic Templating

Locate the files in the `01_nodejs/01_templates_forms/simple_templating/` directory, install the dependencies and start the server.

Access the base route `/`, notice that you are seeing a basic html page. Open the script:

1. We start by importing the Handlebars package and create a default layout called main. This defines the `main.handlebars` page as the one to use as the default website layout.
	1. Open the `views/layouts/main.handlebars` file.
	2. This template page will be used by _all_ the pages in the website.
	3. Notice there is a `{{{body}}}` placeholder, this defines where the different page templates will be inserted.
2. In the base route `/` we call the `res.render()` function and pass it the name of the template we want to use:
	1. The parameter is a string, `home`.
	2. This refers to the template `views/home.handlebars`
3. The contents of the `home.handebars` template is inserted into the layout file replacing the `{{{body}}}` placeholder.

#### 1.1.1 Static Files

When an html page is loaded into a browser it contains link to other _static_ files such as stylesheets and images. These need to be stored in a directory on the Express server which is visible to the browser:

1. Open the `index.js` script and locate line 11, this tells the Express web server to make the contents of the `public/` directory visible to external clients.
2. Locate the `public/` directory and notice it contains two directories
    1. One called `css/` containing the stylesheet
    2. And one called `images/` containing some image files.
3. Because all the pages share the same stylesheet, the `views/layouts/main.handlebars` file includes a link to the stylesheet.
4. We have also added an `img` element to the `home.handlebars` html to display the image.

#### 1.1.2 Test Your Understanding

1. Create a `/hello` route that uses a template file called `hello.handlebars` to display a heading with the text `Hello World!`
2. Modify the external stylesheet to display the heading in dark red.
3. Find a smiley face image online and display this on the page.

### 1.2 Inserting Data into a Template

So far we have not done anything particularly useful except separate out the _layout_ from the content. In this section you will learn how to insert data directly into a template before it is rendered to the browser.

In the previous example you have seen how to insert single values into a web page but how to we display lists of data? A list is stored in an **array** in JavaScript so the first task is to ensure your data is in an array. If you recall lab 3 you will remember that the sqlite `db.all()` function returns an `Array`.

Restart the server and access the `/date` route. Notice that it displays the current date in the browser. Open the `index.js` file and locate the route.

1. We start by creating a new `Date` object.
2. We use its built-in functions to create a string containing the current date.
3. Next we create a [JavaScript object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics) that contains all the data we want to send to the template:
    1. In this example we have a `title` property containing the string `My First Template`.
    2. We have a seccond property called `today` that contains the date string we have just built.
4. Finally we call `res.render()` but this time we pass the data as the _second parameter_.

To understand what happens to this data we need to understand the _template_. Locate the `views/date.handlebars` template file:

1. Notice that there are two _placeholders_, shown as `{{xxx}}`.
    1. Each placeholder has a name.
    2. The names need to match the properties in the data we are sending to the template.
2. Each placeholder is replaced by the data stored against the object property:
    1. The `{{title}}` placeholder is replaced by the string `My First Template`.
    2. The `{{date}}` placeholder is replaced with the date string we built in the script.

#### 1.2.1 Test Your Understanding

1. Use suitable properties of the [`Date` object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) to display the date in a variety of different formats in a series of paragraph elements:
    1. dd/mm/yyyy
    2. a Unix timestamp (number of seconds since 1st Jan 1970)
2. Add a table to display some information about the client computer (using the `req.connection` object).
3. Extend the table to display the header information (using the `req.headers` object).
4. Insert a picture of a calendar.

### 1.3 Repeating Data

So far we have inserted data from object properties into our templates. This works find for single records however often we will have multiple records to display such as the results of a database query. In this situation we will need to repeat a block of html code such as a list item or table row.

Restart the server and view the `/food` route. Notice that it displays a numbered list showing four food items. Locate the route in your script.

1. We start by creating an array. Each imdex contains an object with two properties, name and qty.
2. We pass the array to `res.render()` as a JavaScript object using the myFood property.

Open the `food.handlebars` template:

1. Notice that there is an ordered list element.
2. Inside this there is a special **helper**, `{{#each myFood}}`
    1. The helper also has a closing block `{{/each}}`
    2. The `myFood` property is passed to the opening block.
3. This block loops through the array stored in the `myFood` property.
4. The `this` object holds the object for the current index.
    1. So `this.item` returns the `item` property (the name of the food item).

This allows the handlebars template view engine to handle repeated data.

#### 1.3.1 Test Your Understanding

1. Modify the template to display the shopping items in a html table instead of an ordered list.
2. Add a second column to display the quantities of each item.
3. Add a table header to display column headings.
4. Without adding any more html, colour every other row of the table in light grey.

### 1.4 Putting it Together

You have covered a lot of topics over the first few weeks of the module. Before you continue, complete the challenges listed below. These will help you revise all the content you have covered.

The `repeating_data/` directory contains a 2-page template-driven dynamic website based on the data you used in the **Databases** lab. Install the dependencies, start the server and access the base route `/` and the `/details/1` route then study the script `index.js`.

#### 1.4.1 Test Your Understanding

Now try to complete the following challenges:

1. Add a route called `/about` that displays information about the fictional bookshop.
2. Add a footer that appears on all pages using the correct html5 element.
3. Convert the list of books into a table.
4. Add a column to display the ISBN number
5. Add a hyperlink to the book titles to jump to the correct book details page.
6. Add a column that displays links to take you to the [Amazon product page](https://www.amazon.co.uk/gp/search/ref=sr_adv_b/?search-alias=stripbooks&field-isbn=9781491943120) (hint: use the ISBN number and study this link carefully!).
7. Create and link a stylesheet to improve the page appearance:
    1. Style the header.
    2. Style the footer.
    3. Make the table easier to read.
8. Add all the database fields to the product details page.
9. Modify the stylesheet to improve the appearance.

If you can complete them all successfully, well done! You are ready to move onto the next section.

## 2 Forms

In this final part of the worksheet you will be building forms that can send data to a web server. Locate the `simple_forms/` directory, install the necessary modules and start the server.

Lets start by looking at how forms send data to the server. This can be done using the HTTP `GET` method or using the `POST` method. Lets try out both so we can understand the differences.

### 2.1 Submitting Data Using POST

Make sure the web server is running and access the `/postform` route and open the corresponding html file.

1. Complete the form with your name.
2. Click on the the **Submit** button.
3. Examine the URL carefully:
    1. Notice that it points to the base route `/` with no additional data in the URL.
4. Open the _Chrome developer tools_ and look at the _http request_:
    1. Notice that the request uses the `POST` method. This corresponds to the `method` attribute in the `<form>` element.
    2. The request header includes a `Content-Type` header which contains the value `application/x-www-form-urlencoded`.
5. There is a _request body_ which contains the form data:
    1. This uses the `application/x-www-form-urlencoded` encoding.
    2. Notice that it contains 2 query parameters in a querystring.
    3. The names of the query parameters correspond to the values in the `name` attributes in the `<input>` elements.

### 2.2 Submitting Data Using GET

Make sure the web server us running and access the `/getform` route and open the corresponding html file.

1. Complete the form with your name.
2. Click on the the **Submit** button.
3. Examine the URL carefully:
    1. Notice that it contains 2 query parameters in a querystring.
    2. The names of the query parameters correspond to the values in the `name` attributes in the `<input>` elements.
4. Open the _Chrome developer tools_ and look at the _http request_:
    1. Notice that the request uses the `GET` method. This corresponds to the `method` attribute in the `<form>` element.
    2. The URL contains the data (remember there is only a request _body_ when the `POST` method is used.

### 2.3 Form Controls

In the previous section the form used the `<input>` element which displayed simple text boxes where you could enter anything. In this section you are going to learn about how to use a wide range of different controls to capture user input.

locate and open the `complex_forms/` directory. Install the required modules and start the server. Open the `/register` route which will display a course registration form, complete this and submit the form. This demonstrates some of the more complex controls you can use. Open the `views/register.handlebars` file which contains the markup used to render the form. Notice the following (see how many you can spot in the example form):

1. The form is split into several logical sections using the [fieldset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset) element.
2. Each fieldset has a [legend](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend) element that represents its caption.
3. Each form element has a `name` attribute. This is the key that the data can be accessed from by the processing script. Try completing the form and submitting. Examine the JSON data and compare the object keys to the form element names.
4. Each form element has a label. The `for` attribute should match the `name` attribute of the form element it is labelling.
5. The [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element defines a number of input types that can be used in forms:
    - Plain text: `<input type="text">`
    - Password fields: `<input type="password">`
    - Email addresses: `<input type="email">`
    - URL addresses: `<input type="url">`
    - Numeric data: `<input type="number">`
    - Date pickers: `<input type="date">`
    - Hidden fields `<input type="hidden">`
6. Sometimes we want the user to pick from a list of options:
    1. The [select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) element creates a dropdown list with each list item defined as an [option](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
    2. If we set the `type` attribute of an `input` element to `radio` we create a set of _radio buttons_. If we set the name of each to the same, only one can be selected at once.

#### 2.4.1 Test Your Understanding

Complete the following tasks. After each, complete and submit the form to ensure all data is avaialable:

1. Add a box for the user's email address in the personal detail section.
2. Create a new fieldset for the user's address and add input boxes to capture this. Make sure each box has a unique, descriptive `name` attribute.
3. You will find a json file containing a longer list of courses. Replace the static list with the data contained in this file (you will need to pass some repeating data to the template).
4. Display the form data on the page rather than just the JSON string (you will need to pass each item through to the template and insert into individual placeholders).
5. Add a link to the data page to return to the form.
