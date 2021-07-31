const router = require('express').Router();
const noteRoutes = require('../apiRoutes/noteRoutes');

router.use('/api', noteRoutes);

module.exports = router;