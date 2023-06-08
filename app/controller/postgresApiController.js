const sequelize = require('../config/dbConnection/postgresConnection');
const { UserModel } = require('../model/DemoUserModel');


//get user api
module.exports.getuser = async (req, res) => {
    const result = await UserModel.findAll({});
    res.send(result);
}


//post user api
module.exports.postuser = async (req, res) => {
    const { firstName, lastName, email } = req.body;
    const result = await UserModel.create({
        firstName,
        lastName,
        email
    });
    res.send(result);
}


//update user api
module.exports.updateuser = async (req, res) => {
    const { firstName, lastName, email } = req.body;
    const result = await UserModel.update({
        firstName,
        lastName,
        email
    }, {
        where: {
            id: req.params.id
        }
    });
    res.send(result);
    console.log(result);
}

//delete user api
module.exports.deleteuser = async (req, res) => {
    const result = await UserModel.destroy({
        where: { id: req.params.id }
    });
    res.send('Deleted Successfully');
}

// truncate user table api
module.exports.truncateuser = async (req, res) => {
    const result = await UserModel.destroy({
        truncate: true
    })
    res.send('Truncated Successfully');
}


module.exports.orderuser = async (req, res) => {
    const result = await UserModel.findAll({
        order: [['id', 'DESC']]
    });
    res.send(result)

    const result1 = await UserModel.findAll({
        order:[
            [sequelize.fn('upper', sequelize.col('firstName'))]
        ]
    }) 
    console.log(result1)
}


