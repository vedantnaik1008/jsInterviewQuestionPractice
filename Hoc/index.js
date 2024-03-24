async function foo() {
    return 'hello world'
}

const result = foo().then(res=> console.log(res))
console.log(result);

const numbers = [1,2,3,4,5]
const fill = numbers.filter((num) => num <= 3)
console.log(fill);
const mapFill = fill.map((num)=> num + 5)
console.log(mapFill);

const str = 'hi i am vedant naik'
console.log(str.split(' ').map((res)=> res.charAt(0).toUpperCase() + res.substring(1, res.length)));