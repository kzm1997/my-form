<template>
  <div>

    <el-form
        :size="data.config.size"
        :label-width="data.config.labelWidth + 'px'"
        :label-position="data.config.labelPosition"
        :hide-required-asterisk="data.config.hideAsterisk">
      <Draggable
          v-model="data.list"
          @add="handleAdd"
          v-bind="{
          group: 'view',
          animation: 200,
          ghostClass: 'move',
          handle: '.drag-icon',
        }">
        <WidgetC 
            v-for="(element,index) in data.list"
          :key="element.key"
        :data="data"
        :element="element"
        :index="index">           
        </WidgetC>
      </Draggable>
    </el-form>

  </div>
</template>


<script>
import Draggable from "vuedraggable";
import store from 'store/index.js'
import WidgetC from './WidgetC.vue'

export default {
  name: "ViewForm",
  data() {
    return {
      data: store.state.data
    }
  },
  components: {
    Draggable,
    WidgetC
  },
  methods:{
    handleAdd({ newIndex }) {
      store.commit('SET_SELECT', this.data.list[newIndex])
    }
  }
}
</script>
<style scoped lang="scss">
.my-form-empty {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #ccc;
  font-size: 20px;
}
</style>
