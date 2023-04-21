require('dotenv').config()
require('express-async-errors')

const express = require('express');
const app = express();

const authRouter = require('./routes/AuthRouter')

const notFoundMiddleware = require('./middleware/NotFoundMiddleware')
const errorHandlerMiddleware = require('./middleware/ErrorHandlerMiddleware')


app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/auth',authRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;

const start = async ()=>{
    try {
        //db
        app.listen(port,console.log(`server is listening on port ${port}`))
    } catch (error) {
        console.log(error)   
    }
}
 
start()