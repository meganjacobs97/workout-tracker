const express = require("express");
const router = express.Router();
const db = require("../models");
const mongoose = require("mongoose");

// "/:id" (GET REQUEST TO RETURN WORKOUT AND ASSOCIATE EXERCISES)
router.route("/:id").get((req,res)=>{
    db.Workout.findOne({id: mongoose.ObjectId(req.params.id)})
    .populate("exercises")
    .then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => {
        if(err) res.json(err)
    })
}); 

// "/new" (POST TO ADD NEW WORKOUT)
router.route("/new").post((req,res) => {
    db.Workout.create({name: req.body.name})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
})
 
router.route("/:id").put((req,res) => {
    //get id of workout 
    const workoutId = req.params.id;
    //create exersize 
    db.Exercise.create(req.body)
    //update workout 
    .then(({_id}) => {
        db.Workout.findOneAndUpdate({_id:workoutId}, {$push: {exercises:_id}}).then(dbWork => {
            console.log(dbWork); 
            res.json(dbWork); 
        })})   
    .catch(err => {
        res.json(err); 
    })
})

module.exports = router;