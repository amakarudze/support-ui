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
         <ul class="nav flex-column">
           <li class="nav-item" v-for="category in categories" :key="category.id">
             <router-link :to="{ path: '/category/'+ category.id + '/' }" v-on:click="goToCategoryDetail(category.id)"
                          class="nav-link" append>{{ category.name }}</router-link>
           </li>
         </ul>
       </div>
       <div class="col-8">
         <h2>Frequently Asked Questions</h2>
         <ul class="nav flex-column">
           <li class="nav-item" v-for="question in questions" :key="question.id">
              <router-link :to="{ path: '/question/'+ question.id + '/' }" v-on:click="goToQuestionDetail(question.id)"
                           class="nav-link" append>{{ question.question }}</router-link>
           </li>
        </ul>
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
      questions: null,
      errored: false
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:8000/faqs/categories/')
      .then(response => {
        this.categories = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
    axios
      .get('http://127.0.0.1:8000/faqs/questions/')
      .then(response => {
        this.questions = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
  },
  methods: {
    goToCategoryDetail (categoryId) {
      this.$router.push({name: 'category', params: {catId: categoryId}})
    },
    goToQuestionDetail (questionId) {
      this.$router.push({name: 'question', params: {qnId: questionId}})
    }
  }
}
</script>

<style scoped>

</style>
