require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

//connect to db
const connectDB = require('./db/connect');
//routers
const authRouter = require('./routes/AuthRouter');
const jobsRouter = require('./routes/JobsRouter');
// error handler
const notFoundMiddleware = require('./middleware/NotFoundMiddleware');
const errorHandlerMiddleware = require('./middleware/ErrorHandlerMiddleware');



app.use(express.json());
// extra packages

app.get('/', (req, res) => {
    res.send('<h1>Jobs API</h1><a href="/api-docs">Documentation</a>');
  });

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);



const port = process.env.PORT || 3000;


const start = async () => {

    try {

        await connectDB(process.env.MONGO_URI)
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error)
    }
}


start();