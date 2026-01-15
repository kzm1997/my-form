<template>
   <el-container>
     <el-header height="45px">
       <div
           class="property-tab"
           :class="{ active: property == 'field' }"
           @click="handleSelectConfig('field')"
       >
         字段属性
       </div>
       <div class="property-tab" :class="{ active: property == 'form' }" @click="handleSelectConfig('form')">
         表单属性
       </div>
     </el-header>
     <el-main></el-main>
   </el-container>
</template>

<script>
export default {
  name: "ConfigOption",
  data() {
    return {
      property: 'field',
    }
  },
  methods: {
    handleSelectConfig(property) {
      this.property = property
    },
  }
}
</script>

<style scoped lang="scss">
.el-header{
  display: flex;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  color: #999999;
  user-select: none;
}
.property-tab{
  width: 50%;
  text-align: center;
  line-height: 45px;
  &.active {
    border-bottom: solid 2px #BC790F;
  }
}

</style>
