<template>
  <div>
    <div class="box"  v-for="caption in captions" :key="caption._id">
      <article class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img :src="caption.url" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{caption.caption}}</strong> 
              <br/><small>@{{caption.user.name}}</small>
            </p>
          </div>
          </nav>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Caption',
  computed: {
    ...mapState([
      'captions'
    ])
  },
  methods: {
    ...mapActions([
      'getAllCaption'
    ])
  },
  created () {
    this.getAllCaption()
  }
}
</script>

<style>

</style>
