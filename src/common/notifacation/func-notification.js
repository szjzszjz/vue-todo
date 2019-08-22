import Notification from './NotificationBar'

export default {
  extends: Notification,
  props: ['bgc'],
  data() {
    return {
      verticalOffset: 0,
      autoCloseTime: 3000,
      height: 0
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
    createTimer() {
     // const closeTime = this.autoCloseTime !== null ? this.autoCloseTime : 3000
      console.log(this.autoCloseTime)
     //  console.log('createTimer---' + this.autoCloseTime)
      this.timer = setTimeout(() => {
        this.visible = false
      }, this.autoCloseTime)
    },
    afterEnter() {
      // debugger
      this.height = this.$el.offsetHeight
    }
  },

  // 页面渲染完成之后加载计时器
  mounted() {
    this.createTimer()
  },
  // 离开组件的时候销毁定时器
  beforeDestroy() {
    window.clearTimeout()
  }

}
