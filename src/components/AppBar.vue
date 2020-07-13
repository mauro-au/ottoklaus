
<template>
    <v-app-bar
      color="blue-grey darken-3"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Otto Klaus"
          class="shrink mr-2"
          contain
          src="/img/toy.svg"
          transition="scale-transition"
          width="40"
        />

        <h2 class="title__logo">OTTO KLAUS</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn text @click="logout">
        <span class="mr-2">Cerrar Sesion</span>
        <v-icon>mdi-lock</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
import Firebase from 'firebase'
export default {
  methods: {
    logout(){
      Firebase.auth().signOut().then(() =>{
        this.$router.push('/login')
      })
    }
  },
};
</script>
<style scoped>
.title__logo{
  margin-left: 10px !important;
}
@media (max-width: 512px) {
  .title__logo{
    font-size: 1rem !important;
  }
}
</style>