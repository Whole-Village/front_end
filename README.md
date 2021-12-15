# Whole Village
### Turing Mod 4 Capstone Project–Front End

## Abstract

An application to help parents stay organized and connected to other parents on upcoming events associated with a particular child, because sometimes it's hard keeping up with all of the emails and group texts! This application was built in a team, which included Turing back-end students and front-end students. Through coordination with the back-end team, a graphQL server was developed specifically for this application. The front-end team built the application using Apollo Client, React, React Hooks, and React Router. Continuous integration was employed using CircleCI and E2E testing was developed using Cypress. 

Visit our <a href="https://whole-village.herokuapp.com/dashboard">deployed site</a>!

## Snapshot of Application

When a user visits the app, they will see a list of villages that they are a member of on their dashboard. The user can click one of their villages to be taken to that village's dashboard. On each village dashboard, the user will see a list of events that are upcoming in order from closest date to farthest date on the Village Events panel. A user can select the "Create Event" button to add an event and its respective details to the Village Events panel. On the village dashboard, all village members can be seen on the "Villager" panel and new members can be invited via the "Invite More Villagers" button below the Villages panel. A navigation bar is avaialable at the top of the application to get you back and forth between the users dashboard and individual village dashboards.

## Authors

- [Anna Johnson](https://www.github.com/annnuuuh)
- [Nadia Naji](https://github.com/najinl)
- [Phil Than](https://github.com/pthan1)


## Technologies Used
<img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/><img alt="ApolloClient" src="https://img.shields.io/badge/Apollo%20GraphQL-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=white"/><img alt="Figma" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" /> <img alt="Cypress" src="https://img.shields.io/badge/cypress%20-%23404d59.svg?&style=for-the-badge&logo=Cypress&logoColor=white"/><img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="Git" src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/> <img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://camo.githubusercontent.com/36531b3932aa2451c449c400d978b6f084eb41ad1e88666e2043fa1feacc5edf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f434952434c4543492d2532333136313631362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d636972636c656369266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/CIRCLECI-%23161616.svg?style=for-the-badge&amp;logo=circleci&amp;logoColor=white" style="max-width: 100%;">

<img src="https://camo.githubusercontent.com/36531b3932aa2451c449c400d978b6f084eb41ad1e88666e2043fa1feacc5edf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f434952434c4543492d2532333136313631362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d636972636c656369266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/CIRCLECI-%23161616.svg?style=for-the-badge&amp;logo=circleci&amp;logoColor=white" style="max-width: 100%;">

## Demo

<img src="https://media.giphy.com/media/WZ2Bhmj1n2p8bE65LO/giphy.gif" width="700" height="450" data-canonical-src="https://media.giphy.com/media/nh2H2pnONWGMVcf6Vd/giphy.gif" style="max-width: 100%;">
<img src="https://media.giphy.com/media/lGVcFcZhid8gsFIcJh/giphy.gif" width="700" height="450" data-canonical-src="https://media.giphy.com/media/nh2H2pnONWGMVcf6Vd/giphy.gif" style="max-width: 100%;">
<img src="https://media.giphy.com/media/gzl7DS8OMnlTRPsZjJ/giphy.gif" width="700" height="450" data-canonical-src="https://media.giphy.com/media/nh2H2pnONWGMVcf6Vd/giphy.gif" style="max-width: 100%;">
<img src="https://media.giphy.com/media/cpGXGusymfgsUG2XHU/giphy.gif" width="700" height="450" style="max-width: 100%;">

## Dev Installation

## Challenges

## Wins

- Learning and implementing Apollo Client in a short amount of time
- Defining the data needs and format for the front end through collaboration with the back end team
- Working asynchronously to tackle various parts of the project and resolving merge conflicts as they arose
- Utilizing resources such as web documents and mentors to expand knowledge base and maximize application performance
- Utilizing the Git Rebase utility to integrate changes from one branch onto another.

## Future Features

- As a user I will be able to "Manage my Account" (add multiple children to my account, modify my address, phone number, last name)
- Authentifcation for user to login
- An option for a user to create a "wishlist" for someone in their village to watch their kids during a specified time and the ability for someone to reply with  availability/volonteer
- A user will have a tally of "contribution hours" for volonteering/wathching children. There will be a minimum of required hours (annually?) each village member must volunteer to maintain a status as a villager in each village
- All villagers will be able to upload photos from group events to an event page
- A village chat/forum for each village

## Wireframes 

- Rought wireframes were developed by the team uisng Figma with the expectation that we would be working closely with a UI/UX designer: [Link to Figma Project](https://www.figma.com/file/5zU6rJnbbG7ZhLP5ocwQ6w/Whole-Village?node-id=0%3A1)

- Due to scheduling conflicts, the interaction with the UI/UX designer were cut short. Below are some comps the designer sent to the team:

Sign-in Page (Future Extension)
<img width="1038" alt="Screen Shot 2021-12-03 at 12 57 35 PM" src="https://user-images.githubusercontent.com/68795578/146281425-6196417c-5572-4a74-8876-1e04be286ea4.png">

New Event Form
![image](https://user-images.githubusercontent.com/68795578/146281457-d2e462fa-0838-4d54-8fbe-d5c8458a4e37.png)



