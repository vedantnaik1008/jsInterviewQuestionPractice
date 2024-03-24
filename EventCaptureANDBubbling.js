
// document.querySelector("#grandparent").addEventListener('click', () => {
//     console.log("Grandparent Clicked!");
// }, true)

// document.querySelector("#parent").addEventListener('click', () => {
//     console.log("Parent Clicked!");
// }, true)

// document.querySelector("#child").addEventListener('click', () => {
//     console.log("Child Clicked!");
// }, true)

//how to stop propagation because its expensive things

document.querySelector("#grandparent").addEventListener('click', () => {
    console.log("Grandparent Clicked!");
}, false)

document.querySelector("#parent").addEventListener('click', (e) => {
    console.log("Parent Clicked!");
    e.stopPropagation
}, false)

document.querySelector("#child").addEventListener('click', () => {
    console.log("Child Clicked!");
}, false)