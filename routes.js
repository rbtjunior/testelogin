const express = require('express');
const route = express.Router();

route.get('/',(req,res)=>{
    res.render('index');
});

route.post('/salvarLogin',(req,res)=>{
    let nome = req.body.nome
    console.log(nome)
    
});



route.get('/sucesso',(req,res)=>{
    res.send('aeeeeeeeeeeeeeeee')
});


module.exports = route;
