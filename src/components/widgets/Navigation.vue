<template>
  <div class="Navigation">
    <el-tree
     :data="sceneTree"
     :props="defaultProps"
     icon-class="el-icon-folder-opened"
     @node-click="handleScene">
    </el-tree>
    <el-tree
     :data="baseTree"
     :props="defaultProps"
     icon-class="el-icon-folder-opened"
     @node-click="handleBase">
    </el-tree>
    <el-tree
     :data="navTree"
     :props="defaultProps"
     icon-class="el-icon-folder-opened"
     @node-click="handleNodeClick">
    </el-tree>
  </div>
</template>
<script>
export default {
  name: 'Navigation',
  computed: {
    // baseAuth () {
    //   return this.$store.state.auth['baseAuth']
    // },
    sceneTree () {
      let temp = this.$store.state.categories
      // 权限管理控制显示的库的个数
      // let baseList = temp[0]['children']
      // baseList.forEach(base => {
      //  if (base['title'] === '机加工') {
      //    baseList.remove(base)
      //  }
      // })
      // return [{
      //   title: '工艺场景',
      //   id: null,
      //   name: 'SceneDataList',
      //   children: baseList
      // }]
      // }]
      let cat
      console.log(localStorage.getItem('cateId'))
      if (localStorage.getItem('cateId') === '2') {
        console.log(0)
        cat = temp[0]['children'][0]['children']
      } else if (localStorage.getItem('cateId') === '3') {
        console.log(10)
        cat = temp[0]['children'][1]['children']
      } else if (localStorage.getItem('cateId') === '4') {
        console.log(20)
        cat = temp[0]['children'][2]['children']
      } else if (localStorage.getItem('cateId') === '5') {
        console.log(30)
        cat = temp[0]['children'][3]['children']
      } else {
        console.log(40)
        cat = temp[0]['children']
      }
      return [{
        title: '资源环境负荷数据',
        id: null,
        name: 'SceneDataList',
        children: cat
        // children: temp[0]['children'][0]['children']
        // title: '资源环境负荷数据',1
        // id: null,
        // name: 'SceneDataList',
        // children: temp[0]['children']
      }]
    },
    baseTree () {
      let temp = this.$store.state.systemTable
      let arr1 = []
      let arr2 = []
      for (let key of Object.keys(temp)) {
        let item = temp[key]
        if (item['tableComment'].split('_')[0] === '基础表') {
          item['title'] = item['tableComment'].split('_')[1]
          arr1.push(item)
        } else if (item['tableComment'].split('_')[0] === '辅助表') {
          item['title'] = item['tableComment'].split('_')[1]
          arr2.push(item)
        }
      }
      return [{
        title: '基础数据',
        children: [
          {
            title: '基础表',
            children: arr1
          },
          {
            title: '辅助表',
            children: arr2
          }
        ]
      }]
    },
    navTree () {
      let temp = [
        {
          title: '数据批处理',
          children: [
            {
              title: '导入规范',
              icon: 'file-text-o',
              name: 'BatchDoc'
            },
            {
              title: '批量导入',
              icon: 'upload',
              name: 'BatchImport'
            },
            {
              title: '批量导出',
              icon: 'download',
              name: 'BatchExport'
            }
          ]
        },
        {
          title: '数字孪生体库',
          children: [
            {
              title: '孪生体模型',
              icon: 'vcard-o',
              name: '111'
            },
            {
              title: '孪生体环境影响评价',
              icon: 'users',
              name: '222'
            },
            {
              title: '铸造工艺动态环境影响评价',
              icon: 'key',
              name: '333'
            }
          ]
        },
        {
          title: '数据查询',
          name: 'Search'
        },
        {
          title: '用户管理',
          children: [
            {
              title: '用户信息',
              icon: 'vcard-o',
              name: 'UserIndex'
            },
            {
              title: '分组管理',
              icon: 'users',
              name: 'UserGroup'
            },
            {
              title: '权限管理',
              icon: 'key',
              name: 'UserPermission'
            }
          ]
        },
        {
          title: '帮助中心',
          icon: 'key',
        }
      ]
      return temp
    }
  },
  data () {
    return {
      defaultProps: {
        children: 'children',
        label: 'title'
      }
    }
  },
  methods: {
    handleScene (data) {
      if (data['id'] < 6) {
        this.$router.push({name: 'SceneDataList', query: {categoryId: localStorage.getItem('cateId')}})
      } else {
        this.$router.push({name: 'SceneDataList', query: {categoryId: data['id']}})
      }
    },
    handleBase (data) {
      console.log(data['tableName'])
      if (data['tableName'] !== undefined) {
        this.$router.push({name: 'Manage', params: {tableName: data['tableName']}})
      } else {
        this.$router.push({name: 'ManageIndex'})
      }
    },
    handleNodeClick (data) {
      if (data['name'] !== undefined) {
        this.$router.push({name: data['name']})
      }
    }
  }
}
</script>
<style lang="scss">
  .Navigation{
    padding: 10px;
    width: fit-content;
    height: calc(100% - 20px);
    color: #aaa;
    .el-tree{
      color: #aaa;
      background: transparent;
      .el-tree-node__expand-icon{
        font-size: 16px!important;
      }
      .el-tree-node__label{
        font-size: 16px!important;
      }
      .el-tree-node__content{
        height: 35px;
      }
    }
  }
</style>
