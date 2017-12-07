import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'


const http = axios.create(({
  baseURL: 'http://localhost:3000'
}))

Vue.use(Vuex)

const state = {

}

const mutations = {

}

const actions = {
  checkLogin({commit}, login) {
    http.get('/login', login)
    .then(({token}) => {
      console.log(token)
    })
    .catch(err => {
      console.log(err)
    })
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store