const express = require("express");
const app =express();
const database = require ("./database")
app.set("port",4000);
app.get("/actor", async(req, res)=>{
    const conection = await database.getConection()
    const resultado = await conection.query(" SELECT * from actor");
    res.json(resultado)
})
app.listen (app.get("port"));
console.log("escuchando comunicaciones al puerto" + app.get("port"))