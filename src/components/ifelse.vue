<template>
<div>
    <hr/>
    <h3 v-if="show">this is come from if condition</h3>
    <h3 v-else>this is come from else</h3>
    <button v-on:click="show=!show">toogle    </button>
    <!-- <button v-on:click="show=false">toogle2    </button> --> <!--if we wan to run this button so we need comment the else consditon-->

<h3 v-if="show2">this disable because here i gived show2(false) value</h3>
    

<h3 v-else>this disable because here i gived show2(false) value</h3>
</div>

</template>

<script>
export default{
    name:"ifElse",
    data(){
        return{
            show:true,
            // show2:false
         }
    }
}

</script>