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

### 权限管理

#### 1.权限管理相关知识

##### 1.1权限分类

- 后端权限

  - 后端如何知道请求是哪一类用户发送的

    ``cookie、session、token``三种状态保持的方法

  - 后端的权限设计RBAC

    ``用户、角色、权限``

- 前端权限

  - 视图层的展示
  - 控制发送的请求

##### 1.2前端权限的意义

- 降低非法操作的可能性
- 减少不必要的请求，减轻服务器的压力
- 提高用户的体验

#### 2.前端权限控制的思路

##### 1.菜单的控制

​		登录请求中，根据后端返回的数据来决定渲染左侧有权访问的菜单

##### 2.界面的控制

​		如果用户没有登录，手动在地址栏敲入界面管理的地址，则需要跳转到登陆页面进行登录

​		如果用户已经登录，手动输入非权限页面，则需要跳转到404页面

##### 3.按钮的控制

​		在某个菜单的界面中，还得根据权限数据，展示出可以进行的操作按钮

##### 4.请求和响应的控制

​		用户在控制台取消被禁用的按钮并且发送了请求，要将这些请求拦截下来

#### 3.vue权限管理实现



## 商品管理 

### 准备工作

1. 搭建路由，使得各个页面能够无需刷新而跳转

## 项目的上线与部署

### 准备工作

#### 1.首先打包项目

目的：打包可以处理比如像兼容性的各种问题，将代码编译成浏览器可以识别的语法，同时对代码做一些优化

```js
docker run --detach --name solo --network=host \
    --env RUNTIME_DB="MYSQL" \
    --env JDBC_USERNAME="root" \
    --env JDBC_PASSWORD="woshi2bb" \
    --env JDBC_DRIVER="com.mysql.cj.jdbc.Driver" \
    --env JDBC_URL="jdbc:mysql://127.0.0.1:3306/solo?useUnicode=yes&characterEncoding=UTF-8&useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true" \
    b3log/solo --listen_port=8080 --server_scheme=http --server_host=localhost --server_port=


作者：88250
链接：https://ld246.com/article/1492881378588
来源：链滴
协议：CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0/
```

