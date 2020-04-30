const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    date: {
        type: Date,
        default: Date.now
    },
    workouts: [
        {
            type: Schema.Types.ObjectId, 
            ref: "Workout"
        }
    ]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
