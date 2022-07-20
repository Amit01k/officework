<template>
<div>
    <h3 v-if="show">this is come from if condition</h3>

<h3 v-if="show2">this disable because here i gived show2(false) value</h3>
</div>

</template>

<script>
export default{
    name:"ifElse",
    data(){
        return{
            show:true,
            show2:false
        }
    }
}

</script>