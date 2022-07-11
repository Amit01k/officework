// setTimeout( fun=()=>{
//     console.log("this is come from tmer")
// },4000)


// setTimeout(() => {
//     console.log("sgnfnf")
    
// }, 3000);
let timer=new Promise((resolve, reject) => {
    setTimeout( pro=()=>{
        console.log("this is come from promise")
        resolve()
    },4000)
})
timer.then(function(){
    console.log("this is from resolve")
})

timer.catch(function(){
    console.log("this is the error")
})