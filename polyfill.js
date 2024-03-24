let name = {
    firstName: "Vedant",
    lastName: "Naik"
}

let printName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName, " , " + hometown, " , " + state);
}

let printMyName = printName.bind(name, "sancole")
printMyName("goa")

Function.prototype.mybind = function (...args){
    let obj = this //printName
        params = args.slice(1)
    return function (...args2) { //...args2 is printmyname
    obj.apply(args[0], [...params, ...args2])//name arguments
}
}

let printMyName2 = printName.mybind(name, "sancole")
printMyName("goa")
