

const index = async (req, res) => {

    res.send('index')
}

const show = async (req, res) => {

    res.send('show')
}

const create = async (req, res) => {

    res.json(req.user)
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