const express = require('express')
const indexRouter = require('./routes/index')
const path = require("path");
const app = express();
const history = require('connect-history-api-fallback');    //history mode 사용
const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.use(history())
app.use('/',indexRouter);

/*
app.get('/test',(req,res) => {
    res.sendFile(path.join(__dirname,"./index.html"))
})
*/


app.listen(port,() =>{
    console.log(`server is now running on ${port}`)
})