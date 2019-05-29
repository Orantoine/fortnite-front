<template>
  <div id="app">
    <h1>Fortnite Statistiques</h1>
    <ul class="col-lg-12 list-inline"  >
      <li v-on:click="detail(name.name)" v-for="name in userList" >
        <user class="list-inline-item" v-bind:key="name.key" :user_name="name.name" ></user>
      </li>
    </ul>
    <detail class="col-lg-11 container" v-if="detail_vue" :user_name="detail_name"></detail>
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

<style src="./styles/app.css">

</style>
