# vue-todo 备忘录
## Vue + Webpack + Vue-Router + Vuex + SSR

## 基础准备  
* ES6语法  
* 基础Node知识  
* 了解webpack  

## 知识点  
### 1.ESlint rules   
```text
'indent': 0, //除去首行缩进
'space-before-function-paren': [2, 'never'], //函数定义时括号前面要不要有空格
```
### 2.异步路由  
跳转到当前页面的时候才会加载页面，可以增加首页的展现速度  
```text
component: () => import('../xx/xx.vue')
```

### vue-cli 3.x  
升级vue-cli为3.0z之后 启动项目时端口号是一个随机的5位数，解决办法:执行`npm install portfinder@1.0.21 ` 回退版本

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
