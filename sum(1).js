// let sum = a => b => b ? sum(a + b) : a;
// console.log(sum(1)(2)(3)(4)());

// const arr = [0, 1, 2, 3, 4, 5];
// const result = arr.filter((num) => num < 3);
// console.log(result);

// const p = document.querySelector('.number');
// const Timeout = () => {
//     let count = 0;
//     const t = setInterval(() => {
//         if (count <= 10) {
//             p.innerHTML = `<div>${count++}</div>`;
//         } else if (count >= 10) {
//             count = 0;
//         }

//         console.log(p);
//     }, 1000);
// };

// Timeout();

// function foo(){
//     let a = 1;
//     let b = 2;
//  var c = 3
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }
// foo();
// console.log(c);
// console.log(a);
// console.log(b);
// console.log(123);
// console.log(foo);
// foo()
// var foo = 20
// function foo(){
//     console.log('foo caled=]ed');

// }

// function increment(){
//     let count = 0;
// const button = document.querySelector('button');
//    button.addEventListener('click', ()=> {
//         console.log(count++);
//     })
// }
// increment()

// function counter() {
//     let count = 0;
//     return () => {
//         console.log(count++);
//     };
// }

// counter()();

// for (var index = 1; index <= 3; index++) {
//     function x(i) {
//         setTimeout(() => {
//             console.log(i);
//         }, 1000);
//     }
//     x(index);
// }

async function Pro() {
    return 'hello';
}

const result = async function () {
    const value = await Pro();
    console.log(value);
    console.log('ff');
    console.log('dd');
};
result();
