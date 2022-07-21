<template>
    <h1>{{name}}</h1>
</template>

<script>
    export default {
        name:"SampleHook",
        data(){
            return{
                name:"Komal"
            }
        },
        created(){
           alert("Created");
        },
        beforeCreate(){
            alert("Before Created");
        }
    }
</script>