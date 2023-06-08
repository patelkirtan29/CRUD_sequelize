const { Router } = require('express');
const mssqlapiController = require('../controller/mssqlapiController');
const postgresapiController = require('../controller/postgresApiController');

const routes = Router();

// routes.get('/products', apiController.getProducts);

routes.get('/user', postgresapiController.getuser);
routes.post('/user', postgresapiController.postuser);
routes.put('/user/:id', postgresapiController.updateuser);
routes.delete('/user/:id', postgresapiController.deleteuser);
routes.delete('/user', postgresapiController.truncateuser);

routes.get('/orderuser', postgresapiController.orderuser);


module.exports = routes;