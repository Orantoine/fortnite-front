<template>
  <div class="counter">
    {{ count }}
    <div class="button" @click="increments">clique-ici</div>
  </div>

</template>

<script>

  export default {
  data (){
    return {
      count: 0
    }
  },
    methods :{
      increments (){
        this.count++
      }
    }
  }
</script>

<style src="../styles/Counter.css"></style>
