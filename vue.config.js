module.exports = {
    devServer: {
        port: 3333,
        open: true,
       /* 设置前端代理解决跨域访问问题
        proxy: {

        }*/
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@/assets/scss/_variable.scss";'
            }
        }
    }
}