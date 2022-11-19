const express = require('express');
const viewController = require('../controllers/viewController');

const router = express.Router();

// mount the routers
router.get('/', viewController.getOverview);
router.get('/tour/:slug', viewController.getTour);

module.exports = router;
