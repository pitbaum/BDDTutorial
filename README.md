# BDD tutorial

## Logout test implementation
Let's get to our last example, after having already created a login function and a dashboard page, we now want to create the E2E tests for the logout feature. If we look into our feature file for that, we can see that the feature has a background that we will have to let pass first. So, let's implement the tests for the background first.

The first statement is that the user should be logged in. For this we can like in the earlier example reuse the same test as we did in the log in feature implementation and carry on to the next statement.

This statement wants us to check that we are on the dashboard, for this we could simply check if the URL of the page contains the dashboard route. But if we would do that, we would not be able to see the logout button in the Then statement that comes after it, because the dashboard will need to first get a stubbed response from the backend that the token the route send was indeed valid. To do that we can just reuse the same Cypress test as in the dashboard feature tests.

But this might not have been so clearly visible at the beginning of the thought. Since we need to actively keep in mind how the logic of the earlier tests was passed. In order to ensure that such problems are not encountered during the writing of the tests, i would recommend to always reuse the same test structure for the given background features as in the original features they were designed in, or if possible, just import from the original test files, which makes the dependencies for the tests to run clearly visible.

For example, if we wouldn't have had a dashboard feature yet we couldn't be able to see a log out button and if we didn't have a login feature, we wouldn't be able to login to the dashboard. So, if we import the two tests from their respective test file and one of them doesn't pass, we can back trace the issue to the feature that is a prerequisite to this feature and first finish the necessary dependencies in the login and dashboard feature before carrying on.

If we now go to the next statement, we should be able to see a logout button, which is a simple visibility check.

After having finished the background, we can now go to the scenario of logging out, which consists of two statements, the first is the interaction with the button and the second is to verify if the consequences are as expected.

For the interaction with the button, we need to think of what is expected to happen if we are trying to log out and if it only involves the frontend or also the backend.

When the logout button is pressed, two things should be happening, first the frontend should delete its token of the user's session such that the user is logged out and secondly, the frontend should send a logout request to the backend, such that the backend knows to not accept the token of that session anymore from this user.

Thus, we need to also include a stubbed response to the function since the frontend will probably expect a reply from the backend if the logging out was successful or not.

For the last part, we now want the logged-out user to be send back to the login page which we can confirm by checking if the page contains the words Login like in the login feature.

## Getting the tests to pass
If we were to start the logout button's tests now just as far as the frontend features go, without any changes, we could already pass the tests for the logging in and being at the dashboard. The first test to fail would be to have the dashboard page contain a logout button, which we can pass by adding a button to the Dashboard.vue file.

Next, we would need to pass the test that executes the button’s function. As explained above, it is expected of the button to do two main things in this stage and that is to send a logout request with the token to the backend and to delete the token itself at the frontend. For this we create a http post request and add a line to delete the cookie containing the user token.

Now for the last test to pass we need the frontend to be rerouted to the login page as soon as we don't have a token anymore, we can do this directly by moving the current route of the frontend to the login page or by letting the dashboard page reload, which would also reroute the page to the login page since the user isn´t logged in anymore. Though the latter would need to have an additional response stubbed in the Cypress test implementation, since the this is how our dashboard authentication feature worked.
