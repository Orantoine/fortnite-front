<template>
  <div class="main_user">
    <h1>{{user_pseudo}}</h1>
    <ol class="list-group list-group-flush">
      <li class="list-group-item list-background">Nombres de matchs : {{user_data.matchs}}</li>
      <li class="list-group-item list-background">Victoire Royale : {{user_data.wins}}</li>
      <li class="list-group-item list-background">Ratio : {{user_data.ratio}}</li>
    </ol>
  </div>
</template>

<script>
  export default {
    props : ['user_name'],
    data (){
      return  {
        message : "test",
        wins : 1,
        ratio : 4,
        user_data : [],
        user_pseudo : this.user_name
      }
    },
    mounted() {
      console.log("http://www.scol-ea.ovh/generation/infoplayer/" + this.user_pseudo);
      this.$http.get("http://www.scol-ea.ovh/generation/infoplayer/" + this.user_pseudo).then((response) => {
          this.user_data = response.body;
      }, (response) => {
          console.log('erreur',response)
      } )
    }
  }

</script>

<style src="../styles/user.css">

</style>
