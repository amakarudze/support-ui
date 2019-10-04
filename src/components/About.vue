<template>
  <div class="about">
    <div class="jumbotron">
      <h1 class="display-4">About our Help Centre!</h1>
      <p class="lead">We have prepared this site as a way of providing a reference for challenges you may encounter while
        using our services in frequently asked questions which are divided into categories. egarding our products
        You can find help by browsing through the various sections or using our search functionality.</p>
      <hr class="my-4">
      <p>If you cannot find a solution for your problem on our Help Centre, please feel free to chat with our support team via Live Chat.</p>
      <router-link class="btn btn-primary btn-lg" to="/livechat" role="button">Live Chat</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
