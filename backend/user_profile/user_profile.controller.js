const express = require('express');
const router = express.Router();
const userProfileService = require('./user_profile.service');

// routes
router.post('/create', create);
router.get('/', getAll);
router.get('/:id', getById);

module.exports = router;

function create(req, res, next) {
    userProfileService.create(req.body)
        .then(userprofile => res.json(userprofile))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userProfileService.getAll()
        .then(userprofiles => res.json(userprofiles))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userProfileService.getById(req.params.id)
        .then(userprofile => userprofile ? res.json(userprofile) : res.sendStatus(404))
        .catch(err => next(err));
}
