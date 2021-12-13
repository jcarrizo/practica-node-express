const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
require('dotenv').config()
const port = process.env.PORT;

app.use(express.json())

app.get('/users', (req,res)=>{
res.send("Pegaste bien man")
});

app.post('/new-user', (req,res)=>{
console.log(req.body)
res.send('Recibimos el mensaje')
})

app.listen(port,()=>{
    console.log(`Escuchamos al ${port}`)
})