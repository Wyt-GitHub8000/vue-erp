<template>
    <header>
        <div style="color: #fff">后台管理系统</div>
        <el-button type="primary" icon="el-icon-menu" size="small"></el-button>
        <div class="l-content"></div>
        <div class="r-content">
            <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <img :src="userImg" class="user">
      </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-user-solid">个人中心</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-message-solid">消息提醒</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-close">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                userImg:require('../assets/images/user-login.jpg')
            }
        }
    }
</script>

<style lang="scss" scoped>
    header{
        display: flex;//保证元素垂直居中
        align-items: center;
        height:100%;
        position: relative;
    }
    .el-button{
        position: absolute;
        left: 163px;
        background-color: #2b3443;
        border: none;
    }
    .r-content{
        position: absolute;
        right: 0;
        .user{
            width: 40px;
            height: 40px;
            border-radius: 50% 50%;
        }
    }
</style>