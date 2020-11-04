<template>
    <div>
        <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val">
            </el-table-column>
            <!--<el-table-column-->
                    <!--prop="title"-->
                    <!--label="标题"-->
                    <!--width="120">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
                    <!--prop="content"-->
                    <!--label="内容"-->
                    <!--width="882"-->
                    <!--show-overflow-tooltip>-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
                    <!--prop="date"-->
                    <!--label="发送时间"-->
                    <!--show-overflow-tooltip>-->
            <!--</el-table-column>-->
        </el-table>
        <div style="margin-top: 20px">
            <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
        <div class="pages">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Unread',
        data() {
            return {
                tableData: [],
                tableLabel: {
                    Index: '#',
                    title: '标题',
                    content: '内容',
                    date: '发送时间',
                },
//                tableData: [{
//                    index: '1',
//                    title: '标题长度测试',
//                    content: '恭喜你，抽到一个新皮肤',
//                    date: '2016-05-03'
//                }, {
//                    index: '2',
//                    title: '标题长度测试',
//                    content: '恭喜你，抽到一个新皮肤',
//                    date: '2016-05-03'
//                }, {
//                    index: '3',
//                    title: '题长度测试',
//                    content: '恭喜你，抽到一个新皮肤',
//                    date: '2016-05-03'
//                }, {
//                    index: '4',
//                    title: '标题长度测试',
//                    content: '恭喜你，抽到一个新皮肤',
//                    date: '2016-05-03'
//                }, {
//                    index: '5',
//                    title: '标题长度测试',
//                    content: '恭喜你，抽到一个新皮肤',
//                    date: '2016-05-03'
//                }, {
//                    index: '6',
//                    title: '标题长度测试',
//                    content: '恭喜你，抽到一个新皮肤',
//                    date: '2016-05-03'
//                }, {
//                    index: '7',
//                    title: '标题长度测试',
//                    content: '恭喜你，抽到一个新皮肤',
//                    date: '2016-05-03'
//                },{
//                    index: '8',
//                    title: '标题长度测试',
//                    content: '恭喜你，抽到一个新皮肤',
//                    date: '2016-05-03'
//                },{
//                    index: '9',
//                    title: '标题长度测试',
//                    content: '恭喜你，抽到一个新皮肤',
//                    date: '2016-05-03'
//                },{
//                    index: '10',
//                    title: '标题长度测试',
//                    content: '恭喜你，抽到一个新皮肤',
//                    date: '2016-05-03'
//                }],
                multipleSelection: []
            }
        },
        methods: {
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        },
        mounted(){
            this.$http.get('/message/getData').then(res =>{
                res = res.data;
                this.tableData = res.data.messageData;
                console.log(res.data.messageData)
            })
        }
    }
</script>

<style lang="scss" scoped>
    .pages{
        float: right;
        margin: 20px 20px 0 0;
        height: 40px;
        line-height: 40px;
    }
</style>

<style lang="scss">
    .cell{
        text-align: center;
    }
</style>
