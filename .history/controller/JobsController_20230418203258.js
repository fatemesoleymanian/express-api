const JobModel = require('../models/JobModel');
const { StatusCodes } = require('http-status-codes');
const { BadRequest, NotFoundError } = require('../errors')

const index = async (req, res) => {

    const jobs = await JobModel
        .find({ createdBy: req.user.userId })
        .sort('createdAt');
    res.status(StatusCodes.OK).json({ jobs })
}

const show = async (req, res) => {
    const { user: { userId }, id } = req.params
    const job = await JobModel.findById(id)

    const { createdBy } = job
    if (createdBy !== userId) throw new NotFoundError('Job not found!');

    res.status(StatusCodes.OK).json({ job })
}

const create = async (req, res) => {

    const { company, position } = req.body;
    const createdBy = req.user.userId
    const job = await JobModel.create({ company, position, createdBy })
    res.status(StatusCodes.CREATED).json({ job })
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