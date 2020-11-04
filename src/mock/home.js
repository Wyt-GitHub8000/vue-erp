/*
 * 创建首页数据库，
 * 用于获取
 */

// 安装后导入mock
import Mock from 'mockjs'

//模拟后台接口，导出的getHomeData相当于用于获取主页数据的后台接口
let List = []
export default {
    getHomeData: () => {
        for (let i=0;i<4;i++){
            List.push(
                Mock.mock({
                    gameIndex: Mock.Random.float(1, 5, 0 ,0),
                    gameName: Mock.Random.ctitle(4),
                    gamePlat: Mock.Random.string('ios',3, 3),
                    gameDate: Mock.Random.date(),
                    gameMessage: Mock.Random.ctitle(5,6)
                })
            )
        }
        return {
            code: 20000,
            data: {
                tableData: List
            }
        }
    }
}

