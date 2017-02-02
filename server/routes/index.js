const router = require('express').Router();

router.use('/code', require('./code'));
router.use('/users', require('./users'));
router.use('/questions', require('./questions'));
router.use('/fights', require('./fights'));
router.use('/join', require('./join'));
router.use('/clients', require('./clients'));

module.exports = router;
