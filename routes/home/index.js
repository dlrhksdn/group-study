"use strict"

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get('/', ctrl.home);

router.get('/login', ctrl.login);

router.get('/join', ctrl.join);

module.exports = router;