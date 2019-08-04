# vue-cli3-multipage

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

***

## 中文简介

#### 基于vue-cli3的多页脚手架
* 基于h5移动端
* 该脚手架在功能上属于纯demo型，可参考demo实现具体业务
* 利用cube-ui的优质特性，详见下方cube-ui简介

#### 核心目录结构如下
```bash
|--- package.json
|--- vue.config.js    多页脚手架核心配置
|--- public    通用html模版
|--- src
  |--- api    基础axios的封装
  |--- common    样式及总线
  |--- components    通用组件
  |--- pages    多页总目录
    |--- demo1
      |--- App.vue    demo1入口vue
      |--- Demo1.vue    页面内容vue
      |--- index.js    demo1入口js
    |--- demo2
      |--- chidren    demo2的子组件目录
      |--- App.vue    demo2入口vue
      |--- Demo2.vue    页面内容vue
      |--- index.js    demo2入口js
  |--- main.js    通用render入口
```

#### 技术使用
* ui库    cube-ui
* 请求    axios + vue-cli3 devServer mock
* 组件通信     vue总线

#### 可扩展性
* vue-router
* vuex
* 覆盖cube-ui样式 扩展嵌套组件
* 其他

#### cube-ui简介
**推荐使用cube-ui**
* cube-ui 是滴滴开源组件库，目前（至2019年下半年），该组件维度度相对活跃
* cube-ui 扩展性强，可适配场景丰富
* cube-ui 主题改造方便，样式结构清晰
* cube-ui 按需加载，易于插拔
* cube-ui 对于多屏适配有良好的兼容方案，可选rem及px，方便集成基于动态viewport的屏幕适配方案
* cube-ui 对于1px-border以及不同分辨率图片，有很好的默认支持方案

***对比其他ui库，维护性高，并解决了 “样式无法扩展”，“组件无法扩展” 的痛点***

*如果你不想使用cube-ui，只需轻松删除 main.js中的引用 和 vue.config.js 相关配置*

***
