<!--第一级-->
<template>
  <el-container class="SceneDataList" style="width: 2000px">
    <div style="margin:0 6px">
      <el-row :gutter="12" class="hover">
        <el-col :span="15">
          <el-input class="input-with-select" placeholder="搜索工艺场景" v-model="searchForm.content">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="6" style="text-align:right">
<!--          <el-button type="primary" @click="handleSceneDrawer(null)" :disabled="postSceneVisible">-->
          <el-button type="primary" @click="handleSceneDrawer(null)">
            <i class="el-icon-circle-plus-outline"></i>新增工艺场景
          </el-button>     <!--以弹窗（drawer抽屉）的形式新增工艺场景-->
        </el-col>
      </el-row>
      <el-divider></el-divider>
    </div>
    <el-main>
      <el-table
        :data="sceneDataList.filter(data => !searchForm.content || data.title.toLowerCase().includes(searchForm.content.toLowerCase()))"
        style="width: 100%"
        >
        <el-table-column
          label="工艺场景名称"
          width="230">
          <template slot-scope="scope">
            {{scope.row['title']}}
          </template>
        </el-table-column>
        <el-table-column
          label="工艺类型"
          width="110">
          <template slot-scope="scope">
            {{scope.row['category']['title']}}
          </template>
        </el-table-column>
        <el-table-column
          label="工艺对象与辅料"
          width="200">
          <template slot-scope="scope">
            <div v-for="item in scope.row['inputFrameDataList'][0]['materialDataList']" :key="item.index" class="text item">
              {{item['material']?item['material']['title']:''}}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="主要设备"
          width="180">
          <template slot-scope="scope" v-if="scope.row['inputFrameDataList']">
            <div v-for="item in scope.row['inputFrameDataList'][0]['deviceDataList']" :key="item.index" class="text item">
              {{item['device']?item['device']['title']:''}}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="创建时间"
          width="110">
          <template slot-scope="scope">
            {{ scope.row['createdAt'] }}
          </template>
        </el-table-column>
<!--        <el-table-column-->
<!--          label="更新时间"-->
<!--          width="150">-->
<!--          <template slot-scope="scope">-->
<!--            {{ scope.row['updatedAt'] }}-->
<!--          </template>-->
<!--        </el-table-column>-->
        <el-table-column label="操作" width="170">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleDetailDrawer(scope.$index, scope.row)">
              场景数据
            </el-button>
            <el-button size="mini" @click="handleSceneDrawer(scope.row)" :disabled="postSceneVisible">
              编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="categoryRes.currentPage"
        :page-sizes="[5, 7, 10]"
        :page-size="categoryRes.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="categoryRes.count">
      </el-pagination>
    </el-footer>
    <el-drawer
      class="manageEditDrawer"
      title="新增工艺场景"
      :visible.sync="postSceneDrawer"
      :direction="'rtl'"
      :size="'50%'">
      <div style="max-height:700px;overflow-y:auto;">
        <el-form ref="postForm" v-model="postForm" label-width="150px">
          <el-row>
            <el-tag class="title" type="success">场景基本信息</el-tag>
          </el-row>
          <el-form-item label="场景分类" prop="sceneData.categoryId">
            <el-cascader
              v-model="postCategoryList"
              clearable
              :options="categories"
              :props="{ checkStrictly: true, expandTrigger: 'hover', label: 'title', value: 'id' }">
            </el-cascader>  <!--级联选择器，选择场景分类，三级场景分类-->
          </el-form-item>
          <el-form-item label="场景名称" prop="sceneData.title">
            <el-col :span="20">
              <el-input v-model="postForm.sceneData.title"></el-input>
            </el-col>
          </el-form-item>
<!--          <el-form-item label="功能单元" prop="sceneData.description">-->
<!--            <el-col :span="20">-->
<!--              <el-input type="textarea" autosize v-model="postForm.sceneData.description"></el-input>-->
<!--            </el-col>-->
<!--          </el-form-item>-->
          <el-row>
            <el-tag class="title" type="primary">场景物料种类</el-tag>
          </el-row>
          <el-form-item label="所用物料" prop="materialDataList">
            <el-select v-model="postForm.materialDataList" multiple filterable placeholder="请选择">
              <el-option
                v-for="item in materialOptions"
                :key="item.index"
                :label="item.title"
                :value="item.id">
              </el-option>
            </el-select>
            <el-button type="text" @click="handleManageDrawer('material','物料')">
              缺少数据？前往添加
            </el-button>
          </el-form-item>
          <el-row>
            <el-tag class="title" type="warning">场景设备种类</el-tag>
          </el-row>
          <el-form-item label="所用设备" prop="deviceDataList">
            <el-select v-model="postForm.deviceDataList" multiple filterable placeholder="请选择">
              <el-option
                v-for="item in deviceOptions"
                :key="item.index"
                :label="item.title"
                :value="item.id">
              </el-option>
            </el-select>
            <el-button type="text" @click="handleManageDrawer('device','设备')">
              缺少数据？前往添加
            </el-button>
          </el-form-item>
          <el-row>
            <el-tag class="title" type="info">场景关键工艺参数</el-tag>
          </el-row>
          <el-form-item label="关键工艺参数" prop="keyParameterDataList">
            <el-col :span="20">
              <el-input v-model="postForm.keyParameterDataList[0]" placeholder="请填写"></el-input>
            </el-col>
            <el-col :span="4">
              <el-button size="small" type="info" icon="el-icon-plus" @click="addItem"></el-button>
            </el-col>
          </el-form-item>
          <div v-for="(item, index) in postForm.keyParameterDataList" :key="index">
            <el-form-item label="关键工艺参数" v-if="index !== 0">
              <el-col :span="20">
                <el-input v-model="postForm.keyParameterDataList[index]" placeholder="请填写"></el-input>
              </el-col>
              <el-col :span="4">
                <el-button size="small" type="info" icon="el-icon-delete" @click="deleteItem(item, index)"></el-button>
              </el-col>
            </el-form-item>
          </div>
          <el-row>
            <el-button type="primary" @click="handlePost('postForm')" class="buttonType">保存</el-button>
          </el-row>  <!--点击创建调用提交方法handlePost-->
        </el-form>
      </div>
    </el-drawer>
    <el-drawer
      class="AddManageDataDrawer"
      :title="'新增'+addManageData.label"
      :visible.sync="addManageData.visible"
      :direction="'ltr'"
      :size="'50%'">
      <AddManageData :tableName="addManageData.tableName"></AddManageData>
    </el-drawer>
  </el-container>
</template>
<script>
import api from 'api'
import AddManageData from './widgets/AddManageData'
export default {
  name: 'SceneDataList',
  components: {
    AddManageData
  },
  computed: {
    categories () {
      return this.$store.state.categories[0].children
    },
    // 将baseTableMa中的“材料”赋给materialOptions
    materialOptions () {
      return this.$store.state.baseTableMap['material']
    },
    // 将baseTableMa中的“设备”赋给deviceOptions
    deviceOptions () {
      return this.$store.state.baseTableMap['device']
    }
  },
  data () {
    return {
      postSceneVisible: false,
      postCategoryList: [],
      selectScene: {
        category: {}
      },
      categoryId: null,
      searchForm: {
        content: '',
        category: '',
        selectCategoryId: null
      },
      // searchRules: {},
      categoryRes: {
        count: 1,
        currentPage: 1,
        pages: 1,
        pageSize: 1,
        data: [],
        category: {}
      },
      sceneDataList: [],
      postSceneDrawer: false,
      postForm: {
        sceneData: {
          title: '',
          description: '',
          categoryId: 1,
          categoryRootId: 0,
          userId: 1,
          inputFrameData: {
            materialDataList: [],
            deviceDataList: [],
            keyParameterDataList: []
          }
        },
        materialDataList: [],
        deviceDataList: [],
        keyParameterDataList: []
      },
      postSceneRules: {},
      addScene: false,
      addManageData: {
        tableName: '',
        visible: false,
        label: ''
      }
    }
  },
  // beforeRouteEnter是新进入的一个路由，比如进入/login登录界面，会触发beforeRouteEnter这个钩子；
  // 而beforeRouteUpdate是路由更新时触发，从主页进入登录界面不会触发这个钩子函数，一个父路由下的子路由跳转会触发这个钩子函数。
  beforeRouteEnter (to, from, next) {
    // 因为当钩子执行前，组件实例还没被创建
    // vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
    next(vm => {
      // let categoryId = to.query['categoryId'] ? to.query['categoryId'] : 1
      let query = {
        // 三目运算符
        categoryId: to.params['categoryId'] !== undefined ? to.params.categoryId : localStorage.getItem('cateId'),
        // categoryId: to.query['categoryId'] ? to.query.categoryId : to.params.categoryId,
        currentPage: to.query['currentPage'] ? to.query['currentPage'] : 1,
        pageSize: to.query['pageSize'] ? to.query['pageSize'] : 7
      }
      if (to.params['sceneDataList'] !== undefined) {
        vm.sceneDataList = to.params['sceneDataList']
        vm.postSceneVisible = true
        localStorage.setItem('sceneDataList', vm.sceneDataList)
      } else if (localStorage.getItem('sceneDataList') !== undefined) {
        // console.log(localStorage.getItem('sceneDataList'))
        if (localStorage.getItem('sceneDataList') !== null) {
          vm.postSceneVisible = true
          vm.sceneDataList = JSON.parse(localStorage.getItem('sceneDataList'))
          localStorage.removeItem('sceneDataList')
        } else {
          // vm.postSceneVisible = false
          let args = {
            url: 'category/',
            params: query
          }
          api.get(args).then(res => {
            vm.categoryRes = res
            vm.sceneDataList = res.data
          })
        }
      } else {
        // vm.postSceneVisible = false
        let args = {
          url: 'category/',
          params: query
        }
        api.get(args).then(res => {
          vm.categoryRes = res
          vm.sceneDataList = res['data']
        })
      }
    })
  },
  beforeRouteUpdate (to, from, next) {
    // let categoryId = to.query['category'] ? to.query['category'] : 1
    this.postSceneVisible = false
    let query = {
      // categoryId: to.query['categoryId'] ? to.params.categoryId : to.params.categoryId,
      categoryId: to.query['categoryId'] ? to.query['categoryId'] : to.params.categoryId,
      currentPage: to.query['currentPage'] ? to.query['currentPage'] : 1,
      pageSize: to.query['pageSize'] ? to.query['pageSize'] : 7
    }
    console.log('gengxin')
    let args = {
      // url: 'category/' + categoryId,
      url: 'category/',
      params: query
    }
    api.get(args).then(res => {
      this.categoryRes = res
      this.sceneDataList = res['data']
    })
    next()
  },
  // beforeRouteLeave (to, from, next) {
  //   if (to !== 'SceneData') {
  //     localStorage.removeItem('sceneDataList')
  //   }
  // },
  methods: {
    handleSizeChange (val) {
      // let routeQuery = this.$route['query']
      let query = {
        categoryId: localStorage.getItem('cateId'),
        currentPage: this.categoryRes.currentPage,
        pageSize: val
      }
      let args = {
        url: 'category/',
        params: query
      }
      api.get(args).then(res => {
        this.categoryRes = res
        this.sceneDataList = res['data']
      })
    },
    handleCurrentChange (val) {
      // let routeQuery = this.$route['query']
      let query = {
        categoryId: localStorage.getItem('cateId'),
        currentPage: val,
        pageSize: this.categoryRes.pageSize
      }
      let args = {
        url: 'category/',
        params: query
      }
      api.get(args).then(res => {
        this.categoryRes = res
        this.sceneDataList = res['data']
      })
    },
    handleDetailDrawer (index, row) {
      this.$router.push({name: 'SceneData', params: {sceneDataId: row['id']}})
    },
    handlePost () {
      if (this.postForm.sceneData['id'] === undefined) {
        this.postSceneDrawer = false
        this.postForm.sceneData.categoryId = this.postCategoryList[this.postCategoryList.length - 1]
        this.postForm.sceneData.categoryRootId = this.postCategoryList[0] // 一级分类ID
        this.postForm.sceneData.userId = JSON.parse(localStorage.getItem('auth')).id
        this.postForm.sceneData.inputFrameData.materialDataList = this.postForm.materialDataList
        this.postForm.sceneData.inputFrameData.deviceDataList = this.postForm.deviceDataList
        this.postForm.sceneData.inputFrameData.keyParameterDataList = this.postForm.keyParameterDataList
        // console.log(this.postForm.keyParameterDataList)
        // console.log(this.postForm)
        api.post({url: 'manage/sceneData', params: this.postForm}).then(result => {
          if (result > 0) {
            this.$router.push({name: 'SceneData', params: {sceneDataId: result}})
          } else if (result === 0) {
            alert('场景重复！请在已存在的场景下添加输入输出数据！')
            // history.go(0)
            this.$router.push({name: 'SceneData', params: {sceneDataId: result}})
          } else {
            this.$message.error('新增失败！')
          }
        })
      } else {
        // console.log(this.postForm.sceneData)
        this.postSceneDrawer = false
        api.put({url: 'manage/sceneData', params: this.postForm.sceneData}).then(res => {
          this.$router.push({name: 'SceneData', params: {sceneDataId: this.postForm.sceneData['id']}})
          // history.go(0)
          // if (res > 0) {
          //   this.postForm = {}
          // }
        })
      }
    },
    addItem () {
      this.postForm.keyParameterDataList.push('')
    },
    deleteItem (item, index) {
      this.postForm.keyParameterDataList.splice(index, 1)
    },
    handleSceneDrawer (row) {
      if (row) {
        // console.log(row)
        this.postForm.sceneData = row
        this.postForm.sceneData['id'] = row['id']
        // this.postForm.sceneData['title'] = row['title']
        // this.postForm.sceneData['description'] = row['description']
        // this.postForm.sceneData['categoryId'] = row['categoryId']
      }
      this.postSceneDrawer = true
    },
    handleManageDrawer (tableName, label) {
      this.addManageData.tableName = tableName
      this.addManageData.visible = true
      this.addManageData.label = label
    }
  }
}
</script>
<style scoped lang="scss">
  .SceneDataList{
    height: 100%;
    max-height: 100%;
    .input-with-select{
      border-style: ridge;
      border-color: cornflowerblue;
      //border-width: 5px
    }
    .hover {
      margin-top: 20px;
      padding: 0
    }
    .title{
      display: inline-block;
      font-weight: bolder;
      font-size: large;
      padding: 0 10px;
      margin: 0 0 0 10px;
    }
    .buttonType{
      display: inline-block;
      font-weight: bolder;
      font-size: larger;
      margin: 0 0 0 10px;
      /*margin: 10px 20px 20px 370px;*/
    }
  }
</style>
