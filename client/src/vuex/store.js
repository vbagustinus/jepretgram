import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

const http = axios.create(({
  // baseURL: 'http://localhost:3000'
  baseURL: 'http://35.196.106.22'
}))

Vue.use(Vuex)

const state = {
  token: false,
  captions: []
}

const mutations = {
  setLogin (state, token) {
    console.log(token)
    state.token = token
  },
  setCaptions (state, captions) {
    state.captions = captions
  },
  newCaption (state, newCap) {
    state.captions.unshift(newCap)
  }
}

const actions = {
  registerUser ({ commit }, newUser) {
    http.post('/register', newUser)
    .then()
    .catch(err => {
      console.log(err)
    })
  },
  checkLogin ({ commit }, login) {
    http.post('/login', login)
    .then(({data}) => {
      console.log(data)
      if (data.token) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user_id', data.user_id)
        commit('setLogin', data.token)
        router.push('/')
      } else {
        alert(data.msg)
      }
    })
    .catch(err => {
      console.log(err)
    })
  },
  postCaption ({ commit }, newCaption) {
    http.post('/', newCaption)
    .then(({data}) => {
      console.log(data.data)
      alert(data.msg)
      commit('newCaption', data.data)
      router.push('/')
    })
    .catch(err => {
      console.log(err)
    })
  },
  getAllCaption ({ commit }) {
    http.get('/')
    .then(({data}) => {
      console.log(data)
      commit('setCaptions', data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  addRegister ({ commit }, newUser) {
    http.post('/register', newUser)
    .then(({data}) => {
      alert(data.msg)
      router.push('/login')
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