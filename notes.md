HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名：
```javascript
Vue.component('blog-post', {
  // 在 JavaScript 中是 camelCase 的
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})
```
```html
<!-- 在 HTML 中是 kebab-case 的 -->
<blog-post post-title="hello!"></blog-post>
```

重申一次，如果你使用字符串模板，那么这个限制就不存在了。

在组件的template中，html中的props也不能用驼峰式

data中this.xxx只能用驼峰，不能用-

$emit事件名不要用驼峰式，html不区分大小写

template标签在html中不会渲染

vue create demo 创建项目
yarn serve 启动项目

vue-router不用单独安装，在创建项目时选择


安装axios
```
npm install --save axios
```

安装完后用下面命令要更新依赖，否则yarn serve报错
```
npm install
```


