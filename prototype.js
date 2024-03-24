// let arr = ["vedant", "naik"]
// let object = {
//     name: "vedant",
//     city: "murmagoa",
//     getIntro: function () {
//         console.log(this.name + " from " + this.city);
//     }
// }

// function func(){

// }

// let object2 = {
//     name: "vedant"
// }

//never do this it causes performance issue
// object2.__proto__ = object;

Function.prototype.mybind = function(){
    console.log("safasf");
}
//this Function.prototype so each and every function you create will geet access to mybind methode just because we have set this mybind function to this Function.prototype setting it like that will give access to all the function to this mybind methode
function fun(){

}

let t = 4 + 4
console.log(t);