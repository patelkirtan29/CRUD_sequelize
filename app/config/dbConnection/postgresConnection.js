const { Sequelize, DataType } = require('sequelize');

const sequelize = new Sequelize('Demo', 'postgres', 'kirtan',{
    host: 'localhost',
    dialect: 'postgres',
});

sequelize.authenticate()
   .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.log(err);
    });


// const user = async() => {
//     const [data, result] = await sequelize.query('SELECT * FROM "DemoUser"');
//     console.log(data);
// }
// user();
module.exports = sequelize