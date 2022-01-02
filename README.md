# Introduction to BDD

## Repository context

This repositories was created in the context of creating a tutorial in Behaviour Driven Development (BDD). This also includes an installation guide, explaining the different configurations made, which can be found on the follwing page ->(INSERT LINK). This repository represents the practical example part of the tutorial and uses its branches to step by step add features and functionalities with explanation to the changes in contrast to the previous branches.

## What is BDD?
Behavior Driven Development (BDD) is an agile workprocess in software development, designed to strenghten the enhance the communication and teamwork between the qualitymanagement and business analysis parts within a software development project.
It emerged from the idea of Test Driven Development (TDD) and domain-driven design, to provide software developers and team managers, thus both technical and non-technical staff with the necessary tools and means of communicating with each other during their collaborative work in the field of software development.

During the BDD workflow in general, the tasks, goals and results of the Software are determined at the beginnning of the Specification analysis and summed up in a text form readable to non-technical staff, which all happens in a Domain Driven Design manner. Afterwards, those specifications of the to be developed software will be translated into automated tests, which is where the TDD approach comes into play. In the end the software developers will implement the features and functionalities of the software such that they pass all the predefined tests. This has as an advantage, that both the technical and non-technical people working on the project know at any point in time which features are inculded in the software so far and who expects what from whom. Furthermore, mostly relevant for the technical staff of the project, this approach to software development, means that the software that has to be developped is already split into smaller parts and thus easier to create, in a divide and conquer approach, which is commonly used in the IT sector, for any larger task.

## The contents of this branch
In the current branch of the project is a cleaned up version of a new Vue project with additional plugins for the use of BDD installed. To see a guide on how this was done step by step, please read through this article:

## The structure of the project folders
Starting from top to bottom. The Cypress folder includes the plugins and the support, which are both folders that are necessary for configuring the behavior of Cypress, which is used for the E2E testing. Into the Cypress folder, we will also need to create a new folder when talking about the creation of features, a folder called Integrations, in which we put our BDD test feature files.
The public folder contains the files that will be publicly visible to the visitor of the webpage later, standardly it consists of a logo and a html file.
the src folder contains the assets folder, a folder where you can save additional assets in that you want to load into the webpage, like images or graphs.
The router folder contains the index.js file, which is a file that contains all the necessary routes that the webpage can later point to and what the DOM needs to load when for those routes.
Not in a sub-folder, are the App.vue and the main.js file. The App.vue file is a file containing the most basic and first route that webpage will point to after having started it with the current configurations in the router and the main.js file, which loads them together and assembles the webpage after start of the server.
Additionally there can also be sub-folder called components be added, where additional component handeling tasks with their respective components be placed, but we are only going to look into simple .vue files in this tutorial without additional component handeling.
In summary, most of the work will be done in the src/ folder as for this is the place where we will put out actual implementation code for the webpage. (HTML, JS and CSS code)

## References and commands

