const express = require('express');
const config = require('./config/config');
const app = express();
require('dotenv').config();
const empRouter = express.Router();
const { createUser,GetUser,GetAllUser,UpdateUser,DeleteUser}= require('./controller/controller');
app.use(express.json());

const PORT = config.port;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

app.use('/api', empRouter);
empRouter.post('/createUser', createUser);
empRouter.get('/GetUser', GetUser);
empRouter.get('/GetAllUser', GetAllUser);
empRouter.put('/UpdateUser', UpdateUser);
empRouter.delete('/DeleteUser', DeleteUser);