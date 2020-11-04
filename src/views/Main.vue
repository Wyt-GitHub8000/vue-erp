<template>
    <el-container style="height: 100%">
        <el-header><common-header></common-header></el-header>
        <el-container>
            <el-aside width="200px"><common-aside></common-aside></el-aside>
            <el-main><router-view></router-view></el-main>
        </el-container>
    </el-container>
</template>

<script>
    import CommonHeader from '../components/CommonHeader.vue'
    import CommonAside from '../components/CommonAside.vue'
    import CommonMain from '../components/CommonMain..vue'
    import Home from './home/Home.vue'

    export default {
        name: 'Main',
        components: {
            CommonHeader,
            CommonAside,
            CommonMain,
        }
    }
</script>

<style lang="scss" scoped>
    .el-header{
        background-color: #2b3443;
    }
</style>