# shoppingmall（购物商城app）
## 为了不给后台服务器增加压力，本项目不提供后台数据连接，望谅解
## Project setup
```
npm install
```

## Compiles and minifies for production
```
npm run build
```

## Compiles and hot-reloads for development
```
npm run serve
```
## 1.项目简介
```
该项目为使用vue-cli3搭建的一个前后端分离的商城项目；
使用了Vue，Vuex，Vue-Router,ES6，Axios以及Webpack等前端技术；
主要包含商城首页，详情页，购物车，商品分类，个人中心等模块；
项目涉及vue-lazyload, better-scroll相关运用。
```

### 2. 通过项目能够学到什么
```
1）Vue，Vuex，Vue-Router，Axios，Webpack的熟悉使用，使用vue-cli脚手架工具初始化Vue项目；
2）组件封装（如轮播图，导航栏的统一封装等），模块化开发，工程化思想；
3）项目开发的基本流程以及调试方法（devtools的使用）；
4）学会使用vue-lazyload实现图片懒加载，使用better-scroll实现页面的滚动效果等。
```
### 3. 搭建项目目录结构（最重要的一步）
```
-assets                   图片和初始化页面的基础样式
    -css
    -images

-common                   封装的可以公共使用的一些工具方法

-components               公共组件
    -common               与项目无耦合的组件
    -content              与项目耦合较高的组件

-network                  网络请求相关（对Axios的再封装）

-router                   路由相关

-store                    vuex状态管理相关

-views                    主要展示的页面
    -cart                 购物车页面
        -childComps
    -category             商品分类页面
        -childComps        
    -datail               商品详情页面
        -childComps
    -home                 首页
        -childComps
    -profile              我的
        -childComps
  ```

### 4. 项目部分截图展示
```
1）首页部分

主要包括5个部分：顶部导航栏，轮播图，分类，流行推荐，商品部分。
```
 ![home1](https://img-blog.csdnimg.cn/2020112510121544.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3MTU1NTgy,size_16,color_FFFFFF,t_70)
 ![home2](https://img-blog.csdnimg.cn/20201125101315573.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3MTU1NTgy,size_16,color_FFFFFF,t_70)
```
2）详情页部分

主要包括7个部分：商品轮播图，商品信息，商家信息，商品图片，商品参数，商品评论以及推荐商品。
```
 ![detail1](https://img-blog.csdnimg.cn/20201125101430211.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3MTU1NTgy,size_16,color_FFFFFF,t_70)
```
3）购物车部分

主要包括2个部分：购物车商品以及结算：涉及的点为商品选中与全选的设置。
```
 ![cart2](https://img-blog.csdnimg.cn/20201125101642320.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3MTU1NTgy,size_16,color_FFFFFF,t_70)


