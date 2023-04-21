const BadRequest = require('./bad-request')
const CustomAPIError = require('./custom-error')
const UnauthorizedError = require('./unauthorized')
const NotFoundError = require('./notFoundError')


module.exports = {
    BadRequest,
    CustomAPIError,
    UnauthorizedError,
    NotFoundError
}