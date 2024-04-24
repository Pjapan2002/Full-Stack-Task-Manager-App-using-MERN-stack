import express from 'express';
import dbConnection from './db/dbConnection.js';
import bodyParser from 'body-parser';

// Database Connections
dbConnection("mongodb://localhost:27017")
.then(() => console.log("Database connection successfull!!!"))
.catch((error) => console.log("Database connection failed! ", error))

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


// Routes
import HomeRoute from './routes/home.route.js';
import userRoute from './routes/user.route.js';

app.use( '/api/v1', HomeRoute );
app.use( '/api/v1/user', userRoute );


app.listen(4000, () => {
  console.log(`Example app listening on port ${4000}`)
})

