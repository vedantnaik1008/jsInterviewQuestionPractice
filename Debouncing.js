//main goal is to make api call while i pause typing
let counter = 0;
const getData = () => {
    console.log('fetching data...', counter++);
}

//for solving calling api getData again and again we should make better function means it should only call api only when user pause typing

const debounce = function (fn, d) { //diffrence between this two time interval function is more than delay then make api calls
    let timer;
    return function () {
        let context = this;
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, args)
        }, d);
    }
}

const betterfunction = debounce(getData, 300);

//throttling
// const expensive = () => {// if there are arguments then this and args then should modify code
//     console.log("expensive");
// }



// const throttle = (func, limit) => {
//     let flag = true;
//     return function () {
//         let context = this;
//         args = arguments;
//         if(flag){
//             func().apply(context, args)
//             flag = false;
//             setTimeout(() => {
//                 flag = true;
//             }, limit);
//         }
//     }
// }

// const betterExpensive = throttle(expensive, 100)
// window.addEventListener("resize", betterExpensive)
//throttling
const expensive = () => {
    console.log("expensive");
}

const throttle = (func, limit) => {
    let flag = true;
    return function () {
        let context = this;
        let args = arguments; // Declare 'args' as an array
        if (flag) {
            func.apply(context, args); // Use 'apply' to call 'func' with context and args
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    }
}

const betterExpensive = throttle(expensive, 300);
window.addEventListener("resize", betterExpensive);