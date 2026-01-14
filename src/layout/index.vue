<script>
export default {
  name: "MyForm"
}
</script>

<template>
<div>
  <el-container class="my-form-container">
    <el-header class="my-form-header"></el-header>
    
    <el-container>
      <el-aside class="my-form-elementcate"></el-aside>
      
      
      
      
      
      <el-main class="my-form-view"></el-main>
      
      <el-aside class="my-form-conf-options"></el-aside>
    </el-container>
    

    <el-footer class="my-form-footer">
      Powered by
      <a href="https://github.com/dongwei1125/dw-form-making" target="black">dw-form-making</a>
    </el-footer>
  </el-container>
  
</div>
</template>

<style scoped lang="scss">
  .my-form-container{
    height: 100%;
  }
</style>
