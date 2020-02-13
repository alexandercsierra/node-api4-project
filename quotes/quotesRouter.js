const express = require('express');
const Quotes = require ('../data/quotes.js');
const router = express.Router();

router.get('/', (req, res)=>{
    res.status(200).json({Quotes});
})

router.get('/dorothy', (req, res)=>{
    let quotes = Quotes.dorothy;
    res.status(200).json({quotes});
})

router.get('/blanche', (req, res)=>{
    let quotes = Quotes.blanche;
    res.status(200).json({quotes});
})

router.get('/sophia', (req, res)=>{
    let quotes = Quotes.sophia;
    res.status(200).json({quotes});
})

router.get('/rose', (req, res)=>{
    let quotes = Quotes.rose;
    res.status(200).json({quotes});
})

module.exports = router;