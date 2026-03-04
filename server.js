import express from 'express';

const app = express();
const port = 5000;

app.get('/logs',(req,res)=>{
    res.send('basic log page');
});

app.listen(port,()=>{
    console.log('server is running');
});

