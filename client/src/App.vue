<template>
  <div id="app">
    <nav class="navbar is-light">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <h1 class="title">Jepret Gram</h1>
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" >
            <router-link to="/">Home</router-link>
          </a>
          <a class="navbar-item" href="https://bulma.io/">
             <router-link to="/login">Login</router-link>
          </a>
        </div>
      </div>
    </nav>
    <section class="hero is-medium is-light is-bold">
      <div class="hero-body">
        <div class="container">
          <router-view/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
