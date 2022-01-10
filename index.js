const express = require('express');
const app = express();
const port = 3000
const mong = require('mongoose');

mong.connect('mongodb://127.0.0.1:27017')
.then(()=>console.log('db섹스')).catch((err)=>console.log(err));

app.get('/',(req,res)=>
{
    res.send('hello madafaka 섹스 머더퍼커');
})

app.listen(port,()=>console.log(`Example app listening on port ${port}`));

