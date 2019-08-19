<template>
  <div id="app">
    <div id="cover">
      <todo-header></todo-header>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
  import TodoHeader from '@/components/todo/Header'
  import TodoFooter from '@/components/todo/Footer'
  export default {
    name: 'App',
    components: {
      TodoHeader, // 不能用header 避免和原生的冲突
      TodoFooter
    }
  }
</script>

<style lang="stylus" scoped>
  #app {
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
  }

  #cover {
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    background-color: #999
    opacity: 0.2
  }
</style>
