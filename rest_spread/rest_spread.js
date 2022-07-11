//  var xyz=[1,2,3,5,7,8,8]
// //console.log(...a)

// var a,b,...c=xyz
// console.log(xyz)


// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,

function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    }
    return total;
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10


function add(...ele) {
    sum = 0
    for (let i of ele) {
        sum = sum + i

    }
    return sum
}


console.log(add(1, 2, 3, 5))