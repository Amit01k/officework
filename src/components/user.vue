<template>
<div>
    <hr/>
    <h4>cgcghch</h4>
    <h1>{{data}}</h1>
    <!-- <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur itaque cum hic suscipit, expedita necessitatibus natus tempora quibusdam animi debitis fugiat cumque fuga doloremque esse, veritatis nam alias! Eveniet, distinctio. Deserunt perspiciatis fuga totam exercitationem ducimus ipsa hic iusto sint? Ducimus illum dolore illo enim quasi voluptas soluta veniam sit!</h1> -->
    <!-- <h1 v-for="item of user" :key="item.name"></h1>
    <user :data="item"/>
    <page/> -->
</div>

</template>

<script>


//import page from './reuse.vue'
export default{
    name:"user-component",
    comments:{
        //page

    },
    data(){
        return{
            // user:[{name:"Amit", email:"amit@gmail.com"},
            // {name:"Ankit", email:"ankit@gmail.com"},{name:"sonali", email:"sonali@gmail.com"},{name:"sonu", email:"sonu@gmail.com"}]
        }
    },
    props:{
        data:Object
    }
}


</script>