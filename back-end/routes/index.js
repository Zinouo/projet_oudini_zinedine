module.exports = app => {  
  require("./catalogue.routes")(app);
  require("./utilisateur.routes")(app);
  require('./commande.routes')(app);
}
