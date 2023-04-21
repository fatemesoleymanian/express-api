const { StatusCodes } = require('http-status-codes')

const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    // set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong , try again later!'
  }

  //handle validation error
  if(err.name === 'ValidationError'){
    customError.msg = Object.values(err.erros)
    customError.statusCode = 400 
  }

  //handle duplication error
  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose another value.`
    customError.statusCode = 400
  }

  return res.status(customError.statusCode).json({ msg: customError.msg })

}

module.exports = errorHandlerMiddleware
