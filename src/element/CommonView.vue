<template>
  <el-form-item
      :label-width="
      element.options.hideLabel
        ? '0px'
        : (element.options.isLabelWidth ? element.options.labelWidth : config.labelWidth) + 'px'
    "
      :prop="element.model"
      :class="element.options.customClass"
      :required="element.options.required">
    
  </el-form-item>
</template>


<script>

import store from 'store/index'
export default {
  name: "CommonView",
  props:{
    element:{
      type:Object,
      default:()=>({}),
    }
  },
  computed:{
    config(){
      return store.state.config
    }
  }
}
</script>

<style scoped lang="scss">

</style>
