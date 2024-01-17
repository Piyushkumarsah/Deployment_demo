const express = require('express');
const app = express();

app.get('/',(req,resp)=>{
    resp.send("Hello world")
})

app.get('/product',(req,resp) =>{
    resp.send("Product Section");
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is started at port ${PORT}`)
})