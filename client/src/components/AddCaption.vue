<template>
  <div>
    <form @submit.prevent="saveCaption">
      <label class="label">Caption</label>
        <p class="control">
          <input class="input" v-model="formCaption.caption" type="text" placeholder="Text input">
        </p>
        <div class="file">
          <label class="file-label">
            <input class="file-input" name="image" id="file" type="file" @change="onFileChange">
            <span class="file-cta">
              <span class="file-icon">
                <i class="fa fa-upload"></i>
              </span>
              <span class="file-label">
                Choose a file…
              </span>
            </span>
          </label>
        </div>
        <p class="control">
          <button class="button is-primary">Submit</button>
          <button class="button is-link">Cancel</button>
        </p>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddCaption',
  data () {
    return {
      formCaption: {
        caption: '',
        image: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'postCaption'
    ]),
    onFileChange (e) {
      // alert(JSON.stringify(e))
      console.log(e.target.files)
      var files = e.target.files || e.dataTransfer.files

      if (!files.length) {
        return
      }
      this.formCaption.image = files[0]
    },
    saveCaption () {
      let user_id = localStorage.getItem('user_id')
      let data = new FormData()
      data.append('caption', this.formCaption.caption)
      data.append('image', this.formCaption.image)
      data.append('user_id', user_id)
      this.postCaption(data)
    }
  }
}
</script>

<style>

</style>
