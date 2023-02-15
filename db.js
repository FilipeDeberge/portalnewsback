const mongoose = require('mongoose');
mongoose.set("strictQuery", false)
mongoose.connect('mongodb://127.0.0.1:27017/portalnews');
const db = mongoose.connection;
db.on('conectado', () => {
    console.log('Conectado ao banco de dados');
});
db.on('error', async () => {
   console.log('Erro ao conectar ao banco de dados');
});
module.exports = db;