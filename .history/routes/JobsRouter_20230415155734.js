const express = require('express');
const router = express.Router();

const { index, show,
    create,
    update,
    destroy } = require('../controller/JobsController');


router.get('/', index);
router.get('/:id', show);
router.post('/', create);
router.patch('/:id', update);
router.delete('/:id', destroy);

exports.module = router;