const { Router } = require('express');
const mssqlapiController = require('../controller/mssqlapiController');
const postgresapiController = require('../controller/postgresApiController');
const associationsController = require('../controller/associationController');

const routes = Router();

// routes.get('/products', apiController.getProducts);

routes.get('/user', postgresapiController.getuser);
routes.post('/user', postgresapiController.postuser);
routes.put('/user/:id', postgresapiController.updateuser);
routes.delete('/user/:id', postgresapiController.deleteuser);
routes.delete('/user', postgresapiController.truncateuser);

routes.get('/orderuser', postgresapiController.orderuser);

//associations
routes.get('/products', associationsController.getProducts);
routes.get('/orders', associationsController.getOrders);
routes.get('/custorders', associationsController.getcustomerOrder);
routes.get('/custordersprods', associationsController.getcustOrderandProduct);


module.exports = routes;