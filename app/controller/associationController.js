const { UserModel } = require("../model/DemoUserModel");
const { OrderModel } = require("../model/OrderModel");
const { ProductModel } = require("../model/ProductModel");


//one to one relationship
module.exports.getProducts = async (req, res) => {
    //belongs to 
    const result = OrderModel.belongsTo(ProductModel, {
        foreignKey: 'productId'
    });
    const productDetails = await OrderModel.findAll({
        include: [result]
    });
    res.send(productDetails);
    // console.log(productDetails);

    //has one
    // const result = ProductModel.hasOne(OrderModel, {
    //     foreignKey: 'productId'
    // });
    // const productDetails = await ProductModel.findAll({
    //     include: [result]
    // });
    // res.send(productDetails);
    // console.log(productDetails);

    // const result = await OrderModel.findAll({
    //     // where: {userId: 7},
    //     include: [UserModel]
    // });
    // res.send(result);
    // console.log(result);
}

module.exports.getOrders = async (req, res) => {
    const result = OrderModel.belongsTo(UserModel, {
        foreignKey: 'userId'
    });
    const orders = await OrderModel.findAll({
        include: [result]
    });
    res.send(orders);
}

//one to many relationship
module.exports.getcustomerOrder = async (req, res) => {
    //has many 
    const result = UserModel.hasMany(OrderModel, {
        foreignKey: 'userId'
    });
    const orders = await UserModel.findAll({
        include: [result]
    });
    
    
    //belongs to 
    // const result = OrderModel.belongsTo(UserModel, {
    //     foreignKey: 'userId'
    // });
    // const orders = await OrderModel.findAll({
    //     include: [result]
    // });

    // console.log(orders)
    res.send(orders);
}


module.exports.getcustOrderandProduct = async (req, res) => {
    // const result = UserModel.belongsToMany(OrderModel, {
    //     foreignKey: 'userId',
    //     through:{
    //         model: ,
    //     }
    // });
    // const orders = await UserModel.findAll({
    //     include: [result]
    // });

    const result = await OrderModel.findAll({
        include: [ProductModel]
    })
    console.log(result)
}

