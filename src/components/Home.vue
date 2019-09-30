<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-4">Welcome to our Support site!</h1>
      <p class="lead">If you have been experiencing any problems using our website, please visit our Help Centre page
        or use the search functionality to find answers from our website.</p>
      <hr class="my-4">
      <p>If you cannot find an answer on our Help Centre, please feel free to chat with our support team via Live Chat.</p>
      <router-link class="btn btn-primary btn-lg" to="/livechat" role="button">Live Chat</router-link>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="card" style="width: 30rem;">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card" style="width: 30rem;">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card" style="width: 30rem;">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
