const JobModel = require('../models/JobModel');
const { StatusCodes } = require('http-status-codes');
const { BadRequest, NotFoundError } = require('../errors')

const index = async (req, res) => {

    res.send('index')
}

const show = async (req, res) => {

    res.send('show')
}

const create = async (req, res) => {
    console.log(req.body)
    const { company, position } = req.body;
    const { createdBy } = req.user.userId
    const job = await JobModel.create(company, position, createdBy)
    res.status(StatusCodes.CREATED).json({job})
}

const update = async (req, res) => {

    res.send('update')
}

const destroy = async (req, res) => {

    res.send('destroy')
}



module.exports = {
    index,
    show,
    create,
    update,
    destroy
}