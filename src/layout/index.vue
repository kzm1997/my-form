<template>
  <div>
    <el-container class="my-form-container">
      <el-header class="my-form-header">
        <LinkHeader></LinkHeader>
      </el-header>

      <el-container class="my-form-body">
        <el-aside class="my-form-elementcate">
          <ElementCate></ElementCate>
        </el-aside>


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

<script>
import LinkHeader from "@/layout/components/LinkHeader.vue";
import ElementCate  from "@/layout/components/ElementCate.vue";
export default {
  name: "MyForm",
  components: {LinkHeader,ElementCate}
}
</script>

<style scoped lang="scss">
.my-form-container {
  height: 100%;
  .my-form-header {
    box-shadow: 0 2px 10px rgba(252, 216, 70, 0.6);
    background-image: linear-gradient(to right, #FCD84699, #b46c00);
  }
}
.my-form-elementcate {
  width: 250px !important;
}
</style>
