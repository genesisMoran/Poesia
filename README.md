# Poesía
**A place where users share their poetry, heart and letters.**

## Intro
Many say that poetry is dead, here's an app which aims to keep it alive - Poesía. It is a place for users to share their poetry (raps too!). A place where people can go for inspiration and to contribute to a growing community of writers.

## User Stories
- As a user I want to Read a list of poems
- As a user I want the ability to see who authored the poem
- As a user I want to be able to Create an entry 
- As a user I want to see my entry in the list of poems
- As a user I want the ability to Update an entry
- As a user I want the ability to Delete an entry

## ERD
![poesia-erd](https://user-images.githubusercontent.com/39888042/45449606-9a553500-b6a3-11e8-9649-aac5a50e1af5.png)

## Original Wireframe
![poesia-wireframe-1](https://user-images.githubusercontent.com/39888042/45041563-9fc4d680-b036-11e8-936e-a50266e22559.png)
![poesia-wireframe-2](https://user-images.githubusercontent.com/39888042/45042651-32ff0b80-b039-11e8-89d8-38e6dd849f5b.png)

## Screenshots
![1](https://user-images.githubusercontent.com/39888042/45548593-e8c51980-b7f2-11e8-85a5-5e5fac5ced3d.png)
![2](https://user-images.githubusercontent.com/39888042/45548682-36da1d00-b7f3-11e8-861c-fca567d8ab8f.png)
![3](https://user-images.githubusercontent.com/39888042/45548604-ef539100-b7f2-11e8-8c29-e284f83fa176.png)
![4](https://user-images.githubusercontent.com/39888042/45548609-f5497200-b7f2-11e8-9517-9a1037f9eaec.png)

## See App Here
http://polite-drain.surge.sh/
#### Note: 
- Click **Share Gems** to share your poetry.
- Click **Poesías** to see a list of poems; once there you will have the ability to edit or delete an entry.
- (Current issue: upon first entering the app and clicking **Poesías** the poems take a bit to load, do not fret they will show up and I'm working on it. Thanks.

## Technologies Used
The technologies used for this project include...
### A Postgresql database.
### Ruby on Rails in the back-end.
Gemfiles such as `gem 'rack-cors'` which handles Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible.
### React.js in the front-end.
*Dependencies:*
- "bulma": "^0.7.1"
- "eslint": "^5.5.0"
- "react": "^16.4.2"
- "react-dom": "^16.4.2"
- "react-scripts": "1.1.5"
    
## Code Snippet
**Back-end**, in my database seed file I have a `/` right before every new line of poetry which is handled in the **Front-end** via a `.split()` function which makes it possible for the poem content to be broken up into a new line where indicated by the `/`.

![seeds](https://user-images.githubusercontent.com/39888042/45551451-034fc080-b7fc-11e8-8312-781947c26f03.png)
![listpoems](https://user-images.githubusercontent.com/39888042/45551447-00ed6680-b7fc-11e8-9fd1-8b1078c8126a.png)

The code above also maps through the array of poems, displaying the `title` and `content`. It then maps through the array of users and matches the poetry entries with their correct **Author** with a simple `if` statement.

## Coming Soon!
#### Here is what's next for the Poesía app:
- NYC bookshop information available to the user:

![poesia-wireframe-3](https://user-images.githubusercontent.com/39888042/45043840-5081a480-b03c-11e8-8ffc-f2d7251127dc.png)

- User will be able to add audio bits of poetry
- "Poem of the month" section for inspiration
- User authentication for content safety

## References Include
#### Front-end guide
- https://bulma.io/documentation/
- https://git.generalassemb.ly/wdi-nyc-lambda/fullstack-crud
- https://git.generalassemb.ly/wdi-nyc-lambda/morning-exercise-guitar-app
#### Back-end guide
- https://git.generalassemb.ly/wdi-nyc-lambda/rails-landlord-api 

## Special Thanks
*For their troubleshooting help*
- Mimi Klein (WDI Lambda Project Squad Lead)
- Geoffrey Harnett (WDI Lambda Classmate)
- Ufuoma Gometi (WDI Grad)
