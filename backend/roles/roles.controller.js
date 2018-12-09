const express = require('express');
const router = express.Router();
const roleService = require('./roles.service');

// routes
router.post('/create', create);
router.get('/', getAll);
router.get('/:id', getById);

module.exports = router;

function create(req, res, next) {
    roleService.create(req.body)
        .then(role => res.json(role))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    roleService.getAll()
        .then(roles => res.json(roles))
        .catch(err => next(err));
}

function getById(req, res, next) {
    roleService.getById(req.params.id)
        .then(roles => roles ? res.json(roles) : res.sendStatus(404))
        .catch(err => next(err));
}
