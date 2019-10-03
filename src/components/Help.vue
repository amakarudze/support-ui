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
    <div class="row">
       <div class="col-4">
         <h2>Browse by Categories</h2>
         <ul>
           <li v-for="category in categories" :key="category.id">
             {{ category }}
           </li>
         </ul>
       </div>
       <div class="col-8">
         <h2>Frequently Asked Questions</h2>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'help',
  data () {
    return {
      categories: null,
      errored: false
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:8000/faqs/categories/')
      .then(response => {
        this.categories = response.queryset
        console.log(this.categories)
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
  }
}
</script>

<style scoped>

</style>
