const express = require('express');
const router = express.Router();
const quotesRouter = require('../quotes/quotesRouter')

router.use('/quotes', quotesRouter);

module.exports = router;