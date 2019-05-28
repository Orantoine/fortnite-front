<template>
<div id="detail">
  <p> Détail de : {{user_pseudo}}</p>
</div>
</template>


<script>
  export default {
    props: ['user_name'],
    data() {
      return {
        message: "test",
        user_data: [],
        user_pseudo: this.user_name
      }
    }
  }

</script>


<style src="../styles/detail.css">

</style>
