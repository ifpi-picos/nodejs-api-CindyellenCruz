const mongoose = require('express');

function conectaMongoDB() {
    mongoose.connect(
        'mangadb://webuser:web12345@ds135128.mlab.com:35128/aula-web',
        {useUnifiedTopology: true, useNewUriParser: true}
    );
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));

    db.once('open', () => console.info('MongoDB conectado com sucesso!'));
}

module.exports = conectaMongoDB