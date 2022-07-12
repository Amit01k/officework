// function kumar() {
//     let a = "amit";
//     let age = "22";
//     return {
//         a, age,
        

//     }
// }

// console.log(kumar())



// function kumar() {
//     let a = "amit";
//     let age = "22";
//     return {
//         a, age,
//         Mess(){
//             return `hello ${a}`

//         }

//     }
// }
// console.log(kumar().Mess())


// obj={
//     kumar:"amit",
//     home:"deoria",
//     result:[1,2,3,4,5,6],
//     present:"pune"
// }
// let {result,present}=obj
// console.log(this.result)


// obj={
//     kumar:"amit",
//     home:"deoria",
//     result:[1,2,3,4,5,6],
//     present:"pune",
//     fun(){
//         console.log(this.kumar)
//     }
// }
// let {result,present}=obj
// // console.log(obj.fun())

// // obj.fun()

function greet({a,title}){
console.log(`this is your first a ${a}. And this is your title ${title}`)
}

 greet({
    a:"amir",
    title:"kumar"
})

