const express = require('express');
const dbConnect = require('./config/db');
const userRouter = require('./routes/userRouter');
const noteRouter = require('./routes/noteRouter');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());
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