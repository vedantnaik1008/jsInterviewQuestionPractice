// let sum = a => b => b ? sum(a + b) : a;
// console.log(sum(1)(2)(3)(4)());

const arr = [0, 1, 2, 3, 4, 5];
const result = arr.filter((num) => num < 3);
console.log(result);

const p = document.querySelector('.number');
const Timeout = () => {
    let count = 0;
    const t = setInterval(() => {
        if (count <= 10) {
            p.innerHTML = `<div>${count++}</div>`;
        } else if (count >= 10) {
            count = 0;
        }

        console.log(p);
    }, 1000);
};

Timeout();
