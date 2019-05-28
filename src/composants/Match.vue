<template>
  <div class="matchs">
    <ol class="col-lg-12">
      <li>Match id : {{user_match.id}}</li>
      <li>Nombres de matchs : {{user_match.matches}}</li>
      <li>Kills: {{user_match.kills}}</li>
      <li>Ratio: {{user_match.ratio}}</li>
      <li>Mode : {{user_match.playlist}}</li>
      <li>Date : {{user_match.dateCollected}}</li>
      <li></li>
    </ol>
  </div>
</template>

<script>
  export default {
    props: ['user_match'],
    data() {
      return {
        message: "test",
        user_matchs: []
      }
    }
  }
</script>


<style>

</style>
