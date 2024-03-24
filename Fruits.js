const body = document.querySelector('body')
let fruits = ['banana', 'mango', 'apple', 'litchi']
const ul = document.createElement('ul');
fruits.forEach(fruit => {
    const li = document.createElement('li');
    li.textContent = fruit
    ul.append(li)
});
body.append(ul);