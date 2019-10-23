class Postagens {
    constructor(postagemModel) {
        this.Postagem = postagemModel;
    }

    async adicionar (postagemDTO) {
        const postagem = new this.Postagem(postagemDTO);
        await postagem.save();
        return 'Adicionado com sucesso!';
    }

    async consultarTodas () {
        const postagens = await this.Postagem.find({});
        return postagens;
    }

    async alterarPorId () {
        await this.Postagem.updateOne({_id: id}, postagemDTO);
    
    }
}

module.exports = Postagens;