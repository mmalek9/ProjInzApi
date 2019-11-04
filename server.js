var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongo = require("mongoose");

var db = mongo.connect("mongodb://localhost:27017/ProjInzApi", { useFindAndModify: false},  function(err, response){
    if(err){console.log(err); }
    else{console.log('Connected to ' + db, ' + ', response);}
});

var app = express();
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var Schema = mongo.Schema;

var InfoSchema = new Schema({
    content: { type: String }
},{versionKey: false});

var DealSchema = new Schema({
    content: { type: String }
},{versionKey: false});

var ContactSchema = new Schema({
    name: {type: String},
    email: {type: String},
    content: { type: String }
},{versionKey: false});


var infoModel = mongo.model('info', InfoSchema, 'info');
var dealModel = mongo.model('deal', DealSchema, 'deal');
var contactModel = mongo.model('contact', ContactSchema, 'contact');

app.post("/api/SaveInfo", function(req, res){
    var mod = new infoModel(req.body);
    mod.save(function(err, data){
        if(err){
            res,send(err);
        } 
        else{
            res.send({data:"Record has been inserted!!!"});
        } 
    });
})

app.post("/api/UpdateInfo", function(req,res){
    var mod = new infoModel(req.body);
    infoModel.findByIdAndUpdate(req.body._id, { content: req.body.content},
        function(err, data){
        if(err){
            res.send(err);
        } 
        else{
            res.send({data:"Record has been updated!!!"});
        } 
    });
})

app.post("/api/DeleteInfo", function(req, res){
    infoModel.remove({_id: req.body.id}, function(err) {
        if(err){
            res.send(err);
        } 
        else{
            res.send({data:"Record has been deleted!!!"});
        } 
    });
})


app.get("/api/getInfo", function(req, res){
    infoModel.find({}, function(err,data){
        if(err){
            res.send(err);
        } 
        else{
            res.send(data);
        } 
    });
})

app.post("/api/SaveDeal", function(req, res){
    var mod = new dealModel(req.body);
    mod.save(function(err, data){
        if(err){
            res,send(err);
        } 
        else{
            res.send({data:"Record has been inserted!!!"});
        } 
    });
})

app.post("/api/UpdateDeal", function(req,res){
    var mod = new dealModel(req.body);
    dealModel.findByIdAndUpdate(req.body._id, { content: req.body.content},
        function(err, data){
        if(err){
            res.send(err);
        } 
        else{
            res.send({data:"Record has been updated!!!"});
        } 
    });
})

app.post("/api/DeleteDeal", function(req, res){
    dealModel.remove({_id: req.body.id}, function(err) {
        if(err){
            res.send(err);
        } 
        else{
            res.send({data:"Record has been deleted!!!"});
        } 
    });
})


app.get("/api/getDeal", function(req, res){
    dealModel.find({}, function(err,data){
        if(err){
            res.send(err);
        } 
        else{
            res.send(data);
        } 
    });
})


app.post("/api/SaveContact", function(req, res){
    var mod = new contactModel(req.body);
    mod.save(function(err, data){
        if(err){
            res,send(err);
        } 
        else{
            res.send({data:"Record has been inserted!!!"});
        } 
    });
})

app.post("/api/UpdateContact", function(req,res){
    var mod = new contactModel(req.body);
    contactModel.findByIdAndUpdate(req.body._id, {name: req.body.name, email: req.body.email ,content: req.body.content},
        function(err, data){
        if(err){
            res.send(err);
        } 
        else{
            res.send({data:"Record has been updated!!!"});
        } 
    });
})

app.post("/api/DeleteContact", function(req, res){
    contactModel.remove({_id: req.body.id}, function(err) {
        if(err){
            res.send(err);
        } 
        else{
            res.send({data:"Record has been deleted!!!"});
        } 
    });
})


app.get("/api/getContact", function(req, res){
    contactModel.find({}, function(err,data){
        if(err){
            res.send(err);
        } 
        else{
            res.send(data);
        } 
    });
})
app.listen(8080, function(){
    console.log('Example app listening on port 8080')
} )