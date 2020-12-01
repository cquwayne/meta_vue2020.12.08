<!--数据批处理的的导入规范页-->
<template>
  <div class="BatchDoc">
    <h1>
      数据批量处理中心
    </h1>
  </div>
</template>

<script>
export default {
  name: 'BatchDoc',
  methods: {
    handleClear () {
      this.$store.commit('clear')
      history.go(0)
    }
  }
}
</script>

<style lang="scss">
  .BatchDoc{
    h1{
      margin: 50px;
      text-align: center;
      /*margin 简写属性在一个声明中设置所有外边距属性。该属性可以有 1 到 4 个值。*/
      /*在这里表示所有 4 个外边距都是 50px*/
      /*text-align 用于设置 h1、h2、h3等元素的文本对齐方式*/
      /*在这里text-align center表示将h1元素居中对齐*/
    }
  }
</style>
