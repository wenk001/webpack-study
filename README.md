# 模块化项目的创建流程：

## tip
```
-S 安装到上线环境
-D 安装到开发环境
-g 安装到全局
-i install
```

## 第一步
```
mkdir 项目文件名 /*创建空项目目录*/
cd 项目文件名 /*进入项目目录*/
```
## 第二步
```
npm init -y /*初始化项目，创建默认项目描述文件package.json, -y可以省略不停的yes
```
## 第三步
```
创建src目录，项目文件都放在这里，在src目录下创建index.html、index.js
```
## 第四步
```
npm i jquery -S /*局部安装jq*/
```
## 第五步
```
npm i webpack webpack-cli -D /*局部安装webpack*/
```
## 第六步
```
根目录下创建webpack配置文件webpack.config.js，在package.json文件内的'script'属性中添加一个属性'dev':'webpack'
```
## 自动打包
```
npm i webpack-dev-server -D /*安装工具包*/
修改package.json文件中script中dev属性
修改index.html：/buldle.js
/*是一个小型node.js express服务器,且编译后的文件是看不到的，因为实时编译的文件保存在内存中*/
```
## 配置 html-webpack-plugin插件 生成预览页面
```
npm i html-webpack-plugin -D /*安装插件包*/
在webpack.config.js文件中导入，并在plugins列表中实例化插件
可以设置package.js文件中的script对象的dev属性：
/*
--open 打包完后自动打开页面
--host 配置ip地址
--post 配置端口号
*/
```
## loader加载器
```
/*webpack默认只能打包.js文件，所以要打包其他类型的文件可以通过配置loader来实现*/
npm i style-loader css-loader -D/*安装相关包*/
配置webpack.config.js文件：
module:{
    rules:[
        { test:/\.css$/,use:[style-loader,css-loader] }
    ]
}
```
## 配置 postcss 自动添加css的兼容前缀
```
npm i postcss-loader autoperfixer -D
根目录创建postcss的配置文件postcss.config.js,并初始化如下配置：
/*
const autoprefixer = require('autoprefixer')
module.exports = {
    plugins : [autoprefixer] 
}
*/
在webpack.config.js文件中的module->rules数组中添加'postcss-loader'
```
## 打包样式表中的图片和字体
```
npm i url-loader file-loader -D
配置webpack文件：
/*
{test:/\.jpg|gif|png$/, use:['url-loader?limit=16940']}//?后面的为loader的参数项，limit指定图片大小，单位为字节，小于才会转为base64
*/
```
## 打包处理js文件中的高级语法
```
安装babel转换器相关的包：npm i babel-loader @babel/core @babel/runtime -D
安装babel语法插件相关的包：npm i @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties -D
在根目录创建babel配置文件babel.config.js：
module.exports = {
    presets:['@babel/preset-env'],
    plugins:['@babel/plugin-transform-runtime','@babel/plugin-proposal-class-properties']
}
在webpack.config.js文件中添加：
{test:/\.js$/,use:'babel-loader',exclude:/node_modules/}//exclude为排除项
```
## vue组件加载器
```
npm i vue-loader vue-template-compiler -D
配置webpack.config.js文件：
const VueLoaderPlugin = require('vue-loader/lib/plugin')
...
{ test:/\.vue$/, use : ['vue-loader'] }
...
plugins:[new VueLoaderPlugin()]
```
## 在 webpack 项目中使用vue
```
运行 npm i vue -S 安装 vue
在 src -> index.js 入口文件中，通过 import Vue from 'vue' 来导入vue构造函数
```
## 配置 build 打包部署
```
"build" : "webpack -p"
```