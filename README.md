# vue-todo 备忘录
## Vue + Webpack + Vue-Router + Vuex + SSR

## 基础准备  
* ES6语法  
* 基础Node知识  
* 了解webpack  

## 概念  
### 1、服务器端渲染（SSR） VS 客户端渲染  
`服务器端渲染` 后端先调用数据库，获得数据之后，在服务器端将数据和页面元素进行拼装，组合成完整的HTML页面，在直接返回给浏览器。  
`客户端渲染` 数据有浏览器通过ajax动态获得，在通过js将数据填充到dom元素上最终展示到网页中。  


## 封装组件  
### [通知弹窗组件](https://github.com/szjzszjz/vue-todo/tree/master/src/common/notifacation)

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
