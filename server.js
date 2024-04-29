const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/db');
const userRouter = require('./routes/userRouter');
const noteRouter = require('./routes/noteRouter');
require('dotenv').config();

const app = express();
app.use(cors());

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", " *");
    res.header(
        "Access-Control-Allow-Methods",
        "GET,HEAD,OPTIONS,POST,PUT,DELETE"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept,Authorization"
    );
    next();
});

app.use("/user", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
    res.status(200).send('welcome to home page');
});

app.listen(process.env.PORT, async () => {
    try {
        await dbConnect();
        console.log(`DB Connected Successfully`)
    } catch (error) {
        console.log(error);
    }
    console.log(`Server was running on port ${process.env.PORT}`)
});