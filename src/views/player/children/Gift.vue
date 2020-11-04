<template>
    <div class="main">
        <div class="header">
            <div class="text">礼包码绑定需先导入礼包码数据</div>
            <div class="giftCode">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="礼包码">
                        <el-input v-model="formInline.user" placeholder="请输入礼包码"></el-input>
                    </el-form-item>
                    <el-form-item label="游戏名称">
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="农药" value="shanghai"></el-option>
                            <el-option label="吃鸡" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="好" value="shanghai"></el-option>
                            <el-option label="差" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">导入礼包码数据</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="table">
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        label="#"
                        width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.index }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        label="礼包码"
                        width="180">
                    <template slot-scope="scope">
                            <div slot="reference" class="name-wrapper">
                                <el-tag size="medium">{{ scope.row.code }}</el-tag>
                            </div>
                    </template>
                </el-table-column>
                <el-table-column label="代理" width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.agent }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="公会" width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.guild }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="推广员" width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.promote }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="玩家账号" width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.admin }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="状态" width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.status }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="创建时间" width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                icon="el-icon-edit"
                                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                icon="el-icon-delete"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
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
        name: 'Gift',
        data(){
            return{
                formInline: {
                    user: '',
                    region: ''
                },
                tableData: [{
                    index: '1',
                    code: 'Badx',
                    agent: '无',
                    guild: '测试公会',
                    promote: 'IT测试',
                    admin: '玩家账号长度测试',
                    status: '未使用',
                    date: '2016-05-02',
                }, {
                    index: '2',
                    code: 'fadx',
                    agent: '无',
                    guild: '测试公会',
                    promote: 'IT测试',
                    admin: '玩家账号长度测试',
                    status: '未使用',
                    date: '2016-05-02',
                }, {
                    index: '3',
                    code: 'Kadx',
                    agent: '无',
                    guild: '测试公会',
                    promote: 'IT测试',
                    admin: '玩家账号长度测试',
                    status: '未使用',
                    date: '2016-05-02',
                }, {
                    index: '4',
                    code: 'Badx',
                    agent: '无',
                    guild: '测试公会',
                    promote: 'IT测试',
                    admin: '玩家账号长度测试',
                    status: '未使用',
                    date: '2016-05-02',
                },{
                    index: '5',
                    code: 'Badx',
                    agent: '无',
                    guild: '测试公会',
                    promote: 'IT测试',
                    admin: '玩家账号长度测试',
                    status: '未使用',
                    date: '2016-05-02',
                },{
                    index: '6',
                    code: 'BLdx',
                    agent: '无',
                    guild: '测试公会',
                    promote: 'IT测试',
                    admin: '玩家账号长度测试',
                    status: '未使用',
                    date: '2016-05-02',
                },{
                    index: '7',
                    code: 'BaTTx',
                    agent: '无',
                    guild: '测试公会',
                    promote: 'IT测试',
                    admin: '玩家账号长度测试',
                    status: '未使用',
                    date: '2016-05-02',
                },{
                    index: '8',
                    code: 'BaDJFx',
                    agent: '无',
                    guild: '测试公会',
                    promote: 'IT测试',
                    admin: '玩家账号长度测试',
                    status: '未使用',
                    date: '2016-05-02',
                },{
                    index: '9',
                    code: 'afjkaf',
                    agent: '无',
                    guild: '测试公会',
                    promote: 'IT测试',
                    admin: '玩家账号长度测试',
                    status: '未使用',
                    date: '2016-05-02',
                },{
                    index: '10',
                    code: 'afege',
                    agent: '无',
                    guild: '测试公会',
                    promote: 'IT测试',
                    admin: '玩家账号长度测试',
                    status: '未使用',
                    date: '2016-05-02',
                }]
            }
        },
        methods:{
            onSubmit() {
                console.log('submit!');
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>

<style scoped>
    .main{
        background-color: #fff;
        height: 100px;
    }

    .header{
        padding:12px 0 0 15px;
    }
    .text{
        line-height: 20px;
        margin-bottom: 20px;
    }
    .pages{
        float: right;
        margin: 20px 20px 0 0;
        height: 40px;
        line-height: 40px;
    }
</style>
