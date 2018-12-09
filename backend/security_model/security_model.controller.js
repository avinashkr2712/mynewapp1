const express = require('express');
const router = express.Router();
const SecurityModelService = require('./security_model.service');

// routes
router.post('/create', create);
router.get('/', getAll);
router.get('/:id', getById);

module.exports = router;

function create(req, res, next) {
    SecurityModelService.create(req.body)
        .then(securityModel => res.json(securityModel))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    SecurityModelService.getAll()
        .then(securityModels => res.json(securityModels))
        .catch(err => next(err));
}

function getById(req, res, next) {
    SecurityModelService.getById(req.params.id)
        .then(securityModel => securityModel ? res.json(securityModel) : res.sendStatus(404))
        .catch(err => next(err));
}
