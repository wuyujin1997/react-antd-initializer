# react-antd-initializer
基于NodeJS，Webpack配置，搭建React的开发环境，并集成AntDesign组件库。

以下为开发环境初始化及配置流程。

## 初始化web项目

`mkdir react-antd-initializer && cd react-antd-initializer`
`npm init --yes`

以下所有命令，会从**项目根目录(即刚新建的 react-antd-initializer/ )**为起点，开始操作。

## 安装基本依赖

`--save-dev`表示仅开发环境下的依赖
`--save`表示开发、生产环境下都依赖的模块(默认，可省略)

React相关依赖：
`npm install --save react react-dom`

webpack相关：
`npm install --save-dev webpack webpack-cli webpack-dev-server webpack-merge html-webpack-plugin`

babel相关：
`npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react`
