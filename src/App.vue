<template>
  <div id="app">
    
    <AllSignin class="AllSignin"/>
 
  </div>
  
</template>

<script>

import AllSignin from "./components/AllSignin.vue"


export default {
  name: 'App',
  components: {
    AllSignin
    
    
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  height: 100vh;
  width: 100vw;
  background: rgba(255, 211, 17, 0.89);
  text-align: center;
  display: inline-block;
  
}

.AllSignin{
  margin-left: 35vw;
  margin-top: 25vh;
}


</style>
