<template>
  <common-view :element="element">
    <el-button
      :type="element.options.type"
      :size="element.options.size"
      :disabled="element.options.disabled"
      :loading="element.options.loading"
      @click="handleClick"
    >
      {{ element.options.defaultValue }}
    </el-button>
  </common-view>
</template>

<script>
import CommonView from "@/element/CommonView.vue";

export default {
  name: "DwButton",  // 这个 name 会被用作组件的唯一标识
  components: {
    CommonView
  },
  props: {
    element: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped lang="scss">
// 按钮样式可在此处添加
</style>