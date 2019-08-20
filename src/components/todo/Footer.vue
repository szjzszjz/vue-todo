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
    position: absolute
    bottom: -4vh
    width 100%
    text-align center
    color:white;
    text-shadow:2px 2px 4px #000000;
  }

</style>
