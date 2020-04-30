const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    type: String,
    weight: Number,
    sets: Number, 
    reps: Number, 
    duration: Number,
    //only enter this field if type is cardio 
    distance: {
        type: Number,
        validate: {
            validator: function() {
                return this.type === String; 
            },
            message: "You may only enter a duration for a cardio exercise"
        }
    }
}); 

const Exercise = mongoose.model("Exercise",ExerciseSchema); 

module.exports = Exercise; 


