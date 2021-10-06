<template>
  <div id="app">
    
    <signin/>
    <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>j
  </div>
  
</template>

<script>

import Signin from "./components/Signin.vue"
import GoogleLogin from 'vue-google-login';

export default {
  name: 'App',
  components: {
    Signin,
    GoogleLogin
    
  },
  data()
  {
      return {
                // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
                params: {
                    client_id: "593324643569-8ev78dfkv9jocqts1h24n5sntgr8vmhc.apps.googleusercontent.com"
                },
                // only needed if you want to render the button with the google ui
                renderParams: {
                    width: 250,
                    height: 50,
                    longtitle: true
                }
            }
  },
  methods:
  {
    onSuccess(googleUser)
    {
      console.log(googleUser);
      console.log(googleUser.getBasicProfile());

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
