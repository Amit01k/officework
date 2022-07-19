<template>
<!-- <h2>this is the first component that is created by you  {{"amit".length}}   {{10+20}}</h2>     {{10+30}} this is interpolation -->
<!-- <h3>e-mail: {{email}}</h3> -->
<h2>gameName function {{getName()}} : this is come from methods getName     {{getData("this is come from getData function")}}</h2>
<!-- <h2>this is come from getData :>  {{getData("this is come from getData function")}}</h2> -->
</template>


<script>
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

        }
    }
   
}

</script>

<style>
h2{
    color: red;
}


</style>