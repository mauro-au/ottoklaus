<template>
  <div>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="code">Code</th>
          <th class="nombre">Nombre</th>
          <th class="precio">Precio</th>
          <th class="stock">Stock</th>
          <th class="buttonss"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="toy in toys" :key="toy.id">
          <td>{{ toy.data.code }}</td>
          <td>{{ toy.data.name }}</td>
          <td>{{ toy.data.price }}</td>
          <td>{{ toy.data.stock }}</td>
          <td class="button">
            <v-btn color="error rounded-pill" class="btn mx-2" @click="removeToy(toy.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>

            <v-btn color="success rounded-pill" class="btn mx-2" @click="editToy(toy.id)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
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
        ...mapActions(['setToys', 'deleteToy', 'setCurrentToy', 'displayToyForm']),
        removeToy(id){
          let confirmation = confirm('Estas seguro de boorar  el producto?')
          if (confirmation) {
            this.deleteToy(id)
          }
        },
        editToy(id){
          //establecer jugete actual, en basea al id entregado
          this.setCurrentToy(id)
          //desplegar el formulario con el juguete actual
          this.displayToyForm()
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
.button{
  display: flex;
  justify-content: center;
  align-items: center;
}
.buttonss{
  width:154px;
}
.nombre{
  width: 30%;
}
.code, .precio{
  width: 115px;
}
.stock{
  width: 75px;
}
.btn{
  height: 45px !important;
  min-width: 45px !important;
  padding: 0 !important;
}
td{
  height: 65px !important;
}
th{
  font-size: 1rem !important;
  background: rgb(231, 231, 231);
}
</style>