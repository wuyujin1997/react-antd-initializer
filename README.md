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


## 初始化webpack配置

- 关于webpack的配置文件(这一步可以跳过)

全局安装webpack后，运行`webpack --help`可以看到所有该命令的选项，其中：
```
--config    Path to the config file
            [字符串] [默认值: webpack.config.js or webpackfile.js]
```
也就是说webpack会默认读取项目根目录下名为`webpack.config.js`或`webpackfile.js`的文件作为配置文件。
当然也可以通过`--config`自行指定配置文件的路径。
我选**自己指定配置文件路径**这种方式。

- 新建配置目录

`mkdir config && cd config`
在`config`目录中新建三个配置文件，层次如下：
```
react-antd-initializer/
    config/
        webpack.common.js
        webpack.dev.js
        webpack.prod.js
```
其中webpack的大部分配置项会写在`webpack.common.js`。
其他两个配置文件分别先引入这个通用配置，然后做各自环境下针对性的配置。

- 编辑webpack的三份配置文件

- 编辑`package.json`中的`scripts`内容，新增`start`和`build`脚本命令。
脚本的名字可以自己起，运行的时候对应即可。

## HTML模板

`mkdir public && cd public`
新建`index.html`，编辑(这个文件作为`html-webpack-plugin`插件要读取的模板)。

修改`webpack.common.js`，添加`html-webpack-plugin`插件配置。