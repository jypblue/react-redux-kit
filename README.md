# react-redux-kit
React,Redux单页应用脚手架

本项目工程利用了最新的前端技术，基于webpack提供代码热加载，css模块with sass，单元测试，代码分割，按需加载等。

本项目工程采用koa启动webpack打包生成的页面,利用react,redux,react-router构建工程组件，路由系统。

觉得不错的话，请Star一下本项目，这是对作者最大的支持。

## 技术栈
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [react-router](https://github.com/rackt/react-router)
* [react-router-redux](https://github.com/rackt/react-router-redux)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [koa](https://github.com/koajs/koa)
* [eslint](http://eslint.org)

## 需求配置
* node `^6.0.0`
* history `2.0.0`

## 开始

确认好你的环境配置，然后就可以开始以下步骤。

```
$ git clone https://github.com/jypblue/react-redux-kit.git
$ cd react-redux-kit
$ npm install            # 安装本地工程依赖包
$ npm run dev            # 启动开发模式
```

开发中会用到的命令：

|`npm run <script>`|解释|
|------------------|-----------|
|`dev`|服务启动在3003端口，代码热替换开启。|
|`build`|编译程序到dist目录下（默认目录~/dist）。|
|`release`| 启动服务器，查看release版本代码情况。|
|`test`|开启mocha测试|

## 项目目录

```
├── gulpfile.js               # gulp任务配置
├── package.json              # 项目配置
├── README.md                 # 项目说明
├── server                    # 本地server
│   ├── app.js                # 本地server
├── src                       # 源码目录
│   ├── index.html            # 入口文件
│   ├── css/                  # css文件夹
│   ├── fonts/                # 字体文件
│   ├── img/                  # 图片文件夹
│   ├── static/               # favicon.ico
│   ├── js                    # js&jsx文件夹
│   │   ├── index.jsx         # 单页入口js/jsx文件
│   │   ├── action/			   # Action Creators文件夹：存放可以触发的action函数
│   │   ├── components/       # React展示组件文件夹
│   │   ├── constants/        # Action 大写字符串描述事件
│   │   ├── containers/       # 容器文件夹：存放容器组件
│   │   ├── reducers/         # reducers文件夹：存放action的处理器reducers
│   │   ├── store/            # store文件夹
│   │   └── utils/            # 前端路由文件夹
│   ├── scss/                 # scss文件夹
├── test                      # 测试代码目录
├── webpack-build.config.js   # webpack基本配置
├── webpack.config.js         # 正式环境webpack配置入口
└── webpack-dev.config.js     # 开发环境webpack配置入口
```


## 服务端

这个项目的服务端使用Koa。需要注意的是，只有一个目的那就是提供了`webpack-dev-middleware` 和 `webpack-hot-middleware`（代码热替换）

## 打包

利用require.ensure做到拆分模块包，按需加载。
在生产环境下，webpack会导出一个压缩的css文件以及多个压缩的Javascript组件模块，并把js模块优化到最好的性能。




