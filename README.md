# yugioh-card-tracker
A web-app to track yugioh cards and their collected status by various categories.

## Dependancies to run in development

- "async": "^3.2.3",
- "body-parser": "^1.19.1"
- "dotenv": "^12.0.3"
- "ejs": "^3.1.6"
- "express": "^4.17.2"
- "loading-cli": "^1.1.0"
- "mongodb": "^4.3.0"
- "mongoose": "^6.1.6"

# This web app uses MongoDB's Atlas cloud service, to run it in development you will need to make an account and create a database.

## Also required is a .env file containing the following

- BASE_URI=`http://localhost`
- DB_NAME=yugioh_cards
- PORT=80
- MONGODB_URI=mongodb+srv://\<USERNAME>:\<PASSWORD>@cluster0.uoqhi.mongodb.net/\<YOUR DATABASE NAME>?retryWrites=true&w=majority

## Running in development

To run the application, first run the seeder using `node seeder.js` to seed your database.

Next, run `node app.js` to initialise the web app.

Finally access the app by navigating to `http://localhost:80/cards`

## Running in production

To run the app in production, navigate to `https://dry-temple-31080.herokuapp.com/cards`
