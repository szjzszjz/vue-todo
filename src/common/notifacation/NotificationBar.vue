<template>
  <transition name="fade"
              @after-leave="afterLeave"
              v-on:after-enter="afterEnter">
    <div class="notification-bar"
         :style="style"
         v-show="visible"
         ref="notificationBar" >
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
      },
      bgc: {
        type: String,
        default: '#303030'
      }
    },
    data() {
      return {
        visible: true,
        verticalOffset: 0,
        autoCloseTime: 3000,
        // eslint-disable-next-line no-undef
        barHeight: 0
      }
    },

    computed: {
      style() {
        return {
          position: 'fixed',
          right: '20px',
          bottom: `${this.verticalOffset}px`,
          background: this.bgc
        }
      }
    },
    methods: {
      handleClose(e) {
        e.preventDefault()
        this.$emit('close')
      },
      // 动画完成之后执行此方法
      afterLeave() {
        console.log('afterLeave')
        this.$emit('closed')
      },
      afterEnter: function(el) {
        console.log('动画进入之后')
        el.style.background = 'blue'
      },
      // 进入动画之后
      // afterEnter() {},
      createTimer() {
        // const closeTime = this.autoCloseTime !== null ? this.autoCloseTime : 3000
        console.log(this.autoCloseTime)
        //  console.log('createTimer---' + this.autoCloseTime)
        this.timer = setTimeout(() => {
          this.visible = false
        }, this.autoCloseTime)
      }

    },
    // 页面渲染完成之后加载计时器
    mounted() {
      this.createTimer()

      // console.log('notificationBar--' + this.$refs.notificationBar.getBoundingClientRect().top)
      // this.barHeight = this.$refs.notificationBar.style.width
    },
    // 离开组件的时候销毁定时器
    beforeDestroy() {
      window.clearTimeout()
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~assets/styles/varibles.styl"
  .notification-bar {
    overflow: hidden
    box-sizing: border-box
    width: 20vw
    min-width 16vw
    height: 10vh
    min-height 8vh
    border-radius $todo-border-radius
    display: flex
    flex-wrap: wrap
    position: fixed
    background-color: #303030;
    color: rgba(255, 255, 255, 1)
    align-items center
    box-shadow 3px 5px -1px rgba(0, 0, 0, 0.5)
    transition: all 0.3s
  }

  .content {
    overflow hidden
    width: 75%
    height: 10vh
    line-height: 10vh
    text-align center
    font-size 16px
    padding: 0 10px 0 10px
    /*background-color: red;*/
  }

  .close {
    color: #ff4090
    width: 1.5vw
    height: 1.5vw
    /*background-color: yellowgreen*/
    margin: auto
    cursor: pointer
  }
</style>
