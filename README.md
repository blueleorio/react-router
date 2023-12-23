# React Router

## The Job Routing App

We are going to build a small app that practices the react-router library. React router dom is a super powerful library that helps routing around the application. One of the core things here is authentication. So how does website authentication works in the front end?

“Single Page Apps (SPAs) are often tied to APIs, and these APIs, in the form of endpoints, help provide data that can be manipulated in the logic of these apps. Some of these data the APIs provide are sensitive, so before they can be accessed some form of authentication needs to be in place.”

For example, when you get to a website, you need to log in first to see the private information that only users can see but guess such as user's information, the salary of the job recruitment news, etc.

Also, you'll have a chance to practice useContext, the Material UI and React Hook Form that we learn from the previous lesson. Awesome! Let's get started!

## User story

1. Users can see the navigation bar that shows user status
1. If the user hasn't signed in, see the sign-in button on the right side
1. If users have signed in, see the username and a sign out button instead
1. Users can see the list of jobs on the main page
1. Users can click on a single job card to pop up a detailed job modal
1. If the user haven't signed in, pop up a sign in modal
1. Users can sign in with a fixed username and password (don't have to sign up) and sign out. Then the application will navigate the user to the expected page.
1. 🚀 The demo is missing a search function? Can you implement it?
1. 🚀 The login modal matchs the url /login. See more
