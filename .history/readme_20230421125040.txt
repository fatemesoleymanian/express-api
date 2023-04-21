Setup
npm install && npm start


Database Connection
Import connect.js
Invoke in start()
Setup .env in the root
Add MONGO_URI with correct value


Routers
auth.js
jobs.js


User Model
Email Validation Regex

/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


Register User
Validate - name, email, password - with Mongoose
Hash Password (with bcryptjs)
Save User
Generate Token
Send Response with Token


Login User
Validate - email, password - in controller
If email or password is missing, throw BadRequestError
Find User
Compare Passwords
If no user or password does not match, throw UnauthenticatedError
If correct, generate Token
Send Response with Token


Mongoose Errors
Validation Errors
Duplicate (Email)
Cast Error


Security
helmet =>> Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
cors =>> CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
xss-clean =>> Node.js Connect middleware to sanitize user input coming from POST body, GET queries, and url params. Works with Express, Restify, or any other Connect app.
express-rate-limit =>> Basic rate-limiting middleware for Express. Use to limit repeated requests to public APIs and/or endpoints such as password reset. Plays nice with express-slow-down.


Swagger UI

/jobs/{id}:
  parameters:
    - in: path
      name: id
      schema:
        type: string
      required: true
      description: the job id


# you learn a good trick: u write test in login route in postman => u get token and put it in acccessToken variable which is global!  