const express = require('express');
const router = express.Router();
const PostagensController = require('../controllers/postagens');
const PostagemModel = require('../models/postagem');

const postagensController = new PostagensController(PostagemModel);

router.get('/', async (req,res) => {
    // busca postagem no banco de dados
    const postagens = await postagensController.consultarTodas();
    res.send(postagens)
})

router.post('/', function(req, res){
    // salva postagens no banco de dados
    res.send('Postagem Salva!');
})


router.post('/', async(req,res) => {
    // salva postagem no banco de dados
    const novaPostagem = req.body;
    const retorno = await postagensController.adicionar(novaPostagem);
    res.send(retorno)
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const postagemDTO = req.body;
    await postagensController.alterarPorId(id, postagemDTO);
    res.send('Alterado com sucesso!');
});

module.exports = router;