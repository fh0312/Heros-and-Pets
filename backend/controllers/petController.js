
var Pet = require("../models/pet");
var async = require("async");

const { body, validationResult } = require("express-validator");




exports.pets_get = function (req, res, next) {    
    Pet.find().select("name").sort([["_id", "ascending"]]).exec(function(err, listofpets){
        if(err){
            return;
        }        
        res.json(listofpets);
    });
};


exports.pets_get_id = function (req, res, next) {    
    Pet.findById(req.params.id).select("name").exec(function(err, pet){
        if(err){
            return;
        }        
        res.json(pet);
    });
};