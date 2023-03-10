const Sequelize = require('sequelize');
const connection = require('./database');

const Cadastro = connection.define('usuarios',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
Cadastro.sync({force: false}).then(()=>{});
module.exports = Cadastro;