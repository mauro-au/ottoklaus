import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

function emptyToy() {
  return {
    id: null,
    data: {
      name: '',
      code: '',
      price: 0,
      stock: 0
    }
  }
}
export default new Vuex.Store({
  state: {
    toys: [],
    showForm: false,
    overlay: false,
    currentToy: emptyToy()
  },
  mutations: {
    SET_EMPTY_TOY(state) {
      const empty = emptyToy();
      state.currentToy.id = null
      Object.keys(empty.data).forEach(key => {
        state.currentToy.data[key] = empty.data[key]
      })
    },
    SET_TOYS(state, data){state.toys = data},
    DISPLAY_TOY_FORM(state) { state.showForm = true },
    HIDE_TOY_FORM(state) { state.showForm = false },
    UPDATE_CODE(state, code) { state.currentToy.data.code = code },
    UPDATE_NAME(state, name) { state.currentToy.data.name = name },
    UPDATE_PRICE(state, price) { state.currentToy.data.price = price },
    UPDATE_STOCK(state, stock) { state.currentToy.data.stock = stock },
    SET_CURRENT_TOY(state, toy) { state.currentToy = toy },
    DISPLAY_OVERLAY(state) { state.overlay = true },
    HIDE_OVERLAY(state) { state.overlay = false },
  },
  actions: {
    setToys({ commit }){
      commit('DISPLAY_OVERLAY')
      axios.get('https://us-central1-ottoklaus-a2f64.cloudfunctions.net/toys/toys')
      .then(response =>{
        commit('SET_EMPTY_TOY')
        commit('SET_TOYS', response.data)
      })
      .finally(()=>{
        commit('HIDE_OVERLAY')
      })
    },
    displayToyForm({ commit }) {commit('DISPLAY_TOY_FORM')},
    cancelForm({ commit }) {
      commit('HIDE_TOY_FORM')
      commit('SET_EMPTY_TOY')
    },
    hideToyForm({ commit }) {commit('HIDE_TOY_FORM')},

    updateCode({ commit },code) { commit('UPDATE_CODE', code)},
    updateName({ commit },name) { commit('UPDATE_NAME', name)},
    updatePrice({ commit },price) { commit('UPDATE_PRICE', price)},
    updateStock({ commit },stock) { commit('UPDATE_STOCK', stock)},

    postToy({ dispatch, state }){
      axios.post('https://us-central1-ottoklaus-a2f64.cloudfunctions.net/toys/toy', 
      state.currentToy.data)
      .then(() =>{
        dispatch('setToys')
      })
    },
    deleteToy({ dispatch }, id){
      axios.delete(`https://us-central1-ottoklaus-a2f64.cloudfunctions.net/toys/toy/${id}`)
      .then(()=>{
        dispatch('setToys')
      })
    },
    setCurrentToy({ commit }, id){
      commit('DISPLAY_OVERLAY')
      axios.get(`https://us-central1-ottoklaus-a2f64.cloudfunctions.net/toys/toy/${id}`)
      .then((response)=>{
        commit('SET_CURRENT_TOY', response.data)
      })
        .finally(() => {
          commit('HIDE_OVERLAY')
        })
    },
    updateToy({state, dispatch}, id){
      axios.put(`https://us-central1-ottoklaus-a2f64.cloudfunctions.net/toys/toy/${id}`, state.currentToy.data)
      .then(()=>{
        dispatch('setToys')
      })
    }
  },
  modules: {
  }
})
