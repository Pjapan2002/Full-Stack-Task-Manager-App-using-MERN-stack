
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
import LoginRoute from './routes/login.route.js';
import SingupRoute from './routes/signup.route.js';
import LogoutRoute from './routes/logout.route.js';

app.use('/',HomeRoute);
app.use('/signup',SingupRoute);
app.use('/login',LoginRoute);
app.use('/logout',LogoutRoute);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(4000, () => {
  console.log(`Example app listening on port ${4000}`)
})

