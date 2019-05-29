<template>
<div id="detail">
  <h1 class="title"> Détail de : {{user_pseudo}}</h1>
  <ol class="list-group">
    <li class="list-group-item" v-bind:class="classLine(day)" v-for="day in user_data"><day  v-bind:key="day.id" :user_day="day"></day></li>
  </ol>
</div>
</template>


<script>

  import Match from "./Match.vue";
  import Day from "./Day.vue";

  export default {
    components : {Match, Day},
    props: ['user_name'],
    data() {
      return {
        message: "test",
        user_data: [],
        user_pseudo: this.user_name,
        user_matchs: []
      }
    },
    mounted() {
      console.log("http://www.scol-ea.ovh/generation/infoplayer/" + this.user_pseudo);
      this.$http.get("http://www.scol-ea.ovh/generation/infoplayer/" + this.user_pseudo).then((response) => {
        this.user_data = response.body;
        this.user_matchs = this.user_data.playerMatchs;
      }, (response) => {
        console.log('erreur',response)
      } )
    },
    methods : {
      classLine: function (matchs) {
        return  {
          "list-group-item-success": matchs.wins > 0
        }
      }
    }
  }

</script>


<style src="../styles/detail.css">

</style>
