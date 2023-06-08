const { Sequelize, DataType } = require('sequelize');

const sequelizedb = new Sequelize('kirtan_375', 'sa', 'Sit@321#', {
    dialect: 'mssql',
    host: '192.168.1.88',
    dialectOptions: {
        encrypt: true,
        trustServerCertificate: true,
    }
},{
    freezeTableName: true,
});

sequelizedb.authenticate()
    .then(() => {
        console.log('Connected to Sequelize');
    })
    .catch(err => {
        console.log(err);
    });


module.exports = sequelizedb;
