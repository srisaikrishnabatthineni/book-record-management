const express=require('express');
const app=express();
const port=8000;

app.use(express.json());

app.get('/',(req,res)=>[
    res.status(200).json({
        message:"server is running"
    })
]);

app.use('*',(req,res)=>{
    res.status(404).json({
        message:"Page does not exist"
    })
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})