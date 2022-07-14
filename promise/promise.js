// setTimeout( fun=()=>{
//     console.log("this is come from tmer")
// },4000)

// setTimeout(() => {
//     console.log("sgnfnf")
    
// }, 3000);
// let timer=new Promise((resolve, reject) => {
//     setTimeout( pro=()=>{
//         console.log("this is come from promise")
//         resolve()
//         reject()
//     },4000)
// })
// timer.then(function(){
//     console.log("this is from resolve")
// })

// timer.catch(function(){
//     console.log("this is the error")
// })

// setTimeout(()=>{
//     console.log("asdjfjsdj")
// },2000)



let hotel ="open";
const myPromise = new Promise((resolve, reject) => {
    try {
        if(hotel ==="open"){
            resolve("get the order")
        }
        else if(hotel ==="close"){
            reject("Cancle the order")
        }
    } catch (err) {
        console.log(err)
    }
});
myPromise.then((data) =>{
    console.log(data)
}
).catch(err =>{
    console.log(err)
})