const express = require('express');
const app = express();
const cors = require('cors');
const dbConnect = require('./config/db');
const userRouter = require('./routes/userRouter');
const noteRouter = require('./routes/noteRouter');

app.use(cors());

app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send('welcome to home page');
});

app.use("/user", userRouter);
app.use("/note", noteRouter);


app.listen(8080, async () => {
    try {
        await dbConnect();
        console.log(`DB Connected Successfully`)
    } catch (error) {
        console.log(error);
    }
    console.log(`Server was running on port 8080`)
});