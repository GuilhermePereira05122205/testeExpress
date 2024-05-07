const { DataTypes } = require("sequelize")
var sequelize = require("../conexao/conexao")

var teste = sequelize.define("teste", {
    nome: {
        type: DataTypes.STRING
    },
    quantidade: {
        type: DataTypes.INTEGER
    },
    descricao: {
        type: DataTypes.STRING
    }
    
})

//sequelize.sync({alter: true})

module.exports = teste