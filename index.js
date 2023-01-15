const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./src/database/database');
const Cadastro = require('./src/database/Cadastro')
const routes = require('./routes')



app.use(routes)
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));




connection.authenticate().then(()=>{
    console.log('conexao com DB');
}).catch((erro)=>{
    console.log(erro);
});







app.listen(8000,()=>{
    console.log('app rodando');
});
