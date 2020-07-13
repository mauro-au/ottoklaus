<template>
  <v-app class="login">
    <v-snackbar elevation="0" top color="error darken-1" v-model="alert" timeout="3000">
      <v-icon dark right class="mr-5">mdi-alert</v-icon>Los datos no son correctos
    </v-snackbar>

    <v-card width="400" class="mx-auto my-auto">
      <v-card-title class="pb-0">
        <div class="d-flex align-center mx-auto my-5">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="/toy.svg"
            transition="scale-transition"
            width="40"
          />
          <h2>OTTO KLAUS</h2>
        </div>
      </v-card-title>

      <v-card-text>
        <v-form>
          <v-text-field label="usuario" prepend-icon="mdi-account-circle"
          v-model="user"
          />
          <v-text-field
            label="contraseña"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            v-model="password"
          />
        </v-form>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="info" @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
import Firebase from 'firebase'
export default {
  data: () => ({
    user: '',
    password: '',
    showPassword: false,
    alert:false
  }),
  methods: {
    login(){
      Firebase.auth().signInWithEmailAndPassword(this.user, this.password)
      .then(() =>{
        this.$router.push('/toys')
        alert(`Bienvenido ${this.user}`)
      })
      .catch(()=>{
        this.alert = true
      })
    }
  },
};
</script>

<style>
.login{
  background: url('/img/login.jpg') no-repeat center !important;
  background-size:cover  !important;
}
</style>
