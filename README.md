# BDD tutorial
## Features and Testing with Cypress
In this branch we will start by creating some Cypress E2E testing features.

As previously discussed, those will be in the cypress/integration folder. In this branch you will be able to see that, now indeed there is a path cypress/integration/auth which contains 3 sub-folders and 3 feature files.

## Feature files
Feature files are with our configuration of Cypress, any file that ends in .feature/.features. They contain in plaintext the instructions of what a potential user of the webpage should be able to do see and receive, expressed as a feature of the program that is in development.

Since the files are in plain text and kept very vague, they are not enough for Cypress to fully build a E2E test out of it. But since we have installed the Cucumber-preprocessor plugin, Cypress will be able to read the features, which are stored human readable in the feature files with When, Then and Given statements. Those statements and their header will then make it possible for Cypress to link the feature files and the implementation files for the tests and make them run in the correct logical order.

To see more about how feature files are organized with this setup:  

We will go over three possible features that a webpage could need and discuss their feature files such as the cypress implementation of those files below.

## Implementation of tests running feature files
Within the cypress/integration/auth/ path, all the subfolders are named the same as their respective feature files. This is such that Cypress knows which feature belongs to which Cypress step implementation file.

The step implementation files are in those subfolders saved as .js files. They are written in the specific way for the Cypress testing tool and all the functions are named like in the implementation file referenced by it. (Since we are using the Cucumber-preprocessor, this means all the functions are either Given, When or Then statements.)

How to write a Cypress step implementation willl be discussed in the branches named after respective features.
## Login feature
Looking at the first steps for creating a login feature with a BDD process.

First during our BDD process, during a discussion the stakeholders which might potentially not have the necessary technical knowledge about how a webpage works, will express their wishes of a login feature with simple descriptive sentences, which will then be translated into Given, When and Then statements that can be processed by Cucumber.

Let's say we want to have a login page, on which we can enter some credentials as a user and if they are correct, then we see that we have logged in to the website and if we enter some wrong credentials, then we should see an error message.

Starting from this general wish, we will now create a feature file for Cypress. The finished version of the feature file can be looked at in the file cypress/integration/auth/login.feature.
If we look at the contents of the file, we can see that first we give the Feature a simple name of what it is about. Then we set a background, this is something that will be the state that the Cypress test runner will try to get in before starting the actual tests. In our case the background would be to verify that the testing tool is on the login page before trying to enter some credentials.

Next, we split our task into 2 scenarios. The first one is called "login with incorrect credential" and the second one is called "login with valid credential". Those are the different paths we want to ensure and test, when the user tries to login. Since the login process of entering credentials is always the same, both look very similar until the third statement in which it either expects and error message or a validation message.

In general, for the feature files, there are always many ways to organize them and how to split them up. Here we could have additionally made clear in the background, that we also require the existence of some place to enter credentials in the login page. Or what those credentials exist of. The more specific the features are, the better but the most relevant part is that it is clear for every one of the technical staff later what is expected of them, as long as that is the case, the feature file can be organized in any way possible.

## Dashboard feature
The main idea of this feature is that there should be a dashboard route, which redirects a user that is not logged in to the login page and if a user is logged in, it should show the contents of a dashboard page.

Since the feature is mostly about the authentication process of a logged in feature and not about the actual features of the dashboard page, we call it dashboardAuthen.feature. If we look in the corresponding file, we can see that again, we have two scenarios, which are to either be correctly logged in as a user or not.

The most interesting thing in this feature file is probably that it can be very ambiguous what the state of being logged in even means. This is a good thing in communication, since the designer of the feature file would not need to know the technical tools on how to authenticate or save states in a web program. So, the implementation choice and best practice can be defined by the programmer's doing the implementation steps later.

To quickly sum up the main steps of the file, in the first scenario we assume the user is not logged in. If the route to the dashboard page is entered, the user should be redirected to the login page. Which is so far so clear from the beginning idea of the feature.

For the second scenario we assume the user to be in a logged in state. If that user visits the dashboard route, they should be able to stay there and have access to its content.

## Logout feature
The idea of the logout feature will be to have the possibility for a user that is logged in to get back to the state of being logged out.

Since we need to assume that the user is first logged in before logging out, for this feature we will use a background again. The background will assume that the user is in a logged in state and additionally we will add to the feature that the user can log out by clicking a button that is situated on the dashboard page.

Since there is only one direction the test can go, there is only one scenario in this feature file namely being that the login button is clicked, and that the user will be logged out. Since the state of being logged out is again very ambiguous, we will assume that a logged in user sees a welcome page in the dashboard and if the user is in the dashboard and logged out, they can't see that welcome page anymore. (The later comes from the assumption that the dashboardAuthen feature already works, but if that feature isn't implemented before, we would have to make sure that we include in the logout implementation we include a test that fulfills this requirement nonetheless)

## References on how to write good feature files
https://github.com/kylecoberly/knowledge/wiki/Cypress-Cucumber
https://github.com/kylecoberly/knowledge/wiki/Gherkin
