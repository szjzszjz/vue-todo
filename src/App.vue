<template>
  <div class="outer">
    <div class="inner">
      <todo-header></todo-header>
      <todo-todo></todo-todo>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
  import TodoHeader from '@/components/todo/Header'
  import TodoFooter from '@/components/todo/Footer'
  import TodoTodo from '@/components/todo/Todo'

  export default {
    name: 'App',
    components: {
      TodoHeader, // 不能用header 避免和原生的冲突
      TodoFooter,
      TodoTodo
    }
  }
</script>

<style lang="stylus" scoped>
  @import "blur.styl"
</style>
