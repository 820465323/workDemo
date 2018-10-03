//将配置信息导入weibpack中
module.exports = {
    //三部分
    //1.配置入口
    entry:{
        app:'./app.js',
        css:'./all_css.js'
    },
    //2.配置出口
    output:{
        //__dirname默认当前文件目录
        path:__dirname,
        //filename可以为打包后的js起别名
        //[name].js动态值
        filename:'[name].js'
    },
    //3.配置加载器Loader(识别不能打包的文件)
    module:{
        //配置解析规则
        rules:[
            {
                //正则表达式(匹配结尾.css的文件)
                test:/(.jpg|.png)/,
                //use使用配置的loader解析test中的匹配到的文件
                use:[
                   `url-loader?limit=1024`
                ]
            },
            {
                //正则表达式(匹配结尾.css的文件)
                test:/.css$/,
                //use使用配置的loader解析test中的匹配到的文件
                use:[
                    `style-loader`,
                    `css-loader`,

                ]
            }
        ]
    }
};