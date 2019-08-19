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
  .outer{
    position:relative;
    height: 100%;
    width: 100%;
    z-index:1;
    background: hsl(20,40%,90%) fixed;
    background-image: url('./assets/images/bg1.png')
    background-size: cover
    background-repeat no-repeat
    background-position: center;
  }
  .inner:before{
    content:'';
    position:absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    filter:blur(7px); // 毛玻璃效果
    background: hsl(20,40%,90%) fixed;
    background-image: url('./assets/images/bg1.png')
    background-size: cover
    background-repeat no-repeat
    background-position: center
    z-index:0;
  }
  .inner{
    position:absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    font:  20px/1.5 '宋体';
    height: 80%;
    width: 80%;
    margin:auto;
    background:hsla(0,0%,0%,.3); // 色度  饱和度  亮度  透明
  }
</style>
