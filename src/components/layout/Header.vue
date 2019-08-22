<template>
  <div id="header">
    <h1 class="title" @click="notify">TODO</h1>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      notify() {
        this.$notify({
          content: 'content test',
          btn: 'close',
          bgc: '#303030',
          autoCloseTime: 6000
        })
      }
    }
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
