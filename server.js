const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const videos = require("./data")

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express:server,
  autoescape: false,
  noCache: true
})

server.get("/video", function(req, res) {
  const id = req.query.id;

  const video = videos.find(function(video){
     
      return video.id == id 
  
  })
  if (!video){
    return res.send("video not faund")
  }
  return res.render("video", { item: video })
  
})



server.get("/", function(req, res) {

  const about = {
    avatar_url: "https://avatars2.githubusercontent.com/u/52587920?s=460&u=194ef191f052c8efd7af4c63f68aab7b0af03805&v=4",
    name: "Sandro Vingla",
    role: "instrutor de piano",
    description: 'Músico, pianista, apaixonado por música, focado em ensinar alunos iniciantes a aprender piano clássico <a href="https://souzalima.com.br/" target="_blank">Souza Lima',
    links: [
      { name: "Github", url: "https://github.com/SandroVingla/"},
      { name: "Twiter", url: "https://twitter.com/sandro20146505/"},
      { name: "linkedin", url: "https://www.linkedin.com/in/alexsandro-vingla-465063147/"},
    ]
  }

  return res.render("about", {about})
})

server.get("/portifolio", function(req, res) {
  return res.render("portifolio", {items: videos})
})

//server.use(function(req, res) {
 // res.status(404).render("not-found-");
//})

server.listen(5000, function() {
  console.log("servidor pronto")
})