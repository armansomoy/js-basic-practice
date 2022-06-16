class Support {
    name;
    designation = "support Web Dev";
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, "Start A Support Session");
    }
}

const aamir = new Support("Aamir Khan", "BD");
const salman = new Support("Salman Khan", "Dubai");
aamir.startSession();
salman.startSession();
console.log(aamir, salman);

const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
const output = friends.find(friend => friend.length == 5);
console.log(output);