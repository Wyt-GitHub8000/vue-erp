<template>
    <div id="game">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: current.path }">游戏管理</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/" v-if="current != null">{{current.label}}</a></el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        computed: {
            ...mapState({
                current : state => state.tab.currentMenu
            })
        }
    }
</script>

<style  lang="scss" scoped>
    .el-breadcrumb{
        height: 50px;
        background-color: #fafafa;
        line-height: 50px;
        padding-left: 15px;
        border-bottom: 2px solid #e2e2e2;
        font-size: 15px;
    }
</style>
