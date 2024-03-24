let name = {
    firstName: "Vedant",
    lastName: "Naik",
    // printFullName: function () {
    //     console.log(this.firstName + " " + this.lastName);
    // }
}

let printFullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + " , " + state);
}

printFullName.call(name, "Sancoale", "Goa")

let name2 = {
    firstName: "Sambhaji",
    lastName: "Bhosale",
    // printFullName: function () {
    //     console.log(this.firstName + " " + this.lastName);
    // } or we can do something like this to reuse it in better way
}



// function burrowing
                    //along with our this keyword needs to be pointed. name2 is the refrence
printFullName.call(name2, "ma bhavani", "womb")
printFullName.apply(name2, ["ma bhavani", "womb"])


//bind method
let printMyName = printFullName.bind(name2, "ma bhavani", "womb")
console.log(printMyName)
printMyName()