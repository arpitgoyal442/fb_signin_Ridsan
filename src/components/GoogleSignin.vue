<template>
  <div>
    <GoogleLogin
       
      :params="params"
      :renderParams="renderParams"
      :onSuccess="onSuccess"
      :onFailure="onFailure"
    ></GoogleLogin>
  
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";

export default({
  name: "GoogleSignin",
  components:{
      GoogleLogin
  },
  data() {
    return { 
      // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
      params: {
        client_id:
          "593324643569-8ev78dfkv9jocqts1h24n5sntgr8vmhc.apps.googleusercontent.com",
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
    };
  },

  methods: {
    onSuccess(googleUser) {
      console.log(googleUser);
      console.log(googleUser.getBasicProfile());
    },
  },
});
</script>
