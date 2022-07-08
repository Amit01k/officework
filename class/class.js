class employee{
    constructor(givenName,givenprofile,givenposition){
        this.Name=givenName
        this.profile=givenprofile
        this.position=givenposition
    }
    fun(){
        return `this is my name ${this.Name}`
    }
    joingYear(){
        return "good"+""+this.profile
    }
}

amit=new employee("amit","ENGINEER","SDE")
console.log(amit)
console.log(amit.fun())
console.log(amit.joingYear())