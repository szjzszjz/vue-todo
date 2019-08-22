<template>
  <div class="todo">
     <div class="add-item">
      <input
        type="text"
        autofocus="autofocus"
        class="add-input"
        placeholder="will todo ..."
        @keyup.enter="addTodo"
      >
    </div>

    <div class="content-wrapper">
      <div class="content" v-show="!showTip">
        <item :todo="todo"
              v-for="todo of futodos"
              :key="todo.id"
              @deleteTodo="deleteTodo"/>
      </div>
      <div class="tip" v-show="showTip">
        {{this.tip}}
      </div>
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
    data() {
      return {
        todo: {
          id: 0,
          content: 'this is todo',
          completed: false
        },
        todos: [],
        filter: 'all',
        tip: 'Life cannot be blank'
      }
    },
    computed: {
      // 只要todos有任何变化都会重新计算items 所有利用计算属性对数据进行筛选
      futodos() {
        if (this.filter === 'all') {
          return this.todos
        }
        let completed = this.filter === 'completed'
        return this.todos.filter(todo => todo.completed === completed)
      },
      showTip() {
        return this.todos.length === 0
      }
    },
    methods: {
      addTodo(data) {
        console.log(data.target.value.trim())
        // unshift: 将元素插入到数组的首位
        if (data.target.value.trim() === '') {
          alert('please enter something ...')
        } else {
          this.todos.unshift({
            id: id++,
            content: data.target.value.trim(),
            completed: false
          })
          data.target.value = ''
          console.log(this.todos)
        }
      },
      deleteTodo(id) {
        console.log('delete: ' + id)
        this.todos.splice(this.todos.findIndex((todo) => todo.id === id), 1)
      },
      toggleFilter(state) {
        this.filter = state
      },
      clearAllCompleted() {
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
  .todo {
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    box-sizing: border-box
    position: relative
    height: 65vh
    /*background-color: yellowgreen*/
  }

  .add-item {
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
      line-height: 6vh
      height 6vh
      max-height: 60px
      min-height: 40px
      top: 0
      left 0
      width: 100%
      color #8c591a
      padding: 0.7vw 1vw
      border-radius $todo-border-radius
      box-shadow 4px 4px 5px #888888
      margin: -3vh auto 0
    }
  }

  .content-wrapper {
    position: relative
    overflow hidden
    left: 15%
    width: $todo-width
    background-color: rgba(0, 0, 0, 0.3)

  }

  .tip {
    position: relative
    height: 48vh
    width: 100%
    line-height: 48vh
    text-align center
    font-size: 5vw
    font-weight bold
    color: #ffffff
  }

  .content {
    position: relative
    height: 53vh
    width: 100%
    overflow-y scroll
    /*overflow-x hidden*/
    /*max-height: 47vh*/
  }

  .control {
    /*position: absolute*/
    /*left: 15%*/
    /*bottom 0*/
    margin: 1vh 0 0 15%
    width $todo-width
    background-color: red
  }

</style>
