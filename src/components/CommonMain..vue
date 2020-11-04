<template>
    <!--<el-breadcrumb separator-class="el-icon-arrow-right">-->
        <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
        <!--<el-breadcrumb-item><a href="/" v-if="current != null">{{current.label}}</a></el-breadcrumb-item>-->
    <!--</el-breadcrumb>-->
    <el-row :gutter="40">
        <el-col :span="12">
            <el-card class="card1">
                <div class="el-icon-s-custom icon"></div>
                <div class="txt">
                    <div>11.6W</div>
                    <div>推广总用户数</div>
                </div>
            </el-card>
            <el-card class="card2">卡片2</el-card>
            <el-card class="card3">卡片3</el-card>
        </el-col>
        <el-col :span="12">
            <el-card class="card1">
                    <div class="el-icon-s-goods icon"></div>
                    <div class="txt">
                        <div>39.8W</div>
                        <div>渠道收入</div>
                    </div>
            </el-card>
            <el-card class="card2">卡片2</el-card>
            <el-card class="card3">卡片3</el-card>
        </el-col>
    </el-row>
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

<style lang="scss" scoped>

</style>
<style lang="scss">
    .el-breadcrumb{
        height: 50px;
        background-color: #fafafa;
        line-height: 50px;
        padding-left: 15px;
        border-bottom: 2px solid #e2e2e2;
        font-size: 15px;
    }
    .el-main{
        background-color: #eff3f4;
    }
    .el-row{
        height: 100%;
        display: flex;
        justify-content: space-between;
        .el-col{
            width: 830px;
            height: 100%;
            padding: 0 !important;
            display: flex;
            flex-direction: column;
            .el-card__body{
                padding: 0 !important;
                border: 0 !important;
            }
        }
    }
    .el-card{
        border: none;
    }
    .card1{
        height: 72px;
        line-height: 24px;
        font-size: 20px;
    }
    .card1 .icon{
        height: 72px;
        float: left;
        margin: 24px 0 0 120px;
    }
    .card1 .txt{
        height: 72px;
        float: right;
        line-height: 35px;
        margin-right: 125px;
    }
    .card2, .card3{
        height: 362px;
    }
    .card2{
        margin: 20px 0;
    }
</style>
