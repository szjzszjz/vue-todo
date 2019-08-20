<template>
  <div id="header">
    <h1 class="title">TODO</h1>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  #header {
    position: relative
    .title {
      text-align center
      font-size: 9vw
      font-max-size 50px
      margin: -15vh 0 0 0
      color: #ffffff
      text-shadow 4px 4px 8px #000
    }
  }

</style>
