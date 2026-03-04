import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

// CORS policy
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.get('/data',(req,res)=>{
    res.json({message:'Bob is a good boy'});
});


app.listen(port,()=>{
    console.log('server is running');
});

