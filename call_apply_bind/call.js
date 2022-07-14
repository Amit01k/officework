let a={
    name:"sdgdf",
    a:"sdgfsdg",
    // fname:function(){
    //     console.log(this.name,+" "+this.a)

    // }
}

 let fname =function(hometown){
    console.log(this.name,+" "+this.a+" "+hometown)

}
fname.call(a,"uttar pradesh")
let b={
    name:"afas",
    b:"asdgs"
}

fname.call(b)