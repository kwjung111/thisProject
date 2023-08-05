const express = require('express')
const indexRouter = require('./routes/index')
const connector = require('./database/database')
const path = require("path");
const app = express();
const history = require('connect-history-api-fallback');    //history mode 사용
const port = process.env.PORT || 3000;


app.use(express.static('public'))
app.use(history())

const connection = connector.getConnection()
connector.queryPrint('SELECT * FROM test')


app.listen(port,() =>{
    console.log(`server is now running on ${port}`)
})