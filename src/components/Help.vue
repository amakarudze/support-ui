<template>
  <div class="help">
    <div class="jumbotron">
      <h1 class="display-4">Welcome to our Help Centre!</h1>
      <p class="lead">We have prepared a list of the most frequently asked questions regarding our products and services.
      You can find help by browsing through the various sections or using our search functionality.</p>
      <hr class="my-4">
      <p>If you cannot find a solution for your problem here, please feel free to chat with our support team via Live Chat.</p>
      <router-link class="btn btn-primary btn-lg" to="/livechat" role="button">Live Chat</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'help'
}
</script>

<style scoped>

</style>
