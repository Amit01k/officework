<template>
<div>


    <h4>{{text}}</h4>
    <h2>{{tags}}</h2> <!--by this way interpolate the all text with the tag this its print like this-><h2>this is come from tag</h2>"-->
    <h1 v-html="tags"></h1>  <!--by this way we can use only html code without tag  it print this is come from tag-->
</div>


</template>

<script>


export default{
    name:"html-biding",
    data(){
        return{
            text:"this is come form text",
            tags:"<h2>this is come from tag</h2>"
        }
    }
}


</script>