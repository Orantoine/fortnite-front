<template>
  <div class="matchs">
    <ol class="list-group">
      <li class="list-group-item" v-for="match in list_match">
        <ul>
          <li>Match id :{{match.id}}</li>
          <li>Kills : {{match.kills}}</li>
          <li>Nombre de matchs : {{match.matches}}</li>
          <li>Mode de jeu : {{match.playlist}}</li>
          <li> Ratio : {{match.ratio}}</li>
          <li v-show="match.top1 > 0"><img src="../assets/victoire.png"></li>
        </ul>
      </li>
    </ol>
  </div>

</template>

<script>
  export default {
    props: ['list_match'],
    data() {
      return {
        message: "test",
        listes_match : this.list_match
      }
    },
    methods : {
      vue_match(){
        this.see_match = !this.see_match;
      }
    }
  }
</script>


<style>

</style>
