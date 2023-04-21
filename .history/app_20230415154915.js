require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

//connect to db

//routers
const jobsRouter = require('./routes/JobsRouter');
const authRouter = require('./routes/AuthRouter');




// error handler
const notFoundMiddleware = require('./middleware/NotFoundMiddleware');
const errorHandlerMiddleware = require('./middleware/ErrorHandlerMiddleware');



app.use(express.json());
// extra packages

app.use('/domain/api/v1/auth',authRouter);
app.use(jobsRouter);

// routes
app.get('/', (req, res) => {
    res.send('jobs api');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);



const port = process.env.PORT || 3000;


const start = async () => {

    try {
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
}


start();