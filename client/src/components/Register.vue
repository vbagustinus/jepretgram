<template>
  <div>
    <form @submit.prevent="addRegister(daftar)">
      <label class="label">Name</label>
        <p class="control has-icon has-icon-right">
          <input class="input is-success" type="text" v-model="daftar.name" placeholder="Text input" value="bulma">
          <i class="fa fa-check"></i>
        </p>
        <label class="label">Username</label>
        <p class="control has-icon has-icon-right">
          <input class="input is-success" type="text" v-model="daftar.username" placeholder="Text input" value="bulma">
          <i class="fa fa-check"></i>
        </p>
        <label class="label">Pasword</label>
        <p class="control has-icon has-icon-right">
          <input class="input is-success" type="password" v-model="daftar.password" placeholder="Text input" value="bulma">
          <i class="fa fa-check"></i>
        </p>
        <p class="control">
          <button class="button is-primary">Submit</button>
          <a class="button is-link">Cancel</a>
        </p>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      daftar: {
        name: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'addRegister'
    ])
  }
}
</script>

<style>

</style>
