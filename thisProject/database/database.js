const mysql = require('mysql')

const dbTest = {
    host : "43.201.232.98",
    user : 'kwjung',
    password : '1234',
    database : 'db_dev', 
}
//DB 테스트 서버

const connection = mysql.createConnection(dbTest)

const connectionFunc = (error,results,fields) => {
    if(error){
        console.log('error occured')
    }
    else{
        console.log(results);
    }
}

module.exports.getConnection = () =>{
    return connection
}

module.exports.endConnect = () => {
    connection.end()
}

module.exports.queryPrint = (queryString) => {
    return connection.query(queryString,connectionFunc)
}