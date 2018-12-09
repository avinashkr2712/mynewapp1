const express = require('express');
const router = express.Router();
const permissionService = require('./permission.service');

// routes
router.post('/create', create);
router.get('/', getAll);
router.get('/:id', getById);

module.exports = router;

function create(req, res, next) {
    permissionService.create(req.body)
        .then(permissions => res.json(permissions))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    permissionService.getAll()
        .then(permissions => res.json(permissions))
        .catch(err => next(err));
}

function getById(req, res, next) {
    permissionService.getById(req.params.id)
        .then(permissions => permissions ? res.json(permissions) : res.sendStatus(404))
        .catch(err => next(err));
}
