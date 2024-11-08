import express from 'express';
import router from './routers/user.js';

const app  = express();

app.get('/', (req, res, next)=>{
    res.send('Hello World');
});

app.use('/user', router);

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});