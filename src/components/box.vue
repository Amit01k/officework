<template>
<div>
    <h2>technology</h2>
<label for="java">java</label>
<input type="checkbox" value="java" v-model="technology" id="java">

<label for="Php">Php</label>
<input type="checkbox" value="Php"  v-model="technology" id="Php">
<label for="javaScript">javaScript</label>
<input type="checkbox" value="javaScript" v-model="technology" id="javaScript">
<h2>technology:{{technology}}</h2>
</div>



</template>

<script>
export default{
    name:"BoxPage",
    data(){
        return{
             technology:[]
        }
            

    }
}

</script>

<style scoped>
h2{
    color: pink;
}


</style>