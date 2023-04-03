var Hero = require("../models/hero");

var async = require("async");

const { body, validationResult } = require("express-validator");


exports.heroes_get = function (req, res, next) {    
    Hero.find().populate("pet", "-_id name").select("name pet").sort([["_id", "ascending"]]).exec(function(err, listofheroes){
        if(err){
            return;
        }        
        res.json(listofheroes);
    });
};


exports.heroes_get_id = function (req, res, next) {    
    Hero.findById(req.params.id).populate("pet", "-_id name").select("name pet").exec(function(err, hero){
        if(err){
            return;
        }        
        res.json(hero);
    });
};


exports.heroes_delete = function (req, res, next) {    
    Hero.findByIdAndRemove(req.params.id).exec(function(err){
        if(err){
            return;
        }        
        
    });
};

exports.heroes_put = [(req, res, next) => {
    var hero = new Hero({
        name: req.body.name,
        pet: req.body.pet,        
        _id: req.params.id // This is required, or a new ID will be assigned!
    });
      
    Hero.findByIdAndUpdate(req.params.id, hero, function (err, thehero) {
        if (err) {            
          return err;
        }        
        res.json(thehero);
    });
    }
];

exports.heroes_post = function (req, res, next) {    
    var hero = new Hero({
        name: req.body.name,
        pet: undefined
    });
    hero.save();
    res.json(hero);
    
};