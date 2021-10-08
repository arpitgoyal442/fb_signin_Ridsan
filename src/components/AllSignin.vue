<template>

<div class="headContainer">
<FacebookSignin class="FacebookSignin"/>
<GoogleSignin class="GoogleSignin"/>
</div>

    
</template>

<script>
import GoogleSignin from "./GoogleSignin.vue"
import FacebookSignin from "./FacebookSignin.vue"

export default ({

    name:"AllSignin",
    components:{
      GoogleSignin,
      FacebookSignin
    }
   
})
</script>

<style scoped>



.FacebookSignin{
  display: inline-block;
  
}

.GoogleSignin{
  display: inline-block;
  border-radius: 30px;
  
}


</style>
