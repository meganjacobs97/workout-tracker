const express = require("express");
const router = express.Router();
const db = require("../models")

//home page 
router.get("/",(req,res)=> {
    db.Workout.find().sort({"date":1})
    .then(dbWorkout => {
        const hbObj = {
            latest: dbWorkout[0],
            previous: dbWorkout.silce(1)
        }
        res.render("home",hbObj); 
    })
})

router.get("/addworkout",(req,res)=> {
    res.render("addworkout"); 
})

router.get("/addexercise/:id",(req,res) => {
    //query db for the workout so we can render name of workout on the page and id of workout for the submit button
})

router.get("/workout/:id"), (req,res)=> {
    //query db for workout and exersizes 
}


module.exports = router;