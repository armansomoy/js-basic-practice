function welcomeMessage(bucketSize, ballSize, ballNumber) {
    // console.log(bucketSize, ballSize, ballNumber);
}
const bucketSize = 20;
const ballSize = [5, 5, 5];
const ballNumber = 3;
welcomeMessage(bucketSize, ballSize, ballNumber);


function message(name, greetHandler) {
    greetHandler(name);
}

function greetMorning(name) {
    console.log("Good Morning", name);
}

function greetAfternoon(name) {
    console.log("Good Afternoon", name);
}

function greetEvening(name) {
    console.log("Good Evening", name);
}

message("arman", greetMorning);
message("sakib", greetAfternoon);
message("arif", greetEvening);
