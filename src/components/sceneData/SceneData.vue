<!--第二级页面-->
<template>
  <el-container class="SceneData" style="width: 2000px">
    <el-header>
        <SceneBasic :sceneData="sceneData"></SceneBasic>
        <el-button-group>
           <el-button type="primary" icon="el-icon-arrow-left" @click="postInputFrame">上一级</el-button>
        </el-button-group>
      <el-divider></el-divider>
      <el-button type="primary" @click="postInputFrame">新增数据条目</el-button>
    </el-header>
    <el-main>
      <el-table :data="sceneData['inputFrameDataList']" stripe style="width: 100%">
        <el-table-column
          label="工艺对象/辅料"
          width="160">
          <template slot-scope="scope">
            <div v-for="item in scope.row['materialDataList']" :key="item.index" class="text item">
<!--              {{item['material']['title']}} ： {{item['value']}} {{item['unit']['title']}}-->
              {{item['material']?item['material']['title']:''}} ： {{item['value']?item['value']:''}} {{item['unit']?item['unit']['title']:''}}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="能源"
          width="140">
          <template slot-scope="scope">
            <div v-for="item in scope.row['energyDataList']" :key="item.index" class="text item">
<!--              {{item['energy']['title']}} ： {{item['value']}} {{item['unit']['title']}}-->
              {{item['energy']?item['energy']['title']:''}} ： {{item['value']?item['value']:''}} {{item['unit']?item['unit']['title']:''}}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="设备"
          width="140">
          <template slot-scope="scope">
            <div v-for="item in scope.row['deviceDataList']" :key="item.index" class="text item">
              {{item['device']?item['device']['title']:''}}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="工艺参数"
          width="170">
          <template slot-scope="scope">
            <div v-for="item in scope.row['keyParameterDataList']" :key="item.index" class="text item">
              {{item['title']?item['title']:''}} :  {{item['description']?item['description']:''}}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="工艺描述"
          width="160">
          <template slot-scope="scope">
            <div v-if="scope.row['outputFrameDataList']" v-for="item in scope.row['outputFrameDataList']" :key="item.index" class="text item">
              {{item['collectionDescription']?item['collectionDescription']:''}}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="功能单元"
          width="140">
          <template slot-scope="scope">
            <div v-for="item in scope.row['functionUnitDataList']" :key="item.index" class="text item">
              {{item['functionDescription']?item['functionDescription']:''}}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="环境负荷"
          width="190">
          <template slot-scope="scope">
            <div v-for="item in scope.row['outputFrameDataList'][0]['envLoadDataList']" :key="item.index" class="text item">
              {{item['envLoad']?item['envLoad']['title']:''}} ： {{item['value']}} {{item['unit']?item['unit']['title']:''}}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="90">
          <template slot-scope="scope">
            <el-popover
              placement="right"
              trigger="hover">
              <el-table :data="scope.row['outputFrameDataList']">
<!--                <el-table-column-->
<!--                  label="工艺描述"-->
<!--                  width="180">-->
<!--                  <template slot-scope="scope">-->
<!--                    {{scope.row['collectionDescription']}}-->
<!--                  </template>-->
<!--                </el-table-column>-->
                <el-table-column
                  label="环境负荷"
                  width="220">
                  <template slot-scope="scope">
                    <div v-for="item in scope.row['envLoadDataList']" :key="item.index" class="text item">
                      {{item['envLoad']?item['envLoad']['title']:''}} ： {{item['value']}} {{item['unit']?item['unit']['title']:''}}
                    </div>
                  </template>
                </el-table-column>
<!--                <el-table-column-->
<!--                  label="输出部件"-->
<!--                  width="180">-->
<!--                  <template slot-scope="scope">-->
<!--                    <div v-for="item in scope.row['outputPartDataList']" :key="item.index" class="text item">-->
<!--                      {{item['title']}}-->
<!--                    </div>-->
<!--                  </template>-->
<!--                </el-table-column>-->
              </el-table>
              <el-button @click="handleDetail(scope.row)" slot="reference" size="mini">负荷数据</el-button>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>
<script>
import api from 'api'
import SceneBasic from './widgets/SceneBasic'
export default {
  name: 'SceneData',
  components: {
    SceneBasic
  },
  data () {
    return {
      sceneData: {},
      postInputFrameData: {
        sceneDataId: null,
        materialDataList: [],
        deviceDataList: [],
        keyParameterDataList: []
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      let sceneDataId = to.params['sceneDataId']
      vm.postInputFrameData.materialDataList = []
      vm.postInputFrameData.deviceDataList = []
      vm.postInputFrameData.keyParameterDataList = []
      let args = {
        url: 'manage/sceneData/' + sceneDataId
      }
      api.get(args).then(res => {
        vm.sceneData = res
        console.log(res)
        vm.postInputFrameData.sceneDataId = vm.sceneData['id']
        if (vm.sceneData['inputFrameDataList'].length !== 0) {
          vm.sceneData['inputFrameDataList'][0]['materialDataList'].forEach((item) => {
            vm.postInputFrameData.materialDataList.push(item['materialId'])
          })
          vm.sceneData['inputFrameDataList'][0]['deviceDataList'].forEach((item) => {
            vm.postInputFrameData.deviceDataList.push(item['deviceId'])
          })
          vm.sceneData['inputFrameDataList'][0]['keyParameterDataList'].forEach((item) => {
            vm.postInputFrameData.keyParameterDataList.push(item['title'])
          })
        }
      })
    })
  },
  methods: {
    handleDetail (row) {
      let params = {
        sceneDataId: row.sceneDataId,
        sceneData: this.sceneData,
        inputFrameDataId: row.id
      }
      this.$router.push({name: 'SceneFrameData', params: params})
    },
    handleDelete (index, row) {
      // console.log(index, row)
    },
    postInputFrame () {
      if (this.sceneData['inputFrameDataList'].length !== 0) {
        let args = {
          url: 'manage/inputFrameData',
          params: this.postInputFrameData
        }
        // console.log(this.postInputFrameData)
        api.post(args).then(res => {
          if (res > 0) {
            // this.postInputFrameData = null
            history.go(0)
          } else {
            alert('新增失败！！！')
          }
        })
      } else {
        let args = {
          url: 'manage/inputFrameData',
          params: this.postInputFrameData
        }
        api.post(args).then(res => {
          if (res > 0) {
            let params = {
              sceneDataId: this.sceneData['id'],
              sceneData: this.sceneData,
              inputFrameDataId: res
            }
            this.$router.push({name: 'SceneFrameData', params: params})
          } else {
            alert('新增失败！！！')
          }
        })
      }
    }
  }
}
</script>
<style scoped>

</style>
