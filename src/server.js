const express = require('express');
const api = express();
api.get('/', (req, res)=>{return res.send('teste')})
api.listen(8080)