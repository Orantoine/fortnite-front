<template>
<div id="detail">
  <h2> Détail de : {{user_pseudo}}</h2>
  <ol class="list-group">
    <li class="list-group-item" v-bind:class="classLine(matchs)" v-for="matchs in user_matchs"><match  v-bind:key="matchs.id" :user_match="matchs"></match></li>
  </ol>
</div>
</template>


<script>

  import Match from "./Match.vue";

  export default {
    components : {Match},
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
          "list-group-item-success": matchs.top1 > 0
        }
      }
    }
  }

</script>


<style src="../styles/detail.css">

</style>
