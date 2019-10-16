const express = require('express');
const postagemRoutes = require('./postagem-routes');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('Oline')
});

router.use('/postagem',postagemRoutes);
//router.use('/users')

module.exports = router;