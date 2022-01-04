# BDD tutorial

## Cypress step implementation
After having looked in the previous branch in the feature files, we will know make those feature files into actual Cypress E2E tests.\
We will now look into the contents of the integration/auth/login/login.js file, which contains the step definitions for the Cypress tests that were defined in the login.feature file.\
Starting from the top, we will import the Cypress-preprocessor constants we used in the feature file definition, such that Cypress can read the feature files order.\
Besides this and line 2, the whole file consists of different function definitions and their body. All the functions are of one of the three imported Cucumber types and their first argument is the name of the feature they reference to in the feature file. Like this Cypress will know which function to call at which time, since it will follow the order of the feature file.\
Inside the functions body, we will include what the Cypress testing tool should actually try to do and check if all conditions we want the tests to include are met. If a function can fully be executed by Cypress, then the test is said to have passed.\

## The example code in reference
If we look at the structure of our first test from the feature file, we can see that the first test that will be executed at the start of the test is the background. Namely the given statement that "I am in the login page".\
This statement should simply check if we are currently in the login page. There are many ways how to check this with Cypress, so we will have to choose a way to confirm that this statement is true. In this case we have included in the function body the line 4, which lets Cypress visit the passed URL and then have made sure with the line 5, that the webpage the user currently sees contains the words "Login" somewhere.\
Thus we will from now on have the restriction given for letting the test pass, that the login page of the application has a the route as in the URL we have given Cypress in the 4th line and we will need to make sure that the login page includes the word "Login" somewhere.\
Next up would be the given statement about entering correct credentials. Eventough in our feature file the incorrect credential scenario was put first and will be run first, the order doesn't matter in the Cypress function definitions.\
So for the valid credentials, we already assume that the background was true and we are inside the login page. Now we tell our testing tool to find something in the html body that has the testid "email" and something that has the testid "password". It is not defined, what kind of HTML attribute they are, but we know that the testing tool will try to type a string of characters in both of them, namely the "good@email.com" and the "goodpassword".\
If the testing tool can do those steps, it will set the variable named valid which was globally defined in the line 2 of the code to true.\
Now what is happening here is that if you look at the code for the invalid credentials scenario function, you will see that it is pretty similar besides the names of what we put into the email and password fields and that we set the valid function to false.\
But after this, the code will actually never check for what we put into the email or password fields.\
Shouldn't we need to actually test the contents of the input forms and then check them against an already existing list of registered users and create a response to the server request depending on a match of the credentials?\
The anwser is that this is how you would make a real backend function, but with Cypress we only try to test the frontend without a backend, so while we could indeed try to program our Cypress tests as close to the actual backend code, we could also make it simpler and easier by simplifying it.\
Since we already know that our Cypress scenario contains two possible options and when which response will be given from the backend, we can directly let Cypress stub a response from the backend as true or false to the correct scenario without actually having to check on them.\
In the end the goal of our Cypress test is to see how the frontend behaves to the different kinds of user inputs and backend data. So the logic behind how the backend would process such a query doesn't matter and we can skip the whole backend process by making an assumption on how the backend is expected to respond in the different scenarios.\
Continuing with the next function, we will see how we can use the different states the scenarios create to simplify a backend response and stub it.\
The when function named "I click on login button" will have to deal with the actual handeling of the HTTP post request from the frontend to the backend and stub it to send the correct response to the frontend depending on which scenario we are currently in.\
To check if we are currently in the scenario that should accept the credentials passed or not we can make a simple if statement checking if the valid variable is true or false. And then intercept the post request from the frontend and anwser in the name of the backend to it with a valid status code and a token for the logged in user or send a error status code.\
Lastly we have two then functions, one checking if we indeed see a success message on the webpage and a function to check if we have an error message on the webpage.

## Getting the first tests to pass
After we have set up all our features and test implementations for the login feature, we now can come to the last step of the BDD process and that is to get the tests to pass by implementing the functionalities and features previously defined in a webapplication with the Vue DOM.\
So let's try to walk ourselves through the process of getting the tests pass one after the other and set up a simple Vue webpage.\
We start but trying to get the background started. If you are unsure what test you should try to get to pass next, you can always just open up Cypress and let the feature file run and see how far the tests pass and start trying to implement the next step that fails until all the tests of a feature have passed.\
For the Background we need to make sure that there is a login route that leads us to a page that contains the words "Login".\
Since we are now creating the acutal Vue webapplication, we will be doing all our coding now in the src/ directory, in which for setting the routes we have to edit the router/index.js and add to it a new path that loads a component.\
For that to work we will also now create in the views/ directory a file called Login.vue which will represent our login page components code. Into this file we can write all of our HTML, JavaScript and CSS code to design create a webpage.\
To pass the backgorund, since we already created a route linking to the component, we only need to include an HTML paragraph containing the word Login and we will have passed the first test.\
Now for the other tests, we would need to also add to the page two input forms and a login button, which need the correct data test ID linked to them. We need some Vue script to send out a HTTP post request when the login button is pressed and we need to be able to handle the backends response by either showing an error message or showing a success message.\
An example of how such features could be implemented is given in this branch of the repository.\
For later use we are using the additional libraries axios and VueCookies for HTTP post requests and Cookie handeling. if you want to run the code from this repository, please install them into your repository by running the commands:
```
npm install axios 
```
And/Or respectively
```
npm install -save vue-cookies .
```
## Adding unit tests
While we have now seen how to integrate our E2E testing with a BDD workflow into our software development, we can additionally add unit testing into our workflow by using Jest.\
For this we have created the folder tests/unit in which you can find an example unit test for the login function example.\
To explain the unit test in context of the example login function script, the login page will have to check before showing the success message or the error message after the response was received from the backend, if there was already a response received and if the response was successfully what was expected.\
The logic is that if there was no response yet, then the webpage should not show anything and if there was a successfull response, then it should check if it was an error or a success.\
For this we have two variables stored in our Vuescript which are there to store the boolean state of already having sent a response or not and the state if the response was successfull or not. Now to test our script to see if it behaves correctly for both variables being true, the example unit test was created.\
Within the test we can directly mount the necessary values into the DOM and check the end contents of the webpages HTML states.\
