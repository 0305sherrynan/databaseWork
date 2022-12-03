const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  devServer:{
    proxy: {//利用代理服务器去解决跨域问题（本地开发的时候）vue中的方法
      '/zwz':{ 
        //'/api' 地址是自己定义的
        target:'http://127.0.0.1:3000/', //你要解决跨域的地址
        changeOrigin:true,//在本地搭建一个虚拟服务，去发送种请求拦截服务
        pathRewrite:{//地址重写
          '^/zwz':''
        }
      }
    }
  }
})
