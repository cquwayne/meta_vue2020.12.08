<!--第三级-->
<template>
  <el-container class="SceneFrameData" style="width: 3000px">
    <el-header>
      <SceneBasic :sceneData="sceneData"></SceneBasic>
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left" @click="goBack">上一级</el-button>
      </el-button-group>
      <el-button-group style="float:right">
<!--        抽屉显示评价结果-->
<!--        <el-button type="success" icon="el-icon-s-data" @click="drawer = true" round>查看评价结果</el-button>-->
<!--        <router-link :to="{ path: '/envAssessment'}">-->
<!--          <el-button type="success" icon="el-icon-s-data"  round>查看评价结果</el-button>-->
<!--          @click="toCalculate"-->
<!--        </router-link>-->
      </el-button-group>
      <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :with-header="false">
<!--        <br>-->
<!--        <br>-->
<!--        <span class="demonstration">铸造工艺生态影响性汇总结果</span>-->
<!--        <br>-->
<!--        <br>-->
<!--        <el-image :src="img"></el-image>-->
        <div class="el-dialog__header"><span class="el-dialog__title">铸造工艺环境影响评价结果</span><!----></div>
        <div class="el-dialog__body">
          <div data-v-4fbf1abc="">
            <div data-v-4fbf1abc="">
              <div data-v-4fbf1abc="" class="el-input el-input--small is-disabled el-input-group el-input-group--prepend"
                   style="width: 200px;">
                <el-button type="text" disabled><strong>环境影响总值：</strong></el-button>
                <el-button type="text" ><strong>472.83</strong></el-button>
                <!----><!----><!---->
              </div>
              <button data-v-4fbf1abc="" type="button" class="el-button el-button--warning el-button--mini is-plain"
                      style="float: right; margin-left: 5px;"><!----><i class="el-icon-back"></i><span>返回
                  </span></button>
              <button data-v-4fbf1abc="" type="button" class="el-button el-button--primary el-button--mini is-plain"
                      style="float: right;"><!----><i class="el-icon-printer"></i><span>导出至Word
                  </span></button>
            </div>
            <br>
            <div data-v-4fbf1abc="" style="width: 840px; overflow: auto; margin-bottom: 20px;">
              <div data-v-4fbf1abc=""
                   class="el-table el-table--fit el-table--striped el-table--border el-table--enable-row-hover el-table--enable-row-transition">
                <div class="hidden-columns">
                  <div data-v-4fbf1abc=""></div>
                  <div data-v-4fbf1abc=""></div>
                  <div data-v-4fbf1abc=""></div>
                  <div data-v-4fbf1abc=""></div>
                  <div data-v-4fbf1abc=""></div>
                </div>
                <div class="el-table__header-wrapper">
                  <table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 820px;">
                    <colgroup>
                      <col name="el-table_3_column_17" width="80">
                      <col name="el-table_3_column_18" width="150">
                      <col name="el-table_3_column_19" width="240">
                      <col name="el-table_3_column_20" width="150">
                      <col name="el-table_3_column_21" width="200">
                      <col name="gutter" width="0">
                    </colgroup>
                    <thead class="has-gutter">
                    <tr class="">
                      <th colspan="1" rowspan="1" class="el-table_3_column_17     is-leaf">
                        <div class="cell">序号</div>
                      </th>
                      <th colspan="1" rowspan="1" class="el-table_3_column_18     is-leaf">
                        <div class="cell">影响名称</div>
                      </th>
                      <th colspan="1" rowspan="1" class="el-table_3_column_19     is-leaf">
                        <div class="cell">生态影响类型</div>
                      </th>
                      <th colspan="1" rowspan="1" class="el-table_3_column_20     is-leaf">
                        <div class="cell">物质量</div>
                      </th>
                      <th colspan="1" rowspan="1" class="el-table_3_column_21     is-leaf">
                        <div class="cell">单位</div>
                      </th>
                      <th class="gutter" style="width: 0px; display: none;"></th>
                    </tr>
                    </thead>
                  </table>
                </div>
                <div class="el-table__body-wrapper is-scrolling-none">
                  <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 820px;">
                    <colgroup>
                      <col name="el-table_3_column_17" width="80">
                      <col name="el-table_3_column_18" width="150">
                      <col name="el-table_3_column_19" width="240">
                      <col name="el-table_3_column_20" width="150">
                      <col name="el-table_3_column_21" width="200">
                    </colgroup>
                    <tbody align="center" valign="middle">
                    <tr class="el-table__row">
                      <td rowspan="1" colspan="1" class="el-table_3_column_17  ">
                        <div class="cell">1</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_18  ">
                        <div class="cell">金属资源消耗</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_19  ">
                        <div class="cell">金属资源消耗潜值（ADP）</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_20  ">
                        <div class="cell">4109.90</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_21  ">
                        <div class="cell">kg Fe eq./k</div>
                      </td>
                    </tr>
                    <tr class="el-table__row el-table__row--striped">
                      <td rowspan="1" colspan="1" class="el-table_3_column_17  ">
                        <div class="cell">2</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_18  ">
                        <div class="cell">水资源消耗</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_19  ">
                        <div class="cell">水资源消耗量（WRC）</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_20  ">
                        <div class="cell">2991.43</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_21  ">
                        <div class="cell">m^3</div>
                      </td>
                    </tr>
                    <tr class="el-table__row">
                      <td rowspan="1" colspan="1" class="el-table_3_column_17  ">
                        <div class="cell">3</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_18  ">
                        <div class="cell">化石能源消耗</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_19  ">
                        <div class="cell">化石能源消耗量（FEC）</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_20  ">
                        <div class="cell">25988531.85</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_21  ">
                        <div class="cell">kg Coal-R eq./kg</div>
                      </td>
                    </tr>
                    <tr class="el-table__row el-table__row--striped">
                      <td rowspan="1" colspan="1" class="el-table_3_column_17  ">
                        <div class="cell">4</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_18  ">
                        <div class="cell">气候变化</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_19  ">
                        <div class="cell">全球变暖影响潜值（GWP）</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_20  ">
                        <div class="cell">12556520.89</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_21  ">
                        <div class="cell">kg CO2 eq./kg</div>
                      </td>
                    </tr>
                    <tr class="el-table__row">
                      <td rowspan="1" colspan="1" class="el-table_3_column_17  ">
                        <div class="cell">5</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_18  ">
                        <div class="cell">酸化影响</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_19  ">
                        <div class="cell">酸化影响潜值（AP）</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_20  ">
                        <div class="cell">709244.08</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_21  ">
                        <div class="cell">kg SO2 eq./kg</div>
                      </td>
                    </tr>
                    <tr class="el-table__row el-table__row--striped">
                      <td rowspan="1" colspan="1" class="el-table_3_column_17  ">
                        <div class="cell">6</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_18  ">
                        <div class="cell">水体富营养化</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_19  ">
                        <div class="cell">水体富营养化影响潜值（EP）</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_20  ">
                        <div class="cell">973.75</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_21  ">
                        <div class="cell">kg NO3 eq./kg</div>
                      </td>
                    </tr>
                    <tr class="el-table__row">
                      <td rowspan="1" colspan="1" class="el-table_3_column_17  ">
                        <div class="cell">7</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_18  ">
                        <div class="cell">光化学氧化</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_19  ">
                        <div class="cell">光化学氧化物产生潜值（POCP）</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_20  ">
                        <div class="cell">356844.41</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_21  ">
                        <div class="cell">kg C2H4 eq./kg</div>
                      </td>
                    </tr>
                    <tr class="el-table__row el-table__row--striped">
                      <td rowspan="1" colspan="1" class="el-table_3_column_17  ">
                        <div class="cell">8</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_18  ">
                        <div class="cell">人体生态毒性</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_19  ">
                        <div class="cell">人体毒性潜值（HTP）</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_20  ">
                        <div class="cell">27510.91</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_21  ">
                        <div class="cell">kg 1,4-DCB eq./kg</div>
                      </td>
                    </tr>
                    <tr class="el-table__row">
                      <td rowspan="1" colspan="1" class="el-table_3_column_17  ">
                        <div class="cell">9</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_18  ">
                        <div class="cell">水生生态毒性</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_19  ">
                        <div class="cell">水生生态毒性潜值（ETP）</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_20  ">
                        <div class="cell">817934.79</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_21  ">
                        <div class="cell">kg PO43 eq./kg</div>
                      </td>
                    </tr>
                    <tr class="el-table__row el-table__row--striped">
                      <td rowspan="1" colspan="1" class="el-table_3_column_17  ">
                        <div class="cell">10</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_18  ">
                        <div class="cell">可吸入无机物</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_19  ">
                        <div class="cell">可吸入无机物影响潜值（RI）</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_20  ">
                        <div class="cell">183719.54</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_3_column_21  ">
                        <div class="cell">kg PM2.5 eq./kg</div>
                      </td>
                    </tr><!----></tbody>
                  </table><!----><!----></div><!----><!----><!----><!---->
                <div class="el-table__column-resize-proxy" style="display: none;"></div>
              </div>
            </div>
            <div data-v-4fbf1abc="" id="checkCharts" style="width: 600px; height: 400px; display: none;"></div>
            <!--柱状图+环境影响类别标注-->
            <div data-v-4fbf1abc="" class="el-row" style="margin-left: -10px; margin-right: -10px;">
              <!--柱状图-->
<!--              <div data-v-4fbf1abc="" class="el-col el-col-12" style="padding-left: 10px; padding-right: 10px;">-->
<!--                <div data-v-4fbf1abc="" id="mainCharts"-->
<!--                     style="width: 600px; height: 400px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative; background: transparent;"-->
<!--                     _echarts_instance_="ec_1644739826293">-->
<!--                  <div-->
<!--                    style="position: relative; overflow: hidden; width: 600px; height: 400px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">-->
<!--                    <canvas width="660" height="440" data-zr-dom-id="zr_0"-->
<!--                            style="position: absolute; left: 0px; top: 0px; width: 600px; height: 400px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>-->
<!--                  </div>-->
<!--                  <div-->
<!--                    style="position: absolute; display: none; border-style: solid; white-space: nowrap; z-index: 9999999; transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: rgba(50, 50, 50, 0.7); border-width: 0px; border-color: rgb(51, 51, 51); border-radius: 4px; color: rgb(255, 255, 255); font: 14px / 21px &quot;Microsoft YaHei&quot;; padding: 5px; left: 186px; top: 139px;">-->
<!--                    <span-->
<!--                      style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgb(25,46,94);"></span>FEC:-->
<!--                    25,988,531.85-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
              <!--环境影响类别-->
              <div data-v-4fbf1abc="" class="el-col el-col-12" style="padding-left: 10px; padding-right: 10px;">
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
        </div>
      </el-drawer>
<!--      <el-divider></el-divider>-->
      <el-card class="hover">
        <div>
          <el-form>
            <el-row>
              <el-form-item class="line">
                <el-col>
                  <el-tag effect="dark" type="success">{{frame['sceneData']['title']}}</el-tag>
<!--                  <el-tag effect="dark" type="success">{{sceneData['title']}}</el-tag>-->
                </el-col>
              </el-form-item>
              <div class="line right">
                <el-form-item class="line">
                  <el-col>
                    <el-input v-model="outputFrameData.collectionDescription" placeholder="请输入工艺描述" class="my-input"></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item class="line">
                  <el-col>
                    <el-button type="text" @click="handleClick">
                      <i class="el-icon-circle-plus-outline"></i> 新增工艺描述
                    </el-button>
                  </el-col>
                </el-form-item>
              </div>
            </el-row>
          </el-form>
        </div>
        <el-radio-group v-model="outputIndex">
<!--          <el-tag type="warning" effect="dark">工艺描述</el-tag>-->
          <el-button type="text" effect="dark" style="margin-right:+20px">
            工艺描述
          </el-button>
          <el-radio :label="index" v-for="(item, index) in frame['outputFrameDataList']?frame['outputFrameDataList']:null" :key="index" style="margin-right:20px" size="small">
            {{item['collectionDescription']}}
          </el-radio>
          <el-button type="primary" plain size="small">编辑</el-button>
          <el-button type="info" plain size="small">删除</el-button>
        </el-radio-group>
      </el-card>
<!--      <el-divider></el-divider>-->
    </el-header>
    <el-main>
      <el-tabs v-model="activeName" type="border-card" >
        <!--工艺参数-->
        <el-tab-pane :label="tabPaneList[2].label" name="1" >
          <Pane :inputFrameDataId="inputFrameDataId" :list="frame['keyParameterDataList']?frame['keyParameterDataList']:null" :label="tabPaneList[2].label" :tableName="tabPaneList[2].tableName"></Pane>
        </el-tab-pane>
        <!--设备-->
        <el-tab-pane :label="tabPaneList[3].label" name="2">
          <Pane :inputFrameDataId="inputFrameDataId" :list="frame['deviceDataList']?frame['deviceDataList']:null" :label="tabPaneList[3].label" :tableName="tabPaneList[3].tableName"></Pane>
        </el-tab-pane>
        <!--功能单元-->
        <el-tab-pane :label="tabPaneList[4].label" name="3">
          <Pane :inputFrameDataId="inputFrameDataId" :list="frame['functionUnitDataList']?frame['functionUnitDataList']:null" :label="tabPaneList[4].label" :tableName="tabPaneList[4].tableName"></Pane>
        </el-tab-pane>
        <!--工艺对象/辅料-->
        <el-tab-pane :label="tabPaneList[0].label" name="4">
          <Pane :inputFrameDataId="inputFrameDataId" :list="objectList?objectList:null" :label="tabPaneList[0].label" :tableName="tabPaneList[0].tableName"></Pane>
        </el-tab-pane>
        <!--辅料-->
        <el-tab-pane :label="tabPaneList[8].label" name="5">
          <Pane :inputFrameDataId="inputFrameDataId" :list="assistList?assistList:null" :label="tabPaneList[8].label" :tableName="tabPaneList[8].tableName"></Pane>
        </el-tab-pane>
        <!--能源-->
        <el-tab-pane :label="tabPaneList[1].label" name="6">
          <Pane :inputFrameDataId="inputFrameDataId" :list="frame['energyDataList']?frame['energyDataList']:null" :label="tabPaneList[1].label" :tableName="tabPaneList[1].tableName"></Pane>
        </el-tab-pane>
        <!--环境影响-->
<!--        <el-tab-pane :label="tabPaneList[5].label" name="6">-->
<!--          <Pane :inputFrameDataId="inputFrameDataId" :outputFrameDataId="frame['outputFrameDataList'].length!==0?frame['outputFrameDataList'][parseInt(outputIndex)]['id']:0"-->
<!--                :list="frame['outputFrameDataList'].length!==0?frame['outputFrameDataList'][parseInt(outputIndex)]['envLoadDataList']:null" :label="tabPaneList[5].label" :tableName="tabPaneList[5].tableName"></Pane>-->
<!--        </el-tab-pane>-->
        <el-tab-pane :label="tabPaneList[5].label" name="7">
          <Pane :inputFrameDataId="inputFrameDataId" :outputFrameDataId="frame['outputFrameDataList'].length!==0?frame['outputFrameDataList'][parseInt(outputIndex)]['id']:0"
                :list="exhaustGas" :label="tabPaneList[5].label" :tableName="tabPaneList[5].tableName"></Pane>
        </el-tab-pane>
        <el-tab-pane :label="tabPaneList[6].label" name="8">
          <Pane :inputFrameDataId="inputFrameDataId" :outputFrameDataId="frame['outputFrameDataList'].length!==0?frame['outputFrameDataList'][parseInt(outputIndex)]['id']:0"
                :list="effluent" :label="tabPaneList[6].label" :tableName="tabPaneList[6].tableName"></Pane>
        </el-tab-pane>
        <el-tab-pane :label="tabPaneList[7].label" name="9">
          <Pane :inputFrameDataId="inputFrameDataId" :outputFrameDataId="frame['outputFrameDataList'].length!==0?frame['outputFrameDataList'][parseInt(outputIndex)]['id']:0"
                :list="solidWaste" :label="tabPaneList[7].label" :tableName="tabPaneList[7].tableName"></Pane>
        </el-tab-pane>
        <el-tab-pane :label="tabPaneList[9].label" name="10">
          <Pane :inputFrameDataId="inputFrameDataId" :outputFrameDataId="frame['outputFrameDataList'].length!==0?frame['outputFrameDataList'][parseInt(outputIndex)]['id']:0"
                :list="health" :label="tabPaneList[9].label" :tableName="tabPaneList[9].tableName"></Pane>
        </el-tab-pane>
<!--        <el-tab-pane :label="tabPaneList[6].label" name="7">-->
<!--          <Pane :inputFrameDataId="inputFrameDataId" :outputFrameDataId="frame['outputFrameDataList'].length!==0?frame['outputFrameDataList'][parseInt(outputIndex)]['id']:0"-->
<!--                :list="frame['outputFrameDataList'].length!==0?frame['outputFrameDataList'][parseInt(outputIndex)]['outputPartDataList']:null" :label="tabPaneList[6].label" :tableName="tabPaneList[6].tableName"></Pane>-->
<!--        </el-tab-pane>-->
      </el-tabs>
    </el-main>
  </el-container>
</template>
<script>
import api from 'api'
import Pane from './widgets/Pane'
import SceneBasic from './widgets/SceneBasic'
export default {
  name: 'SceneFrameData',
  components: {
    Pane,
    SceneBasic
  },
  data () {
    return {
      drawer: false,
      img: '../../static/photo4.jpg',
      src: "../static/photo4.jpg",
      activeName: '1',
      inputFrameDataId: 1,
      outputIndex: 0,
      outputFrameData: {
        inputFrameDataId: 1,
        collectionDescription: ''
      },
      sceneData: {},
      frame: {
        // materialDataList: [],
        // energyDataList: [],
        // deviceDataList: [],
        // keyParameterDataList: [],
        // functionUnitDataList: [],
        // outputFrameDataList: []
        // outputFrameDataList: [{
        //   envLoadDataList: [],
        //   outputPartDataList: []
        // }]
      },
      tabPaneList: [
        {
          label: '工艺对象',
          name: '1',
          tableName: 'materialData'
        },
        {
          label: '能源',
          name: '2',
          tableName: 'energyData'
        },
        {
          label: '工艺参数',
          name: '3',
          tableName: 'keyParameterData'
        },
        {
          label: '设备',
          name: '4',
          tableName: 'deviceData'
        },
        {
          label: '功能单元',
          name: '5',
          tableName: 'functionUnitData'
        },
        // {
        //   label: '环境影响',
        //   name: '6',
        //   tableName: 'envLoadData'
        // },
        {
          label: '空气污染',
          name: '6',
          tableName: 'envLoadData'
        },
        {
          label: '水污染',
          name: '7',
          tableName: 'envLoadData'
        },
        {
          label: '固废',
          name: '8',
          tableName: 'envLoadData'
        },
        {
          label: '辅料',
          name: '9',
          tableName: 'materialData'
        },
        {
          label: '职业健康',
          name: '10',
          tableName: 'envLoadData'
        }
        // {
        //   label: '输出部件',
        //   name: '7',
        //   tableName: 'outputPartData'
        // }
      ],
      objectList: [],
      assistList: [],
      exhaustGas: [],
      effluent: [],
      solidWaste: [],
      health: []
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.frame = {}
      vm.inputFrameDataId = parseInt(to.params['inputFrameDataId'])
      if (to.params['sceneData'] !== undefined) {
        vm.sceneData = to.params['sceneData']
      }
      // console.log(vm.sceneData)
      let args = {
        url: 'manage/inputFrameData/' + vm.inputFrameDataId
      }
      api.get(args).then(res => {
        vm.frame = res
        vm.sceneData = res['sceneData']
        console.log(vm.frame)
        let materials = res['materialDataList']
        materials.forEach(material => {
          if (material['materialDataCategoryId'] === 1) {
            vm.objectList.push(material)
          } else {
            vm.assistList.push(material)
          }
        })
        let envLoads = res['outputFrameDataList'][0]['envLoadDataList']
        envLoads.forEach(envLoad => {
          if (envLoad['envLoad']['envLoadCategoryId'] === 1) {
            vm.exhaustGas.push(envLoad)
          } else if (envLoad['envLoad']['envLoadCategoryId'] === 2) {
            vm.effluent.push(envLoad)
          } else if (envLoad['envLoad']['envLoadCategoryId'] === 3) {
            vm.solidWaste.push(envLoad)
          } else if (envLoad['envLoad']['envLoadCategoryId'] === 5) {
            vm.health.push(envLoad)
          }
        })
      })
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.inputFrameDataId = to.params['inputFrameDataId']
    let args = {
      url: 'manage/inputFrameData/' + this.inputFrameDataId
    }
    api.get(args).then(res => {
      this.frame = res
    })
    next()
  },
  beforeRouteLeave (to, from, next) {
    this.objectList = []
    this.assistList = []
    this.exhaustGas = []
    this.effluent = []
    this.solidWaste = []
    this.health = []
    next()
  },
  methods: {
    goBack () {
      window.history.back()
    },
    toCalculate () {
      window.history.back()
    },
    handleClick () {
      this.outputFrameData.inputFrameDataId = this.inputFrameDataId
      let args = {
        url: 'manage/outputFrameData',
        params: this.outputFrameData
      }
      api.post(args).then(res => {
        history.go(0)
      })
    }
  }
}
</script>
<style scoped>
  .line{
    display : inline-block
  }
  .my-input{
    width:300px !important;
  }
  .right{
    float :right
  }
</style>
