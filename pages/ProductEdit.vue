<template>

<div>
    <form @submit="submit">           <!--you can use prevent  to stop refreshing-->
        <label class="text-slate-100 bg-red-900" >title</label>
        <input type="text" v-model="title"/>

        <label>image</label>
        <input type="text"  v-model="image"/>

        <button>Save </button>
    </form>
    <nuxt-link to="product">go to product page</nuxt-link>
</div>

</template>


<script>
import {ref,onMounted} from 'vue'

import { useRouter,useRoute } from 'vue-router'
//import { routerKey } from 'vue-router'

export default{
    name:"productEdit",
    setup(){
        const title=ref("")
        const image=ref("")
        //console.log(title,image)
         const router=useRouter()
         const route=useRoute()

        onMounted(async()=>{
            const res=await fetch(`http://localhost:3000/products/${route.params.id}`)
            
            const product=await res.json();
            title.value=product.title;
            image.value=product.image
        
        
        })

        const submit=async()=>{
            await fetch("http://localhost:3000/products",{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify({
                    title:title.value,
                    image:image.value
                })
            })
            
            //  await router.push("pages/product")
            
        }
        return {title,image,submit}
    }
}



</script>