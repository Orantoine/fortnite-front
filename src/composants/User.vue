<template>
  <div class="main_user">
    <h1 class="pseudo">{{user_pseudo}}</h1>
    <ol class="list-group list-group-flush">
      <li class="list-group-item list-background"><h5>Nombres de matchs : {{matchs}}</h5></li>
      <li class="list-group-item list-background"><h5>Victoire Royale : {{wins}}</h5></li>
      <li class="list-group-item list-background"><h5>Ratio : {{ratio}}</h5></li>
    </ol>
  </div>
</template>

<script>
  export default {
    props : ['user_name'],
    data (){
      return  {
        message : "test",
        wins : 0,
        ratio : 0,
        matchs : 0,
        user_data : [],
        user_pseudo : this.user_name
      }
    },
    mounted() {
      console.log("http://www.scol-ea.ovh/generation/infoplayer/" + this.user_pseudo);
      this.$http.get("http://www.scol-ea.ovh/generation/infoplayer/" + this.user_pseudo).then((response) => {
          this.user_data = response.body;
          this.bilan();
      }, (response) => {
          console.log('erreur',response)
      } )
    },
    methods : {
      bilan(){
         let wins =0;
         let ratio = 0;
         let matchs =0;
         let kills = 0;
        this.user_data.forEach(function(element){
          wins += element.wins;
          kills += element.kills;
          matchs += element.matchs;
        });
        ratio = kills/matchs;
        console.log('match : '+matchs);
        console.log('ratio :' + ratio);
        console.log('kills : '+ kills);
        this.ratio = ratio;
        this.wins = wins;
        this.matchs = matchs;
      }
    }
  }

</script>

<style src="../styles/user.css">

</style>
