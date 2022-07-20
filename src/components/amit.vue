<template>
<div>
    <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet repellendus quae vitae, nam modi accusamus! Commodi delectus officia dolores!</b></p>
<p>ggvhgvjnhvjhjijeriotjierjtioer</p>
<!-- <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, laboriosam.</h3>
<h2>dfgjdbfjgbjdfgbjfd</h2> -->
<!-- <input type="text" v-model="count"  />
<h2>{{count}}</h2> -->


<input type="text" v-model="name"/>
<br>
<br>
<input type="text" v-model="email"/>
<br>
<br>
<button v-on:click="getData()" type="button">button</button>
</div>




</template>

<script>
export default{
    name:"amit-lorem",
    data(){
        return{
            email:null,
            name:null
        } 
        // return{
        //     count:100
        // }

    },
    methods:{
        getData(){
            console.warn("value:",this.email,this.name)
        }

    }
}


</script>