const student = {
    id: 101,
    money: 5000,
    name: "RJ Kibria",
    major: "science",
    isRich: false,
    subjects: ["english", "math", "calculas"],
    bestFriend: {
        name: "arman",
        major: "science"
    },
    takeExam: function () {
        console.log(this.name, "Taking Exam");
    },
    treatDay: function (expense, tips) {
        this.money = this.money - expense - tips;
        return this.money;
    }
}

student.takeExam();
const remaining = student.treatDay(900, 100);
const remaining2 = student.treatDay(500, 50);
console.log(remaining2);