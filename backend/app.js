const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const PORT = 3000;
const url = "mongodb://mongo:27017/";
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

MongoClient.connect(url, function (err, db) {
    if (err)
        console.error(err);
    else {
        const dbo = db.db("users");
        dbo.collection("users", function (err, collection) {
            collection.find().toArray(function (err, items) {
                if (err)
                    throw err;
                console.log(items);
            });
        });
        dbo.collection("information", function (err, collection) {
            collection.find().toArray(function (err, items) {
                if (err)
                    throw err;
                console.log(items);
            });
        });
        app.post('/inscription', function (req, res) {
            var login = req.body.login;
            var password = req.body.password;
            var user = {
                login: login,
                password: password
            };
            dbo.collection("users").findOne({ 'login': login }, function (err, rsp) {
                if (err)
                    throw err;
                if (rsp) {
                    res.status(400).json({ 'Inscription': 'Nom d\'utilisateur déjà pris' });
                } else {
                    dbo.collection("users").insertOne(user, function (err, rsp) {
                        if (err)
                            throw err;
                        res.status(200).json({ 'Inscription': 'Utilisateur ajouté' });
                        console.log("Extraterrestre ajouté");
                    });
                }
            });
        });
        app.post('/connexion', function (req, res) {
            var login = req.body.login;
            var password = req.body.password;
            var user = {
                login: login,
                password: password
            };
            dbo.collection("users").findOne(user, function (err, rsp) {
                if (err)
                    throw err;
                if (rsp) {
                    res.status(200).json({ 'Connexion': 'Utilisateur connecté' });
                    console.log("Utilisateur trouvé");
                } else {
                    res.status(400).json({ 'Connexion': 'Utilisateur non inscrit' });
                    console.log("Utilisateur non trouvé")
                }
            });
        });
        app.get('/deconnexion', function (req, res) {
            dbo.collection("contact").remove({}, function (err, rsp) {
                if (err)
                    throw err;
                res.status(200).json({ 'Deconnexion': 'Deconnexion OK' });
            });
        });
        app.post('/info', function (req, res) {
            dbo.collection("information").deleteMany({ 'id': 0 });
            var information = {
                id: 0,
                age: req.body.age,
                famille: req.body.famille,
                race: req.body.race,
                nourriture: req.body.nourriture
            };
            console.log(information);
            dbo.collection("information").insertOne(information, function (err, rsp) {
                if (err)
                    throw err;
                res.status(200).json({ 'Information': 'Information ajouté' });
            });
        });
        app.post('/updateInfo', function (req, res) {
            dbo.collection("information").deleteMany({ 'id': 0 });
            var information = {
                id: 0,
                age: req.body.age,
                famille: req.body.famille,
                race: req.body.race,
                nourriture: req.body.nourriture
            };
            console.log(information);
            dbo.collection("information").insertOne(information, function (err, rsp) {
                if (err)
                    throw err;
                res.status(200).json({ 'Information': 'Information mise à jour' });
            });
        });
        app.post('/addContact', function (req, res) {
            var login = req.body.login;
            var user = {
                login: login,
                password: 'aaa'
            }
            console.log(login);
            dbo.collection("users").findOne({ 'login': login }, function (err, resp) {
                if (err)
                    throw err;
                if (resp) {
                    dbo.collection("contact").insertOne(user, function (err, rsp) {
                        if (err)
                            throw err;
                    });
                    res.json(resp);
                } else {
                    dbo.collection("users").insertOne(user, function (err, rsp) {
                        if (err)
                            throw err;
                    });
                    dbo.collection("contact").insertOne(user, function (err, rsp) {
                        if (err)
                            throw err;
                    });
                    res.json(resp);
                }
            });
        });
        app.get('/getData', function (req, res) {
            dbo.collection("information", function (err, collection) {
                collection.find({ 'id': 0 }).toArray(function (err, item) {
                    if (err)
                        throw err;
                    console.log(item);
                    res.json(item);
                });
            });
        });
        app.get('/getUser', function (req, res) {
            dbo.collection("users", function (err, collection) {
                collection.find().toArray(function (err, item) {
                    if (err)
                        throw err;
                    console.log(item);
                    res.json(item);
                });
            });
        });
        app.get('/getContact', function (req, res) {
            dbo.collection("contact", function (err, collection) {
                collection.find().toArray(function (err, item) {
                    if (err)
                        throw err;
                    console.log(item);
                    res.json(item);
                });
            });
        });
        app.post('/deleteContact', function (req, res) {
            var login = req.body.login;
            dbo.collection("contact", function (err, collection) {
                collection.findOneAndDelete({ 'login': login }, function (err, rsp) {
                    if (err)
                        throw err;
                    res.json(rsp);
                });
            });
        });
    }
});

app.listen(PORT, function () {
    console.log("Serveur en cours")
})
