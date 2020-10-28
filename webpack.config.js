const path = require('path')//node核心模块
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode : 'production', //编译模式：‘development’开发模式、‘production’生产模式
    entry : path.join(__dirname,'./src/index.js'),//打包入口文件的路径，__dirname为当前目录
    output : {
        path : path.join(__dirname,'./dist'),//输出文件的路径
        filename : 'bundle.js'//输出文件的名字
    },
    plugins : [//打包期间用到的插件列表
        new HtmlWebpackPlugin({//实例化html-webpack-plugin插件
            template : './src/index.html',//指定参考模板
            filename : 'index.html',//生成的文件名称，存在于内存中
            title : 'test'
        }),
        new VueLoaderPlugin()
    ],
    module : {
        rules : [
            { test:/\.css$/, use : ['style-loader','css-loader','postcss-loader'] },
            { test:/\.less$/, use : ['style-loader','css-loader','less-loader'] },
            { test:/\.scss$/, use : ['style-loader','css-loader','sass-loader'] },
            { test:/\.jpg|png|gif$/, use : ['url-loader?limit=868'] },
            { test:/\.js$/, use : 'babel-loader', exclude : /node_modules/ },
            { test:/\.vue$/, use : 'vue-loader' }
        ]
    }
}