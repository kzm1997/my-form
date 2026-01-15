<template>
   <common-view :element="element">
     <el-input
         :style="{ width: element.options.width }"
         :placeholder="element.options.placeholder"
         :disabled="element.options.disabled"
         :readonly="element.options.readonly"
         :show-password="element.options.showPassword"
         :value="value"
         @input="input"
     ></el-input>
   </common-view>
</template>


<script>
import CommonView from "@/element/CommonView.vue";
export default {
  name: "DwInput",
  components: {
    CommonView
  },
  model:{
    prop: 'value',
    event: 'change',
  },
  props:{
    element:{
      type: Object,
      default:()=>({})
    },
    value:{
      type: [String, Number],
      default: ''
    }
  },
  methods:{
    input(value){
      this.$emit('change',value);
    }
  }
  
}
</script>



<style scoped lang="scss">

</style>
