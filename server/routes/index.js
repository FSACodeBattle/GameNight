const router = require('express').Router();

router.use('/code', require('./code'));
router.use('/users', require('./users'));

module.exports = router;
