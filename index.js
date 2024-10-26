const Sequelize = require("sequelize");
const express = require("express");
const app = express(); 
const { create } = require("express-handlebars");

const conexaoBanco = new Sequelize("teste", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/teste", function (req, res) {
  res.send("Hello Teste");
});

app.get("/login/:email/:senha/:idade", function (req, res) {
    res.send(req.params);
});

app.get("/htmlteste", function (req, res) {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/cad", function (req, res) {

  res.render("form");
});

const abs = create({ defaultLayout: "main" }); //definindo layout padrão
app.engine("handlebars", abs.engine); //denfinindo o motor e o recheio 
app.set("view engine", "handlebars"); //definindo o tipo e o tipo 

//"LIGANDO O SERVIDOR"
//SEMPRE MANTENHA NO FINAL DO CÒDIGO 
app.listen(3032, function () {
  console.log("Server is running on port 3032");
});