<template>
  <div id="app">
    
    <AllSignin/>
 
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}


</style>
