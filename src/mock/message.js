/*
 * 创建信息界面数据，
 * 获取数据
 * */

// 导入mock模块
import Mock from 'mockjs'

//模拟后台接口，导出的getMessageData相当于用于获取主页数据的后台接口
let List = []
export default {
    getMessageData: () => {
        for (let i=0;i<10;i++){
            List.push(
                Mock.mock({
                    // messageIndex: Mock.Random.integer(1,10),
                    messageTitle: Mock.Random.ctitle(4,6),
                    messageContent: Mock.Random.cparagraph(2),
                    gameDate: Mock.Random.date()
                })
            )
        }
        return {
            code: 20000,
            data: {
                messageData: List
            }
        }
    }
}