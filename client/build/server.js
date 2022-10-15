const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
app.use('',express.static('./'));
app.get(/.*/,(req,res)=>{
    res.sendFile((path.join(__dirname,'/index.html')));
})

app.listen(PORT, ()=>console.log('Serving on port ',PORT,'...'));