var {Sequelize} = require("sequelize")

var sequelize = new Sequelize("gui", "root", "senha", {
    dialect: "mysql",
    host: "localhost"
})

try{
    sequelize.authenticate()
}catch(error){
    console.log("Erro ao conectar ao banco de dados")
}

module.exports = sequelize