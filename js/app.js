
//carrito
/*function updateCartCount(newCount) {
    const cartCountElement = document.getElementById("cart-count");
    cartCountElement.textContent = newCount;
  }
  
  function addItemToCart() {
    // Actualizar el recuento de artículos en el carrito
    const currentCount = parseInt(document.getElementById("cart-count").textContent);
    updateCartCount(currentCount + 1);
  }
  
  const cartImage = document.querySelector(".cart img");
  cartImage.addEventListener("click", addItemToCart);*/


//bases de datos
const express = require("express");
const mysql = require("mysql");
const app = express();

// Crea conexion a MySQL 
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root12345",
  database: "sakila",
});

// Conectar a MySQL
connection.connect((err) => {
  if (err) throw err;
  console.log("Conectado a MySQL!");
});

// definr rutas 

app.get("/category", (req, res) => {
  const query = "SELECT * FROM category";
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get("/actor", (req, res) => {
    const query = "SELECT * FROM actor";
    connection.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  app.get("/film", (req, res) => {
    const query = "SELECT * FROM film";
    connection.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  app.get("/language", (req, res) => {
    const query = "SELECT * FROM language";
    connection.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });

// Iniciar el servidor
app.listen(3000, () => {
  console.log("Servidor escuchando el el puerto 3000");
});