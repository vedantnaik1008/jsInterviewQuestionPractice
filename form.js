const usernameText = document.querySelector('#username')
const paragraph = document.querySelector('p')
const button = document.querySelector('button');

// usernameText.addEventListener('input', (e) => {
//     paragraph.innerText = e.target.value;
// });

// usernameText.addEventListener('keypress', (e) => {
//     // console.log(e);
//     console.log(e.code);
//     console.log(e.key);
// });

// usernameText.addEventListener('keyup', (e) => {
//     // console.log(e);
//     console.log(e.code);
//     console.log(e.key);
// });

// usernameText.addEventListener('keydown', (e) => {
//     // console.log(e);
//     console.log(e.code);
//     console.log(e.key);
// });
button.addEventListener('wheel', (e) => {
   console.log('mousedown', e);
});