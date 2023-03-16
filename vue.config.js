module.exports = {
	//关闭eslint
	lintOnSave: false,
    devServer:{
        proxy:{
            '/json_demo':{
                // 跨域的服务器地址
                target: 'https://www.runoob.com/try/ajax/json_demo.json',
                // 是否允许跨域
                changeOrigin: true,
                // 替换掉请求路径的/json_demo“”
                pathRewrite:{'^/json_demo': ""}
            },
        }
    },
	configureWebpack:{
        module: {
            rules: [
                {
                    test: /\.mjs$/,
                    include: /node_modules/,
                    type: "javascript/auto"
                },
            ]
        },
        resolve:{
            // 给路径起别名
            alias:{
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
};