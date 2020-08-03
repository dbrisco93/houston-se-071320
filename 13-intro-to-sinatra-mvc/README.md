## **Introduction to Sinatra and MVC**

### **SWBATs**
- Explain Model View Controller (MVC) pattern
- Explain how web frameworks (like Sinatra) use the MVC pattern and why
- Define 'convention over configuration'
- Implement one model that inherit from ActiveRecord
- Implement one controller to route and process requests
  - Demonstrate how the params hash changes and where the data comes from
- Implement ERB template and get it to render data from controller and model
- Practice file structure in Sinatra
- Identify the connection between REST and CRUD

### Outline

- How and why we use MVC pattern
- How CRUD actions map to RESTFul Routing
  - Routing
- Define 'convention over configuration'
- How Sinatra serves up data in response to web requests

### Review

- TCP => defines how computers send packets of data to each other
- HTTP => define how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands
- HTML => defines the standard markup language for creating web pages and web applications
- IP => the principal communications protocol in the internet protocol suite for relaying datagrams across network boundaries; aka; defines the format of your 'internet address'
- TCP/IP => how to send + where to send

### Types of Requests

- GET
- POST
- PATCH / PUT
- DELETE
- [More](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

### REST
- REpresentational State Transfer <= Representing something, data == state, transfer it somewhere
- Routes => URLs => endpoints

### **MVC Architecture**

In a typical application you will find these three fundamental parts:

- Data (Model)
  An interface to view and modify the data

- (View)
  An interface to view and modify the data

- (Controller)
  Operations that can be performed on the data

The MVC pattern, in a nutshell, is this:

- The model represents the data, and does nothing else. The model does NOT depend on the controller or the view.

- The view displays the data through the controller, and sends user actions (e.g. button clicks) to the controller. The view is independent of both the model and the controller.

- The controller provides model data to the view, and interprets user actions such as button clicks. The controller depends on the view and the model.

Rule 1 is the golden rule of MVC:
**The model represents the data, and does nothing else.**

### **CRUD, URLs and REST**

CRUD:
- Create, Read, Update, Delete

Mapping CRUD to Request Types:
- GET: Read
- POST: Create
- PATCH / UPDATE: Update
- DELETE: Delete

RESTFul Routing actions:

- controller #index
- controller #new
- controller #create
- controller #show
- controller #edit
- controller #update
- controller #destroy


#### Why Sinatra?

Rack can be messy, it gives people a lot of flexibility but at the expense of time. Since we are here to learn higher-order concepts, wasting time on configuration prevents us from drilling into those. Sinatra has the added benefit of giving us convention on modularizing our code, which has an immense long-term impact to productivity.

### Routing Questions

- View all the books
  - GET /books

- View an individual book
  - GET /books/:id

- Create a new book
  - GET /books/new
  - POST /books/create

- Update a new book
  - PUT, PATCH /books/:id

- Delete a book
  - DELETE /books/:id

#### Setup Sinatra app with Directory Structure

Install: `gem install corneal`

Using `corneal`, it allows us to focus on the process of setting up the app. Using `shotgun` will let you escape restarting server on every change.
