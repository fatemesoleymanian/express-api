require('dotenv').config();
require('express-async-errors');

//extra security packages
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

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
const AuthenticationMiddleware = require('./middleware/AuthenticationMiddleware')



app.use(rateLimiter({
    windowMs: 15 * 60 * 1000, //15 minutes
    max: 100, //limit each IP to 100 requests per windowMs
}))
app.use(express.json());
app.use(helmet())
app.use(cors())
app.use(xss())
// extra packages

app.get('/', (req, res) => {
    res.send('<h1>Jobs API</h1><a href="/api-docs">Documentation</a>');
});

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', AuthenticationMiddleware, jobsRouter)


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