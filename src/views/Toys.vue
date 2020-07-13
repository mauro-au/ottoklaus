<template>
<div>
    <app-bar/>
    <v-container class="fill-height">
        <h2 class="display-2 mt-4 mb-10">Juguetes en stock</h2>
        <v-overlay :value="overlay">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
        <v-btn class="warning mb-5" @click="displayToyForm">Agegar Juguete</v-btn>
        <v-card class="mx-auto mt-5">
            <toys-list></toys-list>
            <toy-form></toy-form>
        </v-card>
    </v-container>
    <Footer/>
</div>
</template>


<script>
import AppBar from "../components/AppBar"
import ToysList from "../components/ToysList"
import ToyForm from "../components/ToyForm"
import Footer from "../components/Footer"
import { mapActions, mapState} from 'vuex'
export default {
    components:{
        AppBar,
        ToysList,
        ToyForm,
        Footer
    },
    computed: {
        ...mapState(['overlay'])
    },
    methods: {
        ...mapActions(['displayToyForm'])
    },
}
</script>
<style>
.fill-height{
    flex-direction: column;
    margin-bottom: 150px;
}
.card{
    width: 60%;
}
.display-2{
    font-weight: bold !important;
    color: #575757;
}
h2{
    text-align: center;
}
</style>