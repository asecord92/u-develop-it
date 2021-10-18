const express = require('express');
const router = express.Router();

router.use(require('./candidateRoutes'));
router.use(require('./partyRoute.js'));
router.use(require('./voterRoutes'));

module.exports = router;