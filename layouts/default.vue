<template>
  <v-app>
    <v-main class="bg">
      <v-container style="margin: 0px auto;padding: 0px">
        <nuxt />
      </v-container>
    </v-main>

    <!--<v-footer
      class="justify-center"
      color="#292929"
      height="60"
      :absolute="!fixed"
      app
    >
      <div
        class="title font-weight-light grey--text text--lighten-1 text-center"
      >
        &copy; {{ new Date().getFullYear() }} Made with 💜 by ธรรมล้านดวง
        <i
          class="fab fa-facebook-square"
        ><a href="https://web.facebook.com/dhamma1000000" /></i>
      </div>
    </v-footer>
    -->
  </v-app>
</template>

<script>
export default {
  data () {
    return {

      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        }
      ],
      title: 'จองประทีปออนไลน์'
    }
  }
}
</script>

<style scoped>
.bg {
  overflow-x:hidden;
  background-color: #c2c2c2; /* The image used */
  width: 100%;
  background-attachment: fixed ;
  height: auto; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
</style>
