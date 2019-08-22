<template>
  <transition name="fade" @after-leave="afterLeave" @after-enter="afterEnter">
    <div class="notification-bar"
    :style="style" v-show="visible">
      <span class="content">{{content}}</span>
      <img src="./delete.png" class="close" @click="handleClose">
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'NotificationBar',
    props: {
      content: {
        type: String,
        require: true
      },
      btn: {
        type: String,
        default: '关闭'
      }
    },
    data() {
      return {
        visible: true
      }
    },

    computed: {
      style() {
        return {}
      }
    },
    methods: {
      handleClose(e) {
        e.preventDefault()
        this.$emit('close')
      },
      // 动画完成之后执行此方法
      afterLeave() {
        this.$emit('closed')
      },
      // 进入动画之后
      afterEnter() {}
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~assets/styles/varibles.styl"
  .notification-bar{
    overflow: hidden
    box-sizing: border-box
    width: 20vw
    height: 10vh
    border-radius $todo-border-radius
    display: flex
    flex-wrap: wrap
    position: fixed
    background-color: #303030;
    color: rgba(255, 255, 255, 1)
    align-items center
    box-shadow 3px 5px -1px rgba(0,0,0,0.5)
    transition: all 0.3s
  }
  .content{
    overflow hidden
    width: 75%
    height: 10vh
    line-height: 10vh
    text-align center
    font-size 16px
    padding: 0 10px 0 10px
    /*background-color: red;*/
  }
  .close{
    color: #ff4090
    width: 1.5vw
    height: 1.5vw
    /*background-color: yellowgreen*/
    margin: auto
    cursor: pointer
  }
</style>
