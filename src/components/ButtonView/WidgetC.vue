<template>
<div :class="view-form-item">
  <component :is="element.component" :value="element.options.defaultValue" :element="element" />
</div>
</template>



<script>
export default {
  name: "WidgetC",
  props:{
    element:{
      type: Object,
      default:()=>({})
    },
    data: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: [String, Number],
      default: '',
    }
  },
  data(){
    return {

    }
  },
  methods:{
    
  }
}
</script>


<style scoped lang="scss">

</style>
