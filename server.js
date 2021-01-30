const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const videos = require("./data")

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express:server,
  autoescape: true,
})



server.get("/", function(req, res) {
  return res.render("about")
})

server.get("/portifolio", function(req, res) {
  return res.render("portifolio")
})

server.use(function(req, res) {
  res.status(404).render("not-found-");
})

server.listen(5000, function() {
  console.log("servidor pronto")
})