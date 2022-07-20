<template>
<div>
    <h2>technology</h2>
<label for="java">java</label>
<input type="checkbox" value="java" v-model="technology" id="java">

<label for="Php">Php</label>
<input type="checkbox" value="Php"  v-model="technology" id="Php">
<label for="javaScript">javaScript</label>
<input type="checkbox" value="javaScript" v-model="technology" id="javaScript">

<br/> <br/>
<label for="student">student</label>
<input type="radio" value="student" name="who" v-model="who" id="student">

<label for="developer">developer</label>
<input type="radio" value="developer" name="who" v-model="who" id="developer">


<h2>technology:{{technology}}</h2>
<h2>i am a {{who}}</h2>
</div>



</template>

<script>
export default{
    name:"BoxPage",
    data(){
        return{
             technology:[],
             who:null
        }
            

    }
}

</script>

<style scoped>
h2{
    color: pink;
}


</style>