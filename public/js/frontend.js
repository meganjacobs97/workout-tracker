 $("#add-workout").on("click",function(event) {
    location.href = "/addworkout"
 })

//button click for see exercizes button 
    //redirect to /workout/id 
$(".see-exercises").on("click", function (event) {
    event.preventDefault(); 
    //get id of workout 
    const id = this.id; 
    
    location.href = "/seeworkout/" + id
})


//button click for add excise button 
    //redirect to /addexercise/id
$(".add-exercises").on("click", function (event) {
    event.preventDefault(); 
    //get id of workout 
    const id = this.id; 
    location.href = "/addexercise/" + id; 
})

//button click for submit-workout button (thats the id)
    //ajax call to post 
    //redirect to /
$("#submit-workout").on("click", function (event) {
    event.preventDefault(); 
    const workoutName = $("#workout-name").val().trim(); 

    const postData = {name:workoutName}; 

    $.ajax({
        method: "POST",
        data: postData,
        url: "api/workout/new"
    }).then(function (res) {
        location.href = "/"; 
    })
})


//form listener for add exersize (submit-exercise is class for button, id is id for workout)
    //ajax call to post 
    //redirect to workout/:id 
$(".submit-exercise").on("click",function(event) {
    event.preventDefault(); 
    //get id of workout 
    const id = this.id; 
    //get values  from form
    const exerciseName = $("#exercise-name").val().trim(); 
    const exerciseType = $("#exercise-type").val().trim();
    const exerciseWeight = $("#exercise-weight").val().trim();;
    const exerciseSets = $("#exercise-sets").val().trim();; 
    const exerciseReps = $("#exercise-reps").val().trim();; 
    const exerciseDuration = $("#exercise-duration").val().trim();; 
    const exerciseDistance = $("#exercise-distance").val().trim();; 
    

    //build object 
    const exercise = {name:exerciseName}
    //only add nonnull values 
    if(exerciseType) {
        exercise.type = exerciseType; 
    }
    if(exerciseWeight) {
        exercise.weight = exerciseWeight;
    }
    if(exerciseSets) {
        exercise.sets = exerciseSets;
    }
    if(exerciseReps) {
        exercise.reps = exerciseReps;
    }
    if(exerciseDuration) {
        exercise.duration = exerciseDuration;
    }
    if(exerciseDistance) {
        exercise.distance = exerciseDistance;
    }

    //post request 
    $.ajax({
        method: "PUT",
        data: exercise,
        url: "/api/workout/" + id
    }).then(function (res) {
        location.href = "/seeworkout/" + id; 
    })


})
