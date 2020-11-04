/*
 * 进行网络请求的相关配置，
 * 前期使用mock模拟后台数据接
 */

// 导入网络模块
import axios from 'axios'

//全局配置网络模块
const service = axios.create({
    // 请求超时时间
    timeout: 30
})

// 请求拦截
service.interceptors.request.use(
    config =>{
        return config
    },
    err =>{
        console.log(err)
    }
)

//响应拦截
service.interceptors.response.use(
    response =>{
        let res={};
        res.status = response.status;
        res.data = response.data;
        return res
    },
    err =>{
        console.log(err)
    }
)

//导出网络模块
export default service

