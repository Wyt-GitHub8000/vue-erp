<template>
    <div>
        <div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="IOS游戏" name="first">
                    <el-table
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column
                                label="#"
                                width="180">
                            <template slot-scope="scope">
                                <span style="margin-left: 0px">{{ scope.row.index }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="游戏名称"
                                width="200">
                            <template slot-scope="scope">
                                <span style="margin-left: 0px">{{ scope.row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="平台"
                                width="180">
                            <template slot-scope="scope">
                                <span style="margin-left: 0px">{{ scope.row.platform }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="版本"
                                width="180">
                            <template slot-scope="scope">
                                <span style="margin-left: 0px">{{ scope.row.version }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="游戏大小"
                                width="180">
                            <template slot-scope="scope">
                                <span style="margin-left: 0px">{{ scope.row.size }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="屏幕方向"
                                width="180">
                            <template slot-scope="scope">
                                <span style="margin-left: 0px">{{ scope.row.direction }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="状态">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        @click="handleEdit(scope.$index, scope.row)">添加</el-button>
                                <el-button
                                        size="mini"
                                        type="danger"
                                        @click="handleDelete(scope.$index, scope.row)">移除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="Android游戏" name="second">
                    <el-table
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column
                                label="#"
                                width="180">
                            <template slot-scope="scope">
                                <span style="margin-left: 0px">{{ scope.row.index }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="游戏名称"
                                width="200">
                            <template slot-scope="scope">
                                <span style="margin-left: 0px">{{ scope.row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="平台"
                                width="180">
                            <template slot-scope="scope">
                                <span style="margin-left: 0px">{{ scope.row.platform }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="版本"
                                width="180">
                            <template slot-scope="scope">
                                <span style="margin-left: 0px">{{ scope.row.version }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="游戏大小"
                                width="180">
                            <template slot-scope="scope">
                                <span style="margin-left: 0px">{{ scope.row.size }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="屏幕方向"
                                width="180">
                            <template slot-scope="scope">
                                <span style="margin-left: 0px">{{ scope.row.direction }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="状态">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        type="primary"
                                        icon="el-icon-circle-plus-outline"
                                        @click="handleEdit(scope.$index, scope.row)">添加</el-button>
                                <el-button
                                        size="mini"
                                        type="danger"
                                        icon="el-icon-close"
                                        @click="handleDelete(scope.$index, scope.row)">移除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="已添加游戏" name="third">
                    <el-table
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column
                                label="#"
                                width="180">
                            <template slot-scope="scope">
                                <span style="margin-left: 0px">{{ scope.row.index }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="游戏名称"
                                width="200">
                            <template slot-scope="scope">
                                <span style="margin-left: 0px">{{ scope.row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="平台"
                                width="180">
                            <template slot-scope="scope">
                                <span style="margin-left: 0px">{{ scope.row.platform }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="版本"
                                width="180">
                            <template slot-scope="scope">
                                <span style="margin-left: 0px">{{ scope.row.version }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="游戏大小"
                                width="180">
                            <template slot-scope="scope">
                                <span style="margin-left: 0px">{{ scope.row.size }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="屏幕方向"
                                width="180">
                            <template slot-scope="scope">
                                <span style="margin-left: 0px">{{ scope.row.direction }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="状态">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        @click="handleEdit(scope.$index, scope.row)">复制链接地址</el-button>
                                <el-button
                                        size="mini"
                                        type="primary"
                                        icon="el-icon-search"
                                        @click="handleDelete(scope.$index, scope.row)">二维码</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
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
        name: 'List',
        data() {
            return {
                activeName: 'first',
                input: '',
                tableData: [{
                    index: '1',
                    name: '游戏名称长度测试',
                    platform: 'Android',
                    version: '1.0.0',
                    size: '789.2M',
                    direction: '竖屏',
                }, {
                    index: '2',
                    name: '游戏名称长度测试',
                    platform: 'Android',
                    version: '1.0.0',
                    size: '789.2M',
                    direction: '竖屏',
                }, {
                    index: '3',
                    name: '游戏名称长度测试',
                    platform: 'Android',
                    version: '1.0.0',
                    size: '789.2M',
                    direction: '竖屏',
                }, {
                    index: '4',
                    name: '游戏名称长度测试',
                    platform: 'Android',
                    version: '1.0.0',
                    size: '789.2M',
                    direction: '竖屏',
                },{
                    index: '5',
                    name: '游戏名称长度测试',
                    platform: 'Android',
                    version: '1.0.0',
                    size: '789.2M',
                    direction: '竖屏',
                },{
                    index: '6',
                    name: '游戏名称长度测试',
                    platform: 'Android',
                    version: '1.0.0',
                    size: '789.2M',
                    direction: '竖屏',
                },{
                    index: '7',
                    name: '游戏名称长度测试',
                    platform: 'Android',
                    version: '1.0.0',
                    size: '789.2M',
                    direction: '竖屏',
                },{
                    index: '8',
                    name: '游戏名称长度测试',
                    platform: 'Android',
                    version: '1.0.0',
                    size: '789.2M',
                    direction: '竖屏',
                },{
                    index: '9',
                    name: '游戏名称长度测试',
                    platform: 'Android',
                    version: '1.0.0',
                    size: '789.2M',
                    direction: '竖屏',
                },{
                    index: '10',
                    name: '游戏名称长度测试',
                    platform: 'Android',
                    version: '1.0.0',
                    size: '789.2M',
                    direction: '竖屏',
                }]
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
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

<style lang="scss" scoped>
    .pages{
        float: right;
        margin: 20px 20px 0 0;
        height: 40px;
        line-height: 40px;
    }
</style>
