// bind
// let multiply = function (x, y){
//     console.log(x * y);
// }

// let multiplyByTwo = multiply.bind(this, 2) // this something and x = 2
// multiplyByTwo(5) // y = 5

// let multiplyByThree = multiply.bind(this, 3) // this something and x = 3
// multiplyByThree(5) // y = 5

//closures
let multiply = function (x) {
    return function (y) {
        console.log(x * y);
        console.log("x = " + x, "y = " + y);
    }
}
let multiplyByTwoClosures = multiply(2) // x = 2
multiplyByTwoClosures(3) // y = 3
