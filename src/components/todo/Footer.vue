<template>
  <div id="footer">
    <span>@copyright by {{this.author}}</span>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
        author: 'szjz'
      }
    }

  }
</script>

<style lang="stylus" scoped>
  #footer{
    color: white
    text-align center
    margin-top:200px

  }

</style>
