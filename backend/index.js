import express from 'express';
import userRoutes from './routes/users';
import bodyParser from 'body-parser';
import db from './db/db'

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 80;
userRoutes(app);


app.listen(port, () =>
    console.log(`express is listening on port ${port}!`)
);