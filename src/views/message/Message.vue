<template>
    <div id="message">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: current.path }">消息中心</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/" v-if="current != null">{{current.label}}</a></el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'Message',
        computed: {
            ...mapState({
                current : state => state.tab.currentMenu
            })
        }
    }
</script>

<style scoped>

</style>
