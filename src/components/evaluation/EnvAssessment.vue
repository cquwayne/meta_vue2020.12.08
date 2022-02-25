<!--页面待完善-->
<template>
  <el-container class="EnvAssessment" style="width: 3000px">
    <el-header>
    </el-header>
    <el-main>
      <div class="el-dialog__header" :style="{ height: '0px'}"><span class="el-dialog__title"><strong>铸造工艺环境影响评价结果</strong></span><!----></div>
      <div class="el-dialog__body">
        <div data-v-4fbf1abc="">
          <!--------------->
          <!--总值+两个按钮-->
          <div data-v-4fbf1abc="">
            <div data-v-4fbf1abc="" class="el-input el-input--small is-disabled el-input-group el-input-group--prepend"
                 style="width: 200px;">
              <el-button type="text" disabled><strong>环境影响总值：</strong></el-button>
              <el-button type="text" ><strong>472.83</strong></el-button>
              <!----><!----><!---->
            </div>
            <button data-v-4fbf1abc="" type="button" class="el-button el-button--warning el-button--mini is-plain"
                    style="float: right; margin-left: 5px;" @click="goBack"><!----><i class="el-icon-back"></i><span>返回
                  </span></button>
            <button data-v-4fbf1abc="" type="button" class="el-button el-button--primary el-button--mini is-plain"
                    style="float: right;"><!----><i class="el-icon-printer"></i><span>导出至Word
                  </span></button>
          </div>
          <!----------->
          <!--表头+表身-->
          <el-table
            :data="tableData"
            border
            style="width: 100%"
            :row-style="{height:'0px'}"
            :cell-style="{padding:'3px'}">
            <el-table-column
              prop="id"
              label="序号"
              width="50" align="center">
            </el-table-column>
            <el-table-column
              prop="name"
              label="影响名称"
              width="180" align="center">
            </el-table-column>
            <el-table-column
              prop="type"
              label="生态影响类型" width="300" align="center">
            </el-table-column>
            <el-table-column
              prop="quality"
              label="物质量" width="200" align="center">
            </el-table-column>
            <el-table-column
              prop="unit"
              label="单位" align="center">
            </el-table-column>
          </el-table>
          <div data-v-4fbf1abc="" id="checkCharts" style="width: 600px; height: 400px; display: none;"></div>
        </div>
        <!----------------------->
        <!--柱状图+环境影响类别标注-->
        <br>
        <div data-v-4fbf1abc="" class="el-row" style="margin-right: -10px; width: 900px; height:300px;">
          <!--环境影响类别-->
          <div id="myChart" style="float:left;width:650px;height:300px;"></div>
          <!--图例-->
          <div data-v-4fbf1abc="" id="3" style="float:right;width:240px;height:300px;">
            <div data-v-4fbf1abc="" style="margin-top: 50px;">
              <div data-v-4fbf1abc="">
                <div data-v-4fbf1abc=""
                     style="height: 10px; width: 20px; background-color: rgb(164, 205, 238); border: 1px solid; display: inline-block; margin-right: 20px;"></div>
                <div data-v-4fbf1abc="" style="display: inline-block; text-align: center;">金属资源消耗潜值(ADP)</div>
              </div>
              <div data-v-4fbf1abc="">
                <div data-v-4fbf1abc=""
                     style="height: 10px; width: 20px; background-color: rgb(42, 170, 227); border: 1px solid; display: inline-block; margin-right: 20px;"></div>
                <div data-v-4fbf1abc="" style="display: inline-block; text-align: center;">水资源消耗量(WRC)</div>
              </div>
              <div data-v-4fbf1abc="">
                <div data-v-4fbf1abc=""
                     style="height: 10px; width: 20px; background-color: rgb(25, 46, 94); border: 1px solid; display: inline-block; margin-right: 20px;"></div>
                <div data-v-4fbf1abc="" style="display: inline-block; text-align: center;">化石能源消耗量(FEC)</div>
              </div>
              <div data-v-4fbf1abc="">
                <div data-v-4fbf1abc=""
                     style="height: 10px; width: 20px; background-color: rgb(195, 229, 235); border: 1px solid; display: inline-block; margin-right: 20px;"></div>
                <div data-v-4fbf1abc="" style="display: inline-block; text-align: center;">全球变暖影响潜值(GWP)</div>
              </div>
              <div data-v-4fbf1abc="">
                <div data-v-4fbf1abc=""
                     style="height: 10px; width: 20px; background-color: rgb(220, 20, 60); border: 1px solid; display: inline-block; margin-right: 20px;"></div>
                <div data-v-4fbf1abc="" style="display: inline-block; text-align: center;">酸化影响潜值(AP)</div>
              </div>
              <div data-v-4fbf1abc="">
                <div data-v-4fbf1abc=""
                     style="height: 10px; width: 20px; background-color: rgb(47, 79, 79); border: 1px solid; display: inline-block; margin-right: 20px;"></div>
                <div data-v-4fbf1abc="" style="display: inline-block; text-align: center;">水体富营养化影响潜值(EP)</div>
              </div>
              <div data-v-4fbf1abc="">
                <div data-v-4fbf1abc=""
                     style="height: 10px; width: 20px; background-color: rgb(0, 100, 0); border: 1px solid; display: inline-block; margin-right: 20px;"></div>
                <div data-v-4fbf1abc="" style="display: inline-block; text-align: center;">光化学氧化物产生潜值(POCP)</div>
              </div>
              <div data-v-4fbf1abc="">
                <div data-v-4fbf1abc=""
                     style="height: 10px; width: 20px; background-color: rgb(255, 255, 0); border: 1px solid; display: inline-block; margin-right: 20px;"></div>
                <div data-v-4fbf1abc="" style="display: inline-block; text-align: center;">人体毒性潜值(HTP)</div>
              </div>
              <div data-v-4fbf1abc="">
                <div data-v-4fbf1abc=""
                     style="height: 10px; width: 20px; background-color: rgb(210, 105, 30); border: 1px solid; display: inline-block; margin-right: 20px;"></div>
                <div data-v-4fbf1abc="" style="display: inline-block; text-align: center;">水生生态毒性潜值(ETP)</div>
              </div>
              <div data-v-4fbf1abc="">
                <div data-v-4fbf1abc=""
                     style="height: 10px; width: 20px; background-color: rgb(0, 0, 0); border: 1px solid; display: inline-block; margin-right: 20px;"></div>
                <div data-v-4fbf1abc="" style="display: inline-block; text-align: center;">可吸入无机物影响潜值(RI)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'EnvAssessment',
  data (){
    return{
      img: '../../static/photo4.jpg',
      tableData: [{
        id: '1',
        name: '金属资源消耗',
        type: '金属资源消耗潜值（ADP）',
        quality: '4109.90',
        unit: 'kg Fe eq./k'
      },{
        id: '2',
        name: '水资源消耗',
        type: '水资源消耗量（WRC）',
        quality: '2991.43',
        unit: 'm^3'
      },{
        id: '3',
        name: '化石能源消耗',
        type: '化石能源消耗量（FEC）',
        quality: '25988531.85',
        unit: 'kg Coal-R eq./kg'
      },{
        id: '4',
        name: '气候变化',
        type: '全球变暖影响潜值（GWP）',
        quality: '12556520.89',
        unit: 'kg CO2 eq./kg'
      },{
        id: '5',
        name: '酸化影响',
        type: '酸化影响潜值（AP）',
        quality: '709244.08',
        unit: 'kg SO2 eq./kg'
      },{
        id: '6',
        name: '水体富营养化',
        type: '水体富营养化影响潜值（EP）',
        quality: '973.75',
        unit: 'kg NO3 eq./kg'
      },{
        id: '7',
        name: '光化学氧化',
        type: '光化学氧化物产生潜值（POCP）',
        quality: '356844.41',
        unit: 'kg C2H4 eq./kg'
      },{
        id: '8',
        name: '人体生态毒性',
        type: '人体毒性潜值（HTP）',
        quality: '27510.91',
        unit: 'kg 1,4-DCB eq./kg'
      },{
        id: '9',
        name: '水生生态毒性',
        type: '水生生态毒性潜值（ETP）',
        quality: '817934.79',
        unit: 'kg PO43 eq./kg'
      },{
        id: '10',
        name: '可吸入无机物',
        type: '可吸入无机物影响潜值（RI）',
        quality: '183719.54',
        unit: 'kg PM2.5 eq./kg'
      }]
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: '机床生态影响汇总结果柱状图\n' },
        tooltip: {},
        xAxis: {
          axisLabel:{interval: 0},
          data: ["ADP","WRC","FEC","GWP","AP","EP","POCP","HTP","ETP","RI"]
        },
        yAxis: {},
        //图例
        // legend: {
        //   data:['物质量']
        // },
        series: [{
          name: '物质量',
          type: 'bar',
          data: [4109.9, 2991.43, 25988.85, 12556.89, 70924.08, 973.75, 973.75, 27510.91, 81794.79, 18319.54],
          itemStyle: {
            normal: {
              //这里是重点
              color: function(params) {
                //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                var colorList = ['#A4CDEE', '#2AAAE3', '#192E5E', '#C3E5EB', '#DC143C','#2F4F4F', '#006400','#FFFF00','#D2691E','#000000'];
                return colorList[params.dataIndex]
              }
            }
          }
        }]
      });
    },
    goBack () {
      window.history.back()
    },
  }
}
</script>

<style scoped>

</style>
