const arr = [1, 2, 3, 4];

const result = arr.map((x) => x * 2);
console.log(result);

const pluse = arr.map((x) => x + 1);
console.log(pluse);

const binary = arr.map((x) => x.toString(2));
console.log(binary);

const odd = arr.filter((x) => x % 2);
console.log(odd);

const sum = arr.reduce((a, b) => a + b);
console.log(sum);

const max = (arr) => {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

console.log(max(arr));

const Max = arr.reduce((a, b) => {
    return a = a > b ? a : b;
}, 0);
console.log(Max);

const users = [
	{ firstName: "Alok", lastName: "Raj", age: 23 },
	{ firstName: "Ashish", lastName: "Kumar", age: 29 },
	{ firstName: "Ankit", lastName: "Roy", age: 29 },
	{ firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

const FullName = users.map((x) => x.firstName + " " + x.lastName)
console.log(FullName);

const Age = users.reduce((acc, cur)=> {
    if(acc[cur.age]){
        acc[cur.age] += acc[cur.age]
    }else{
        acc[cur.age] = 1
    }
    return acc
}, {})

console.log(Age);

const filter = users.filter((x) => x.age < 30).map((user)=> user.firstName);
console.log(filter);

const reduce = users.reduce((acc, cur)=> {
    if(cur.age < 30){ 
        acc.push(cur.firstName)
    }
    return acc;
    
}, []);
console.log(reduce);