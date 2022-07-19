<template>
<!-- <h2>this is the first component that is created by you  {{"amit".length}}   {{10+20}}</h2>     {{10+30}} this is interpolation -->
<div>
    <h3>e-mail: {{"iurhtiuhdiutuid"}}</h3>
<h2>gameName function {{getName()}} : this is come from methods getName     {{getData("this is come from getData function")}}   this is third function {{getMailAndName()}}</h2>


<button v-on:click="test()">CLICK ME</button>

<button v-on:click="test2('button 2 clicked')"> button 2 click me</button>

<!-- <button ></button> -->
</div>
<!-- <h2>this is come from getData :>  {{getData("this is come from getData function")}}</h2> -->
</template>


<script>
//import test from 'node:test'

export default{
    name:"Home-page",
    data(){
        return{
            email:"sdfngksdnfklng",
            // mobile:qw5r34534,
        }
    },
    methods:{
        getName(){
            return "code"
        },
        getData(name){
            return name

        },

        getMailAndName(){
            return{
                name:"amiingfjfndsgnfdg",
                email:"@@@@@@@@@@@@@@@@@@@@@@@@@"
            }

        },
        test(){
            alert("function calleds")

        },
        test2(data){
            alert(data)

        }
    }
   
}

</script>

<style>
/* *{
    background-color: red;
} */
h2{
    color: red;
    background-color: green;
}


</style>