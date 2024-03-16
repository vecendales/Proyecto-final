const mysql= require("promise-mysql");



const conection = mysql.createConnection({
    host: "localhost",  //use localhost if you are running
    database: "sakila",
    user: "root",
    password: "root12345",
})
const getConection =async()=> await conection;
module.exports={
    getConection
}