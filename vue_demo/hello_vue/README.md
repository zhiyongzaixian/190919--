# 适配
## 1. viewport适配

1. 为什么做viewport适配

   1. 手机厂商设置的页面宽度默认为 980

2. 如何做适配

   1. 适配内容： meta name="viewport" content="width=device-width,initial-scale=1.0"

   2. width: 页面宽度 === 布局视口宽度

   3. device-width: 设备独立像素 === 视觉视口

      



## 2. rem适配

1. 为什么用rem做适配
   1. 手机机型太多，屏幕大小不一样
   2. 一套设计稿的内容在不同的机型上呈现的效果一致



# 路由
## 1. 路由核心概念

1. 路由器： router

2. 路由地址: path

3. 路由链接: router-link

4. 路由容器: router-view

5. 路由重定向: redirect

   

## 2. 使用步骤

1. 生成路由器: const router = new VueRouter()
2. 安装路由器: Vue的项目中通常安装在整个应用组件的外
   1. main.js
   2. 全局
   3. new Vue({router})
3. 路由器管理路由
   1. 通过账号密码链接指定的路由器
   2. 上网需要由指定的路由器来管理
	 
## 3. $router VS $route
### $router
1. 路由器对象
2. 包含所有路由跳转的方法
3. 其目的主要是用来控制路由跳转

### $route
1. 路由信息对象
2. 包含所有当前路由相关的信息：path, query, params, meta, fullPath
3. 其目的是收集展示当前路由的所有信息























