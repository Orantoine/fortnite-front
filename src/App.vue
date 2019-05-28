<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul class="col-lg-12 list-inline"  >
      <li v-on:click="detail(name.name)" v-for="name in userList" >
        <user class="list-inline-item" v-bind:key="name.key" :user_name="name.name" ></user>
      </li>
    </ul>
    <detail class="container" v-if="detail_vue" :user_name="detail_name"></detail>

  </div>
</template>

<script>

  import Counter from './composants/Counter.vue';
  import User from './composants/User.vue';
  import Detail from './composants/Detail.vue';
export default {
  components : {Counter, User,Detail},
  name: 'app',
  data () {
    return {
      detail_vue : false,
      userList : [
        {key : 0 , name : "orantoine1"},
        {key: 1, name : "almaxime"},
        {key: 2,name : "meister_gsp"}],
      msg: 'Welcome to Your Vue.js App',
      detail_name : 'orantoine1',
    }
  },
  methods :{
    detail: function(pseudo){
      console.log("tu as cliqué");
      this.detail_name = pseudo
      this.detail_vue = !this.detail_vue;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

  @import "~bootstrap/dist/css/bootstrap.css";
</style>
