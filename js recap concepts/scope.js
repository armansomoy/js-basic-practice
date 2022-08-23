function patriChai(age, earning) {
    console.log(age);
    console.log(earning);
    var trueAge = age + 7;

    function canMarry(expense) {
        const remaining = earning - expense;
        if (remaining > 1000) {
            return true;
        }
        return false;
    }
}