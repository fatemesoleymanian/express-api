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
    const { user: { userId }, params: { id: jobId } } = req
    const job = await JobModel.findOne({
        _id: jobId,
        createdBy: userId
    })

    if (!job) {
        throw new NotFoundError('Job not found!')
    }

    res.status(StatusCodes.OK).json({ job })
}

const create = async (req, res) => {

    const { company, position } = req.body;
    const createdBy = req.user.userId
    const job = await JobModel.create({ company, position, createdBy })
    res.status(StatusCodes.CREATED).json({ job })
}

const update = async (req, res) => {

    const {
        body: { company, position },
        user: { userId },
        params: { id: jobId },
      } = req
    
      if (company === '' || position === '') {
        throw new BadRequestError('Company or Position fields cannot be empty')
      }
      const job = await Job.findByIdAndUpdate(
        { _id: jobId, createdBy: userId },
        req.body,
        { new: true, runValidators: true }
      )
      if (!job) {
        throw new NotFoundError(`No job with id ${jobId}`)
      }
      res.status(StatusCodes.OK).json({ job })
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