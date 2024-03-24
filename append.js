const container = document.querySelector('.flex');
const child = document.createElement('div');
child.setAttribute('class', 'card');
for (let index = 1; index <= 100; index++) {
    child.innerText = `${index}`;
    container.append(child.cloneNode(true));
}
