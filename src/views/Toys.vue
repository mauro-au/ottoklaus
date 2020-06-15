<template>
<div>
    <app-bar></app-bar>
    <v-container>
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
import { mapActions } from 'vuex'
export default {
    components:{
        AppBar,
        ToysList,
        ToyForm
    },
    methods: {
        ...mapActions(['displayToyForm'])
    },
}
</script>
<style>

</style>