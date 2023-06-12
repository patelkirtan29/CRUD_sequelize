const sequelize = require('../config/dbConnection/postgresConnection');
const { UserModel } = require('../model/DemoUserModel');
const t = sequelize.transaction();


//get user api
module.exports.getuser = async (req, res) => {
    try {
        const user = await UserModel.findAll({
            skipLocked: true,
        });
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}


//post user api
module.exports.postuser = async (req, res) => {
    //unmanaged transactions
    try {
        const { firstName, lastName, email } = req.body;
        const resultuser = await UserModel.create({
            firstName,
            lastName,
            email
        }, { transaction: t });
        res.send(resultuser);
        (await t).commit()
        
    } catch (err) {
        (await t).rollback();
        console.log(err);
        res.status(500).send(err);
    }


    //managed transactions
    // try {
    //     const result = sequelize.transaction(async (t) => {
    //         const { firstName, lastName, email } = req.body;
    //         const resultuser = await UserModel.create({
    //             firstName,
    //             lastName,
    //             email
    //         }, { transaction: t });
    //         res.send(resultuser);
    //     });
    // }
    // catch (error) {
    //     console.log(error);
    //     res.status(500).send(error);
    // }

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
        order: [
            [sequelize.fn('upper', sequelize.col('firstName'))]
        ]
    })
    console.log(result1)
}


