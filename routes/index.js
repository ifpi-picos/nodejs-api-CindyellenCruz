const express = require('express');
const postagemRoutes = require('./postagem-routes');
const router = express.Router();

router.use('/', function(req, res, next){
    console.log('Time: ', Date.now());
    next();
});

router.get('/', (req,res) => {
    res.send('Online')
});

router.use('/postagens',postagemRoutes);
//router.use('/users')

module.exports = router;