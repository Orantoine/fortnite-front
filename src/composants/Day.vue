<template>
  <div class="day">
    <ol class="col-lg-12" @click="vue_match">
      <li>Day Id : {{user_day.id}}</li>
      <li>Nombres de matchs : {{user_day.matchs}}</li>
      <li>Kills: {{user_day.kills}}</li>
      <li>Ratio: {{user_day.ratio}}</li>
      <li>Date : {{user_day.day}}</li>
      <match v-if="see_match" :list_match="user_day.listMatchs" ></match>
    </ol>

  </div>
</template>

<script>

  import Match from './Match.vue'
  export default {
    components : {Match},
    props: ['user_day'],
    data() {
      return {
        message: "test",
        see_match: false,
        user_matchs: []
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
