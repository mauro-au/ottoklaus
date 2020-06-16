<template>
  <div>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Code</th>
          <th class="text-left">Nombre</th>
          <th class="text-left">Precio</th>
          <th class="text-left">Stock</th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="toy in toys" :key="toy.id">
          <td>{{ toy.data.code }}</td>
          <td>{{ toy.data.name }}</td>
          <td>{{ toy.data.price }}</td>
          <td>{{ toy.data.stock }}</td>
          <td>
            <v-btn color="primary" @click="removeToy(toy.id)">
              <v-icon>mdi-delete</v-icon>Delete</v-btn>

            <v-btn color="primary" @click="editToy(id)">
              <v-icon>mdi-pencil</v-icon>Edit</v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions(['setToys', 'deleteToy']),
        removeToy(id){
          let confirmation = confirm('Estas seguro de boorar  el producto?')
          if (confirmation) {
            this.deleteToy(id)            
          }
        }
    },
    computed: {
        ...mapState(['toys'])
    },
    created() {
        this.setToys()
    },
};
</script>

<style>
</style>