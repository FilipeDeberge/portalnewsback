const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Noticias = new schema({
    titulo: {
        type: String,
        required: true
    },
    conteudo: {
        type: String,
        required: true
    },
    data_lancamento: {
        type: Date,
        required: true
    }
});

const modeloNoticia = mongoose.model('Noticias', Noticias);
module.exports = modeloNoticia;

