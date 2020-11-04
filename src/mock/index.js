/*
 * 使用mock模拟后台传数据，
 * 这里简单对mock进行配置,
 * 并且
 */

// 安装后导入mock
import Mock from 'mockjs'

//导入模拟的后台接口
import homeApi from './home.js'
import messageApi from './message'

//模拟网络延时
Mock.setup({
    timeout: '200-2000'
})

//处理拦截到的各种请求
Mock.mock(/\/home\/getData/,'get',homeApi.getHomeData)
Mock.mock(/\/message\/getData/, 'get',messageApi.getMessageData)