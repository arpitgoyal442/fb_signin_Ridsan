<template>
  <div>
    <button v-on:click="handleFacebookLogin">Sign In With Facebook</button>
  </div>
</template>

<script>
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
export default {
  name: "FacebookSignin",
  methods: {
    handleFacebookLogin() {
      const provider = new FacebookAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          console.log("Result" + result);
          const user = result.user;

          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;

          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          console.log("Error" + error);
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = FacebookAuthProvider.credentialFromError(error);

          // ...
        });
    },

  }
};


</script>

<style scoped>
button {
  background: rgba(59, 89, 152);
  border-radius: 15px;
  font-size: 15px;
  padding: 5px;
  font-weight: 400;
  color: white;
  width: 200px;
}
</style>
