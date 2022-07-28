<template>

<div>
    <form @submit.prevent="submit">
        <label class="text-slate-100 bg-red-900" >title</label>
        <input type="text" v-model="title"/>

        <label>image</label>
        <input type="text"  v-model="image"/>

        <button>Add Button </button>
    </form>
    <nuxt-link to="product">go to product page</nuxt-link>
</div>

</template>


<script>
import {ref} from 'vue'

import { useRouter } from 'vue-router'
//import { routerKey } from 'vue-router'

export default{
    name:"createPage",
    setup(){
        const title=ref("")
        const image=ref("")
        //console.log(title,image)
         const router=useRouter()
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


<!-- 
<template>
  <form @submit.prevent="submit" >
    <label>Title</label>
    <input type="text" name="title" v-model="title"                
    />
    <label>Image</label>
    <input type="text" name="image" v-model="image" 
    />
    <button>Add Product</button>
</form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
    // name: "ProductCreate",
    setup() {
       const title = ref(''); 
       const image = ref('');
       const router = useRouter();
       const submit = async () => {
           await fetch('http://localhost:3000/products', {
               method: 'POST',
               headers: {"Content-type": "application/json"},
               body: JSON.stringify({ 
                   title: title.value,
                   image: image.value
                })
           });
           await router.push('data/products');
       }
       
       return {title, image, submit}
    }
    
}
</script> -->
