<template>
  <div :class="['todo-item', todo.completed ? 'completed':'']">
    <input type="checkbox" class="toggle" v-model="todo.completed">
    <label>{{todo.content}}</label>
    <button class="destroy" @click="deleteTodo"></button>
  </div>
</template>

<script>
  export default {
    name: 'Items',
    props: {
      todo: {
        type: Object,
        require: true
      }
    },
    methods: {
      deleteTodo () {
        console.log('deletetodo')
        this.$emit('deleteTodo', this.todo.id)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .todo-item {
    position relative
    width 100%
    margin:0 auto
    border-radius $todo-border-radius
    background-color #ffffff
    font-size $todo-font-size
    border-bottom 1px solid rgba(0, 0, 0, 0.6)

    // 鼠标悬停在todo-item上之后显示button上的内容
    &:hover {
      .destroy:before {
        content: '×'
      }
    }

    label {
      white-space: pre-line; //合并空白符序列，但是保留换行符。
      word-break: break-all; //在恰当的断字点进行换行：
      padding: 10px 60px 10px 15px;
      margin-left: 45px;
      display: block;
      line-height: 1.2;
      transition: color 0.4s;
    }

    &.completed {
      label {
        color: #d9d9d9;
        text-decoration line-through
      }
    }
  }

  .toggle {
    position: absolute;
    top: 0;
    left: 0
    bottom: 0
    margin: auto 0;
    text-align: center;
    width: 40px;
    height: 40px;
    line-height: 100%
    appearance: none;
    outline none
    //之后添加内容
    &:after {
     content url('~assets/images/round.svg')
    }

    //点击之后 （选自之后显示）
    &:checked:after {
      content: url('~assets/images/done.svg')
    }
  }

  .destroy {
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    /*transition: color 2s ease-out;*/
    background-color transparent // 背景透明
    /*appearance none*/
    border-width 0
    cursor pointer
    outline none
  }

</style>
