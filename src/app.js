const express = require('express');
const config = require('./config/config');
const app = express();
require('dotenv').config();
const empRouter = express.Router();
const { createUser,}= require('./controller/controller');
app.use(express.json());

const PORT = config.port;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

app.use('/api', empRouter);
  empRouter.post('/createUser',  async (req, res, next)=>{
     try{
         const name = req.body.name;
         const email = req.body.email;
         const bio = req.body.bio;
         const age = req.body.age;
               if (!name || !email) {
                 return res.sendStatus(400);
              }
         const Newuser =  await createUser(name,email,bio,age).then(() => res.json({ message: 'User created.' }));
 
     } catch(e){
         console.log(e);
         res.sendStatus(400);
     }
  });
