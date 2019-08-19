<template>
  <section class="real-app">
    <input
      type="text"
      autofocus="autofocus"
      class="add"
      placeholder="接下来要做什么？"
      @keyup.enter="todoEvent"
    >
  </section>
</template>

<script>
  export default {
    name: 'Todo',
    methods: {
      todoEvent () {
        console.log('todo')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .real-app{
    position: relative
    width 600px
    margin: 0 auto
    box-shadow 0 0 5px red
    background-color: white
    .add{
      font-size 24px
      line-height: 30px
      top: 0
      left 0
      width: 100%
      padding:10px

    }
  }

</style>
