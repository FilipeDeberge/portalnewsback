const express = require('express');
const router = express.Router();
const Noticias = require('./models/Noticias');


// Rota para listar todas as noticias
router.get('/', (req, res) => {
    Noticias.find({},null, {sort:{data_lancamento:-1}}, (docs, err) => {
        if(!err) {
            res.send(docs);
        }
            res.send(err);
    });
});

// Rota para cadastrar uma nova noticia
router.post('/cadNoticia', (req, res) => {
    const novaNoticia = new Noticias({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo,
        data_lancamento: req.body.data_lancamento
    });
    novaNoticia.save((err, noticia) => {
        if(!err) {
            res.json("Noticia cadastrada com sucesso!");
        } else {
            res.json(err);
        }
    });
});
// Rota para atualizar uma noticia
router.post('/edit', (req, res) => {
    Noticias.findById(req.body._id, (err, noticia) => {
        if(!noticia) {
            res.status(404).send("Noticia não encontrada!");
        } else {
            noticia.titulo = req.body.titulo;
            noticia.conteudo = req.body.conteudo;
            noticia.data_lancamento = req.body.data_lancamento;
            noticia.save().then(noticia => {
                res.json("Noticia atualizada com sucesso!");
            }).catch(err => {
                res.status(400).send("Erro ao atualizar noticia!");
            });
        }
    });
});

// Rota para deletar uma noticia
router.post('/deletar', (req, res) => {
    Noticias.findOneAndDelete({_id:req.body._id}, (err, noticia) => {
        if(!err) {
            res.json("Noticia deletada com sucesso!");
        } else {
            res.json(err);
        }
    });
});

// Rota para listar todas as noticias
router.post('/obternoticia', (req, res) => {
    Noticias.find({_id:req.body._id}, (docs, err) => {
        if(!err) {
            res.send(docs);
        }
            res.send(err);
    });
});
module.exports = router;
