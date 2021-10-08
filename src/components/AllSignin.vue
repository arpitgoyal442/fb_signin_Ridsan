<template>

  <div>
    <b-card
       title="SIGN IN"
     
      style="max-width: 20rem"
      class="mb-2"
    >
      <FacebookSignin class="FacebookSignin" /><br>
      <GoogleSignin class="GoogleSignin" />
    </b-card>
  </div>


</template>

<script>
import GoogleSignin from "./GoogleSignin.vue";
import FacebookSignin from "./FacebookSignin.vue";

export default {
  name: "AllSignin",
  components: {
    GoogleSignin,
    FacebookSignin,
  },
};
</script>

<style scoped>

.FacebookSignin {
  display: inline-block;
  margin-top: 31px;
  margin-bottom: 30px;
}

.GoogleSignin {
  display: inline-block;
  border-radius: 30px;
  
}
</style>




//  title="SIGN IN"
//       img-src="https://picsum.photos/600/300/?image=25"
//       img-alt="Image"
//       img-top
//       tag="article"