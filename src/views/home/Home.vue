<template>
    <el-row :gutter="40">
        <el-col :span="12">
            <el-card class="card1">
                <div class="el-icon-s-custom icon"></div>
                <div class="txt">
                    <div>11.2W</div>
                    <div class="count">推广总用户数</div>
                </div>
            </el-card>
            <el-card class="card2">
                <div class="title">交易金额统计</div>
                <div id="mchart"></div>
            </el-card>
            <el-card class="card3">
                <el-row type="flex" justify="space-between">
                    <el-col :span="12" class="title">
                        <div class="title">交易数统计</div>
                        <div id="cchart"></div>
                    </el-col>
                    <el-col :span="12" class="title">
                        <div class="title">用户设备占比</div>
                        <div id="dchart"></div>
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
        <el-col :span="12">
            <el-card class="card1">
                    <div class="el-icon-s-goods icon"></div>
                    <div class="txt">
                        <div>32.6W</div>
                        <div class="count">渠道收入</div>
                    </div>
            </el-card>
            <el-card class="card2">
                <div class="title">今日开服</div>
                <div class="serch">
                    游戏名称：<el-select v-model="value" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                    <el-button type="primary">搜索</el-button>
                </div>
                <el-table :data="tableData">
                    <el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val"></el-table-column>
                </el-table>
            </el-card>
            <el-card class="card3">
                <div class="title">开服预告</div>
                <div class="serch">
                    游戏名称：<el-select v-model="value" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                    <el-button type="primary">搜索</el-button>
                </div>
                <el-table :data="tableData">
                    <el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val"></el-table-column>
                </el-table>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default {
    methods: {
        //初始化
        initEcharts(){
            let mChart = this.$echarts.init(document.getElementById('mchart'));
            let cChart = this.$echarts.init(document.getElementById('cchart'));
            let dChart = this.$echarts.init(document.getElementById('dchart'));
            var moption = {
                color: ['#4e73de'],
                xAxis: {
                    type: 'category', //设置x轴坐标类型，必须搭配data使用
                    data: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    splitLine: { //网格线
                        lineStyle: {
                            type: 'dashed' //设置网格线类型 dotted：虚线   solid:实线
                        },
                        show: true //隐藏或显示
                    }
                },
                series: [{
                    data: [9932, 15503, 10000,16987, 10000,26953, 10000,32654, 10000,35698, 10000,29863],
                    type: 'line',
                    smooth: true
                }]
            };
            var coption = {
                color:['#4e73de'],
                xAxis:{
                    type:'category',
                    data: ['January', 'February', 'March', 'April', 'May', 'June'],
                    splitLine: {
                        show: false
                    }
                },
                yAxis:{
                    type: 'value',
                    splitLine: { //网格线
                        lineStyle: {
                            type: 'dashed' //设置网格线类型 dotted：虚线   solid:实线
                        },
                        show: true //隐藏或显示
                    }
                },
                series: [{
                    type: 'bar',
                    data: ['4896', '5100', '5236', '8563', '10014', '14630'],
                    barWidth: 15,
                }]
            };
            var doption = {
                color:['#36b9cd','#1cc98a','#4e73de'],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 10,
                    data: ['oppo', 'iphone', '华为']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['30%', '40%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 335, name: 'oppo'},
                            {value: 310, name: 'iphone'},
                            {value: 234, name: '华为'},
                        ]
                    }
                ]
            }
            mChart.setOption(moption);
            cChart.setOption(coption);
            dChart.setOption(doption);
        }
    },
    data(){
       return{
           tableData: [],
           tableLabel: {
               gameName: '游戏名称',
               gamePlat: '游戏平台',
               gameDate: '开服时间',
               gameMessage: '区服信息'
           },
           options: [{
               value: '选项1',
               label: '农药'
           }, {
               value: '选项2',
               label: '仙剑'
           }, {
               value: '选项3',
               label: '大话西游'
           }, {
               value: '选项4',
               label: '天龙八部'
           }, {
               value: '选项5',
               label: '飞车'
           }],
           value: ''
       }
    },
    mounted() {
        this.$http.get('/home/getData').then(
            res =>{
            res = res.data;
           this.tableData = res.data.tableData;
           console.log(this.tableData)
        }),
            this.initEcharts()
    }
}
</script>

<style lang="scss" scoped>

</style>
<style lang="scss">
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
    .txt .count{
        margin-right: 10px;
        font-size: 12px;
    }
    .card2, .card3{
        height: 362px;
    }
    .card2{
        margin: 20px 0;
    }
    .title{
        border-bottom: 2px solid #e2e2e2;
        height: 40px;
        padding-left: 15px;
        line-height: 40px;
        background-color: #fafafa;
    }
    .card3 .el-card__body{
        height: 100%;
    }
    .el-row--flex{
        background-color: #eff3f4;
    }
    .el-row--flex .el-col{
        background-color: #fff;
    }
    .el-row--flex .el-col:nth-child(1){
        width: 542px;
    }
    .el-row--flex .el-col:nth-child(2){
        width: 266px;
    }
    #mchart{
        width: 100%;
        height: 321px;
    }
    #cchart, #dchart{
        width: 100%;
        height: 320px;
    }
    .serch{
        padding:16px 0 0 18px;
        .el-button{
            margin-left: 30px;
        }
    }
    .el-table__header-wrapper{
        padding-top: 26px;
    }
    .cell{
        text-align: center;
    }
</style>
