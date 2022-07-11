// // console.log(Date())
// //  function add(a,b) {
// //     return a+b;
// //  }    

//  //add(2+3)
// //  console.log(add(3,4))

// // add=(a,b)=>{
// //     return a+b
// // }

// add=(a,b)=>{return a+b;}

// console.log(add(3,4))
// let http=require("http")
// http.createServer(function(req,res){
//     res.end("hiii amit loram200 this is only for you ")
//     console.log("amit kumar kushwaha")
// }).listen(3000)

//  let a="amit";
// console.log(a)
// console.log("nsjdbgf")
//  let b="Amit"

// console.log(b)

// a="amit"
// b="kumar"

// console.log(`this is my first name ${a}.And this is my second name ${b}`)



// a=90
// b=89
// console.log(a+b)
// console.log(`this is addition of two number" ${a+b}`)


// Name="Amit"
// console.log(`${Name}`.startsWith('A'))
// console.log(`${Name}`.endsWith('t'))
// console.log(`${Name}`.includes('Amit'))
// console.log(`${Name}   `.repeat(10))



//array destructuring
// let Names=["amit","ankit","rajan","rohan","kumar"]
// console.log(Names[4])
// //let [t1,t2,t3,t4,t5]=Names
// //console.log(t5)


// let [t1,,,,last]=Names   //this is line we skip some work by using , so by this we can skip the word
// console.log(`this is my fav language ${t1}. this is vary bad language ${last}`)

// console.log(Names.length)


// reverse a number without using third variable

// a=10
// b=5
// // a=a+b
// // b=a-b
// // a=a-b
// // console.log(a,b)

// [a,b]=[b,a]
// console.log(a,b)

//spread operator
// nums=[1,2,34,5,7,8]
// console.log(...nums)


// a=[1,2,3,5,6,8,10,12]
// let s=[]
// for(let i=0;i<=a.length;i++){  //function scope start
//     if(a[i]%2==0){ //block scope start
//         console.log(a[i]+"-")
//     }//block scope is close
//     //return
   
// }//function scope close


//diffrence between parameter and argument
//when function define in(a,b) than it is called parameter
//when function calll and we give some input like (3,4) so that is called argument.

//rough work of how to work string
// a="100"
// b="10"
// console.log(a+b)




person=[{ a:"amit",ankit:"sdg"},{c:"sdfgf",d:"dfgfd"}]
console.log(person[0].a)