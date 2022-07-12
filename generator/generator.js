function *numbers(){
    console.log('Begin')
    yield 1;
    yield 2;
    yield 3;
    // i=0
    // while(true){
    //     yield i++;
    // }
}
// numbers()
let iterator = numbers()
//console.log(iterator)
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())//in the ouput its show false when all number not printed and after some time its show true when all number printed
console.log(iterator.next())
console.log(iterator.next())




//using loop we can generate lot of numbers
// function *numbers(){
//     console.log('Begin')
//     // yield 1;
//     // yield 2;
//     // yield 3;
//     i=0
//     while(true){
//         yield i++;
//     }
// }
// numbers()
// let iterator = numbers()
// //console.log(iterator)
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// console.log(iterator.next())

// console.log(iterator.next())