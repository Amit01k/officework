
// person=[{ a:"amit",ankit:"sdg"},{c:"sdfgf",d:"dfgfd"}]
// console.log(person[0].a)

// arr=[1,2,4,5,6]
// arr2=arr.map(function sum(num){ return num*2})


// console.log(arr2)


//when we need to change the all the array of element or modify the element than we use map fu


//  let b=a=() => {
//     return a + 100;
//   }

//   console.log(b)


// a=()=>{ 
//     return "sdfjbf"
    
// }

// console.log(a())

//use of map
// arr=[1,3,3,5]
// console.log(arr.map((double)=>{return double*2}))
// console.log(arr.map((double)=>{return double*3}))
// console.log(arr.map((double)=>{return double*4}))
// console.log(arr.map((binary)=>{return binary.toString(2)}))  //change the number in binary


const person=[{firstName:"amit",lastName:"kumar",age:"22"},
{firstName:"ankit",lastName:"kumar",age:"22"},
{firstName:"rajan",lastName:"kumar",age:"42"},
{firstName:"rohan",lastName:"kumar",age:"25"}]

console.log(person.map((x)=>x.firstName+" "+x.lastName))

console.log(person.filter((x)=>x.age>23))

console.log(person.filter((x)=>x.age>23).map((x)=>x.firstName))//we can use fucntion together like map and filter

//console.log()






//filter is used to valter value from array
// arr=[2,3,4,5,6,7]
// console.log(arr.filter(val=>{return val%2}))//its return odd value because 


// console.log(arr.filter((val)=>{return val%2===0}))   //itsreturn the even value like 2,4,6 


// console.log(arr.filter((val)=>val>4))


//use of reduce

//this is normal way
//  arr=[2,34,4,5,6,7]
// sum=0
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i]
// }
    
// console.log(sum)


// reduce when we use when we need only one value from array like addition of the array

// const output=arr.reduce(function(acc,curr){ //here curr parameter take the element on by one
//     acc=acc+curr
//     return acc

// },0)//here 0 is the initilization value
// console.log(output)

 arr=[2,99,4,5,6,7,34,89]

const higher=arr.reduce((max,curr) =>{
    if(curr>max){
        max=curr
        
    }
    return max
},0)
console.log(higher)


