<template>
  <div>
    <div class="real-app">
      <input
        type="text"
        autofocus="autofocus"
        class="add-input"
        placeholder="will todo ..."
        @keyup.enter="addTodo"
      >
    </div>
    <div class="content">
      <item :todo="todo"
            v-for="todo of futodos"
            :key="todo.id"
            @deleteTodo="deleteTodo"/>
    </div>
    <div class="control">
      <tabs :todos="todos"
            :filter="filter"
            @toggleFilter="toggleFilter"
            @clearAllCompleted="clearAllCompleted"/>
    </div>
  </div>
</template>

<script>
  import Item from './Items'
  import Tabs from './Tabs'

  let id = 0
  export default {
    name: 'Todo',
    data () {
      return {
        todo: {
          id: 0,
          content: 'this is todo',
          completed: false
        },
        todos: [],
        filter: 'all'
      }
    },
    computed: {
      // 只要todos有任何变化都会重新计算items 所有利用计算属性对数据进行筛选
      futodos () {
        if (this.filter === 'all') {
          return this.todos
        }
        let completed = this.filter === 'completed'
        return this.todos.filter(todo => todo.completed === completed)
      }
    },
    methods: {
      addTodo (data) {
        console.log('addtodo')
        // unshift: 将元素插入到数组的首位
        this.todos.unshift({
          id: id++,
          content: data.target.value.trim(),
          completed: false
        })
        data.target.value = ''
      },
      deleteTodo (id) {
        console.log('delete')
        this.todos.splice(this.todos.indexOf((todo) => todo.id === id), 1)
      },
      toggleFilter (state) {
        // if (state === 'all') {
        //     this.futodos = this.todos
        // } else if (state === 'active') {
        //   this.futodos = this.todos.filter((todo) => !todo.completed)
        // } else {
        //   this.futodos = this.todos.filter((todo) => todo.completed)
        // }
        this.filter = state
      },
      clearAllCompleted () {
        this.todos = this.todos.filter(todo => !todo.completed)
      }
    },
    components: {
      Item,
      Tabs
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .real-app {
    position: relative

    width $todo-width
    margin: 0 auto
    /*box-shadow 4px 4px 5px #888888*/
    /*background-color: red*/
    border-radius $todo-border-radius
    padding: 0.7vw 2vw
    border: none

    .add-input {
      outline none // 去掉自带的蓝色边框
      box-sizing border-box
      font-size $todo-font-size
      line-height: 5vw
      height 5vw
      max-height: 60px
      top: 0
      left 0
      width: 100%
      color #8c591a
      padding: 0.7vw 1vw
      border-radius $todo-border-radius
      box-shadow 4px 4px 5px #888888
      margin: 0 auto
    }
  }

  .content {
    /*position: relative;
    z-index 3*/
    background-color: black
  }

  .control {
    position: relative;
    z-index 3
    width $todo-width
    margin 0 auto
    background-color: red
  }

</style>
