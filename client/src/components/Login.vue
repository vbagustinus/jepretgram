<template>
  <div>
    <form @submit.prevent="checkLogin(masuk)">
        <label class="label">Username</label>
        <p class="control has-icon has-icon-right">
          <input class="input is-success" type="text" v-model="masuk.username" placeholder="Text input" value="bulma">
          <i class="fa fa-check"></i>
        </p>
        <label class="label">Pasword</label>
        <p class="control has-icon has-icon-right">
          <input class="input is-success" type="password" v-model="masuk.password" placeholder="Text input" value="bulma">
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
      masuk: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'checkLogin'
    ])
  }
}
</script>

<style>

</style>
