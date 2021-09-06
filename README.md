# 后台管理系实现过程记录

## 首页

- 功能：将mock数据动态渲染在图表中

- 思路：

  - 搭建mock服务

    - 定义环境变量：

    ​        在.env.development中定义

    ```js
    # mock api
    VUE_APP_MOCK_API = '/mock-api'
    ```

    - 修改mock-server.js中的请求前缀

    `mock/mock-server.js`中代码37行``process.env.VUE_APP_MOCK_API``

    - 添加mock路由
    - 将路由汇总到index.js中

  - 添加mock请求

    - 在utils中新建requestMock.js文件 然后把request.js中的内容复制粘贴，把基础路径改为

      ``baseURL: process.env.VUE_APP_MOCK_API``

  - 写一个请求数据的api

    - 在api文件夹中新建一个文件reqCharts.js，写好请求路径然后汇总到index.js文件中

  - 由于数据繁多，所以先需要用vuex来管理数据

## 登录页面

### 表单校验功能

- 功能：判断用户输入是否为空并且输入的格式是否正确
- 思路：
  - 利用elementUI的表单校验方法进行校验

### 用户名和密码验证

- 功能：登录成功后跳转到首页 并且实现7天免登录

- 思路：

  - 封装给后台发送数据的API

    - 由于存在跨域问题，所以需要配置代理服务器来代理请求

    - ```js
      // 第一步 取到基础路径（脚手架会自动把.env.development文件下的内容加载到process.env上）
      const baseUrl=process.env.VUE_APP_BASE_API;
      // 第二步 配置代理服务器
      proxy:{
          // 注意：变量需要加中括号解析
          [baseUrl]:{
              target:'http://39.98.123.211', //转换到的目标服务器
              changeOrigin:true,// 这个参数可以让target参数是域名。
              pathRewrite:{
                  // 路径重写
                  [`^${baseUrl}`]:''
              }
                  
          }
      }
      ```

    - 在请求拦截器中将X-Token改为token

  - 在登录按钮上绑定点击事件

  - 点击按钮时向后台发送请求

    - 成功后接收到一个token数据，用来存储到浏览器的cookie中。并且跳转到首页
    - 失败后弹出登录失败弹窗

## 商品管理

### 准备工作

1. 搭建路由，使得各个页面能够无需刷新而跳转

