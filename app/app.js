const express  = require('express');
const bodyParser = require('body-parser');
const routes = require('./route/route');


const app = express();
const port = 3003;
const localhost = '127.0.0.1';

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use(routes);

app.listen(port,localhost, () => {
    console.log(`Server running on http://${localhost}:${port}`);
});


