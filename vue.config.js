module.exports = {
   publicPath: process.env.NODE_ENV === 'production'
       ? './'
       : '/',
  assetsDir: 'static',
  parallel:false,
  configureWebpack : {
    performance: {
        hints:'warning',
        //入口起点的最大体积 整数类型（以字节为单位）
        maxEntrypointSize: 50000000,
        //生成文件的最大体积 整数类型（以字节为单位 300k）
        maxAssetSize: 30000000,
        //只给出 js 文件的性能提示
        assetFilter: function(assetFilename) {
            return assetFilename.endsWith('.js');
        }
    }
  },
    // // assetsDir: 'static',
    // // parallel: false,
    devServer: {
        port: 8888, // 端口号，如果端口号被占用，会自动提升1
        host: "localhost", //主机名， 127.0.0.1，  真机 0.0.0.0
        https: false, //协议
        open: true, //启动服务时自动打开浏览器访问
        proxy: { // 开发环境代理配置
            // '/dev-api': {
            '/api':{
                // 目标服务器地址，代理访问 http://localhost:8001
                target:  "http://81.70.229.157:3000/",
                ws: true,
                changeOrigin: true,
            }
        }
    },
    lintOnSave: false,//关闭格式检测
    // outputDir: "dist",//打包目录
    // assetsDir: 'assets', //静态资源打包的存放路径
    // indexPath:"our/index.html" //主页面打包的存放目录
    productionSourceMap: false, //打包时不会生产.map文件，加快打包速度
}