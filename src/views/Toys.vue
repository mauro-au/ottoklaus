<template>
<div>
    <app-bar></app-bar>
    <v-container>
        <v-card width=1000px class="mx-auto mt-5">
            <v-btn @click="displayToyForm">New Toy</v-btn>
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