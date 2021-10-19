const express = require('express');
const express =require('./routes');


const app = express();

app.use(express.json());
app.use(routes);

app.listen(3334);
