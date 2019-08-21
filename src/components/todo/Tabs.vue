<template>
  <div class="helper">
    <span class="left">{{unfinishedTodo}} unfinished</span>
    <span class="tabs">
    <span v-for="state of states" :key="state"
          :class="[ filter === state ? 'activate' : 'inactivate']"
          @click="toggleFilter(state)">
    {{state}}
    </span>
    </span>
    <span class="clear" @click="clearAllCompleted">Clear Completed</span>
  </div>
</template>

<script>
  export default {
    name: 'Tab',
    props: {
      filter: {
        type: String,
        require: true
      },
      todos: {
        type: Array,
        require: true
      }
    },
    data () {
      return {
        states: ['all', 'active', 'completed']
      }
    },
    computed: {
      unfinishedTodo () {
        return this.todos.filter((todo) => todo.completed === false).length
      }

    },
    methods: {
      clearAllCompleted () {
        this.$emit('clearAllCompleted')
      },
      toggleFilter (state) {
        console.log(state)
        this.$emit('toggleFilter', state)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  //  先定位布局 后大小内容
  .helper {
    /*position: absolute*/
    /*bottom: 0*/
    display: flex
    justify-content space-between
    line-height: 4vh
    height: 4vh
    padding: 5px 0
    font-weight:100
    font-size:18px
    -webkit-font-smoothing: antialiased
    font-smoothing: antialiased
    background-color: #fff

  }
  .left, .clear, .tabs{
    padding:0 20px
    /*box-sizing border-box*/
  }
  .left, .clear{
    width 150px
  }
  .left{
    text-align left
    color: red
  }
  .clear{
    text-align right
  }

  .tabs{
    width: 200px
    display: flex
    justify-content space-around

  }
  * {
    display: inline-block
    cursor: pointer
    border 1px solid rgba(175,47,47,0)
    /*.status{
      width: 50px
    }*/
    .activate{
      background-color: red
      border-radius 5px
      font: 16;
      color white
      padding: 0 5px
    }
    .inactivate{
      background-color: white
      border-radius 5px
      font: 14;
      color black
    }
  }

</style>
