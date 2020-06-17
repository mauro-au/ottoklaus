<template>
<div>
    <app-bar></app-bar>
    <v-container>
        <v-overlay :value="overlay">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
        <v-btn @click="displayToyForm">New Toy</v-btn>
        <v-card class="mx-auto mt-5">
            <toys-list></toys-list>
            <toy-form></toy-form>
        </v-card>
    </v-container>
</div>  
</template>


<script>
import AppBar from "../components/AppBar"
import ToysList from "../components/ToysList"
import ToyForm from "../components/ToyForm"
import { mapActions, mapState} from 'vuex'
export default {
    components:{
        AppBar,
        ToysList,
        ToyForm
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

</style>