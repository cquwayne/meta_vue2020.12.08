<template>
  <div class="HomeSelect">
    <el-row :gutter="24">
      <el-col :span="24">
        <a style="color: dodgerblue;line-height: 100px;display: block; text-align: center;font-size:25px;">
          请选择要进入的系统
        </a>
      </el-col>
      <el-col :span="12">
        <el-card always="always">
          <router-link :to="{ path: '/homeIndex'}" style="color: #303133;">
            <i class="el-icon-document-copy"></i>进入数据库系统
          </router-link>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card always="always" onclick = "window.location.href = 'http://graduate.cqu.edu.cn/'">
          <a class="el-icon-pie-chart" href="http://graduate.cqu.edu.cn/" style="color: #303133;">进入环境影响评价系统</a>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
name: "HomeSelect",
  // data() {
  //   return {
  //     url: 'https://www.baidu.com/',
  //   };
  // },
  // methods: {
  //   toRescue() {
  //     window.location.href = this.url;
  //   },
  // },
}
</script>

<style lang="scss">
    .HomeSelect{
      max-width: 850px;
      max-height: 500px;
      margin: 50px 475px 0 475px;
      a{
        font-weight: bolder;
        font-size: larger;
        text-align: center!important;
        &:hover{
          .el-card{
            background: #2f4f4f !important;
            color: #ffffff;
        }
      }
    }
    .el-row{
/*        margin: 50px 0;*/
    }
    .el-card__body{
      padding: 50px;
      text-align: center!important;
      i{
        font-size: x-large;
      }
    }
    .el-card{
      margin-bottom: 10px!important;
    }
    .add .el-card__body{
      padding: 30px!important;
    }
  }
</style>
