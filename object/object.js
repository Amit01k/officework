let amit={
    Name:"Amit",
    Kumar:"naskdnfisdn",
    Kushwaha:"Kushwaha",
    name(){
        console.log(this.Name+" "+this.Kushwaha)

    }
}
// amit.name()

// console.log(amit.Kumar)
// //destructuring in object
// //we can destructure the object like below
// let {Name,Kumar,Kushwaha}=amit   
// console.log(Kumar)

const bird = {
    size: 'small',
  };
  
  const mouse = {
    name: 'Mickey',
    small: true,
  };

  console.log(mouse[bird["name"]])