const express = require("express");
const router = express.Router();
const db = require("../models")
const mongoose = require("mongoose");


//home page 
router.get("/",(req,res)=> {
    db.Workout.find().sort({"date":-1})
    .then(dbWorkout => {
        const hbObj = {
            latest: dbWorkout[0],
            previous: dbWorkout.slice(1)
        }
        console.log(hbObj)
        res.render("home",hbObj); 
    }).catch(err => {
        console.log(err);
        if(err) res.json(err); 
    })
})

router.get("/addworkout",(req,res)=> {
    res.render("addworkout"); 
})

router.route("/addexercise/:id").get((req,res) => {
    //query db for the workout so we can render name of workout on the page and id of workout for the submit button
    db.Workout.findById(req.params.id)
    .then(dbWorkout => {
        res.render("addexercise",dbWorkout)
    }).catch(err => {
        if(err) res.json(err)
    })
})

router.route("/seeworkout/:id").get((req,res)=> {
    //query db for workout and exersizes 
    db.Workout.findById(req.params.id)
    .populate("exercises")
    .then(dbWorkout => {
        console.log(dbWorkout); 
        res.render("workout.handlebars",dbWorkout)
    }).catch(err => {
        console.log(err); 
        if(err) res.json(err)
    })
})


module.exports = router;