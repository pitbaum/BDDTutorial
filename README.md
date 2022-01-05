# BDD tutorial

## Dashboard test implementation
If we look into the feature file for the dashboard authentication function, we can see that one of the Given statements of the two scenarios is that the user is logged in. This means that for this test to pass, the general concept of having a logged in state needs to already exist or be established.\
Since we already have created and let the tests for logging in pass, we can just reuse for this test the same testing script as we did for the log in function. And add to the login pages script, that the page routes after logging in to the dashboard page.\
After having logged in successfully, the dashboard should show some content and be able to check that the user is logged in. Thus, there must be some sort of communication between backend and frontend, with an authentication value being send for verification. This means that when we want to open the dashboard, the frontend should automatically on load of the route sent a http message to the backend with the token the user received after logging in.\
Since we do not actually need to look at what the backend would do with the token to verify the validation request from the frontend, we just directly sent out a valid response to the frontend with a welcome message, since in the feature file it mentions a welcome message to be visible on the dashboard.\
Now we just need to make sure that we are in the dashboard page and then that we can see the welcome message on that page as demanded and the first scenario is already done.\
The second scenario is basically the same, but this time instead of sending a response to the dashboard’s http request, we send a code that we have allocated in our frontend script to be used to reroute a not logged in user. Then we check if we got redirected to the correct page and are already finished with the implementation of the Cypress tests for the dashboard feature.

## The example code in reference
For the dashboard authentication tests to pass, we now need to create in the same directory as in the branch before a new file we will call Dashboard.vue and we need to add a dashboard route to our route file.\
Now we need to add in the Dashboard.vue file's html template a welcome message and in the script, we will create a http request to the backend, that will send our token to the backend when the page is loaded. If the response is positive, we will update our welcome message and if the response is negative, we will reroute the frontend to the login page.\
And that already concludes the implementation of an authentication function for our dashboard page.
