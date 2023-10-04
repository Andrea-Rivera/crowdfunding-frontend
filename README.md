
# LaunchMyBusiness by Andrea Rivera
[My crowdfunding App]( https://frontend-crowdfunding.netlify.app)
* She Codes crowdfunding project - DRF Backend and React Frontend.

## About
LaunchMyBusiness is created for Small businesses that need presence online and do not have time to create a static website that displays their web pages. 
Developers can help to adjust the existing templates according to their needs. In exchange, an amount 
of money can be donated to reach our goal as an incentive to keep enhancing our skills as developers at the same time that  small businesses grow.


## Features

* [x] A user can login and see the template projects
* [x] The user can create, edit and delete a project
* [x] The supporter can pledge to a project or delete the pledge.
* [x] Users can contribute with an amount of money to the goal of each project
* [x] Each project will have a description with the template that each user will need to set up their own website for their business 
* [x] Each project will have the images provided by the user that will be adapted to the template.


## Colour Scheme
* Colors: #264653, #2a9d8f,#e9c46a,#f4a261,#e76f51 
* Link: (https://coolors.co/palettes/trending)

![Colour Scheme](crowdfounding/crowdfounding/static/images/colour_scheme.png)

## Fonts
* Header Fonts: font-family: 'Tektur', cursive;
* Body Fonts: font-family: 'Roboto', sans-serif;


## Submission Documentation
Deployed Front-end Project: [Deployed website](https://frontend-crowdfunding.netlify.app)
Deployed Back-end Project: [Deployed website](https://launchmybusiness.fly.dev)



<!-- ### Screenshots -->
<!-- [x] A link to the deployed project.
[My crowdfunding App]( https://launchmybusiness.fly.dev)

[x] A screenshot of Insomnia, demonstrating a successful GET method for any endpoint.
![get request](crowdfounding/crowdfounding/static/images/get_all_projects.png)

[x] A screenshot of Insomnia, demonstrating a successful POST method for anyendpoint.
![post request](crowdfounding/crowdfounding/static/images/create_projects.png)

[x] A screenshot of Insomnia, demonstrating a token being returned.
![token](crowdfounding/crowdfounding/static/images/token.png)

[x] Step by step instructions for how to register a new user and create a newproject (i.e. endpoints and body data). -->



[x] Your refined API specification and Database Schema.
## API Specification

| HTTP Method | Url | Purpose | Request Body | Successful Response Code | Authentication|Authorization
<br /> 
| GET | projects/ | Return all projects | N/A | 200 | N/A |
<br /> 
| POST | projects/ | Create a new project | project object | 201 | User must be logged in or have the token. |
<br /> 
| GET | projects/project_ID | Returns the project with project_ID | project object | 201 |  N/A  |
<br /> 
| PUT | projects/project_ID | Updates the project with project_ID | project object | 201 |  User must be logged in or have the token AND must be the project owner |
<br /> 
| DELETE | projects/project_ID | Deletes specific project with project_ID | project object | 201 |  User must be logged in or have the token AND must be the project owner |
<br /> 
| GET | pledges/ | Return all pledges | N/A | 200 | N/A |
<br /> 
| POST | pledges/ | Create a new pledge | pledge object | 201 | User must be logged in or have the token. |
<br /> 
| POST | users/ | Create a new user | user object | 201 | User must be logged in or have the token. |
<br /> 

