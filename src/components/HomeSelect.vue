<template>
  <div class="HomeSelect">
    <h2>
      基础制造工艺资源环境负荷数据库系统及环境影响评价支持系统
    </h2>
    <el-row :gutter="24">
      <el-col :span="5" >
        <div>&nbsp</div>
      </el-col>
      <el-col :span="7">
        <el-card always="always">
<!--          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">-->
          <img src="/static/photo1.jpg" class="image" width="438" height="262">
          <div class="bottom clearfix">
              <router-link :to="{ path: '/homeIndex'}">
                 <i class="el-icon-document-copy"></i>资源环境负荷数据库系统
              </router-link>
          </div>
        </el-card>
      </el-col>
      <el-col :span="7">
        <el-card always="always">
          <img src="/static/photo2.jpg" class="image" width="438" height="262">
          <div class="bottom clearfix">
            <a class="el-icon-pie-chart" href="javascript:window.open('http://47.104.210.64:5189/#/')">环境影响评价支持系统</a>
          </div>
        </el-card>
      </el-col>
      <el-col :span="5">
        <div>&nbsp</div>
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
      h2{
        margin: 0 0 50px 0;
        padding: 40px;
        font-size: 28px;
        text-align: center;
        background: #4a524f;
        color: gold;
      }
      a{
        line-height:40px;
        color: #303133;
        font-weight: bolder;
        font-size: 21px;
        letter-spacing: 1px;
        text-align: center!important;
        &:hover{
            color: cornflowerblue;
      }
    }
    .el-row{
      margin: 50px 0;
      //width: 1200px;
      //height: 500px;
      //height: 100%;
      //width: 100%;
    }
    .el-card__body{
      padding: 30px;
      text-align: center!important;
      i{
        font-size: x-large;
      }
    }
    .el-card{
      margin-bottom: 50px!important;
    }
  }
</style>
