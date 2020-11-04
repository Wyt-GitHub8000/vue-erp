<template>
    <el-menu
            :unique-opened="true"
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#2b3443"
            text-color="#e8e8e8"
            active-text-color="#fff">
        <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
            <i :class="'el-icon-'+item.icon"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>
        <el-submenu :index="item.path" v-for="(item,index) in hasChildren" :key="index">
            <template slot="title">
                <i :class="'el-icon-'+item.icon"></i>
                <span>{{item.label}}</span>
            </template>
            <el-menu-item-group>
                <el-menu-item :index="subItem.path" v-for="(subItem,subindex) in item.children" :key="subindex" @click="clickMenu(subItem)">
                    {{subItem.label}}
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        data() {
            return {
                asideMenu: [
                    {
                        path: '/',
                        name: 'home',
                        label: '首页',
                        icon: 's-home'
                    },
                    {
                        path: '/player',
                        name: 'player',
                        label: '玩家关联',
                        icon: 's-custom',
                        children: [
                            {
                                path: '/player',
                                name: 'gift',
                                label: '礼包码绑定'
                            }
                        ]
                    },
                    {
                        path: '/game',
                        name: 'game',
                        label: '游戏管理',
                        icon: 's-operation',
                        children:[
                            {
                                path: '/game',
                                name: 'list',
                                label: '游戏列表'
                            },
                            {
                                path: '/specialgame',
                                name: 'special',
                                label: '专服游戏'
                            }
                        ]
                    },
                    {
                        path: '/data',
                        name: 'name',
                        label: '查看数据',
                        icon: 's-order',
                        children: [
                            {
                                path: '/data',
                                name: 'everyday',
                                label: '每日概况'
                            },
                            {
                                path: '/data2',
                                label: '游戏数据'
                            },
                            {
                                path: '/data3',
                                label: '推广业绩'
                            },
                            {
                                path: '/data4',
                                label: '玩家管理'
                            },
                            {
                                path: '/data5',
                                label: '角色查询'
                            },
                            {
                                path: '/data6',
                                label: '注册查询'
                            },
                            {
                                path: '/data7',
                                label: '订单查询'
                            }
                        ]
                    },
                    {
                        path: '/message',
                        name: 'message',
                        label: '消息中心',
                        icon: 's-comment',
                        children: [
                            {
                                path: '/message',
                                name: 'read',
                                label: '已读消息'
                            },
                            {
                                path: '/message2',
                                name: 'unread',
                                label: '未读消息'
                            }
                        ]
                    }
                ]
            }
        },
        computed: {
            noChildren() {
                return this.asideMenu.filter(item=>!item.children);
            },
            hasChildren() {
                return this.asideMenu.filter(item=>item.children);
            }
        },
        methods: {
            clickMenu(item){
                //通过全局的router属性，进行路由跳转
                console.log('aaa');
                this.$router.push({name: item.name})
                //直接通过commit方式，负载参数参数直接提交给了mutations，由于没有经过action可能会出现异步问题
                this.$store.commit('selectMenu',item);
                //更改一些相关样式

            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-menu{
        height:100%;
        border: none;
    }
</style>

<style lang="scss">
    .el-menu-item-group__title{
        padding: 0;
    }
    .el-submenu .el-menu-item{
        background-color: #1d2331 !important;
    }
    .el-submenu .el-menu-item:hover{
        background-color: #39435c !important;
        color: #fff !important;
    }
</style>