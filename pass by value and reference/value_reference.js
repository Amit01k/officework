//if we work with primitive data type than it called pass by value(string,boolean,number,)

// a=20;
 
// //this a and b is fully independent so if we add 5 in b than only b is changed
// // b=a
// b=a+5
// console.log(a)
// console.log(b)




//if we work with non-primitive data type than it called pass by reference


// obj1={
//     name:"amit",
//     pass:"1234"
// }

// obj2=obj1
// obj2.pass="bsdjfbgjdfjj"   
// console.log(obj1)
// console.log(obj2)


let arr1=["amit","ankit","rajan"]
// let arr2=arr1
// arr2.push("rashan")//array is non-primite data type its change tha original value
// console.log(arr1)
// console.log(arr2)

arr1.forEach(element => {
    console.log(element)
    
});




