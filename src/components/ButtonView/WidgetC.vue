<template>
  <div :class="[
      'view-form-item',
      {
        active: select.key === element.key,
        grid: element.type === 'grid',
      },
    ]"
       @click.stop="handleSelect(element)"
  >
    <component :is="element.component" :value="element.options.defaultValue" :element="element"/>
    <div v-if="select.key === element.key" class="item-drag">
      <i class="iconfont icon-drag drag-icon"></i>
    </div>
    <div v-if="select.key === element.key" class="item-action">
      <i class="iconfont icon-clone" @click.stop="handleClone(element, index, data.list)"></i>
      <i class="iconfont icon-trash" @click.stop.once="handleDelete(data.list, index)"></i>
    </div>
  </div>
</template>


<script>
import store from '@/store/index'
export default {
  name: "WidgetC",
  props: {
    element: {
      type: Object,
      default: () => ({})
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
  computed:{
    select(){
      return store.state.select
    }
  },
  data() {
    return {}
  },
  methods: {
    handleDelete(list, index) {
      store.commit('DELETE_ELEMENT', { list, index })
    },

    handleClone(element, index, list) {
      store.commit('CLONE_ELEMENT', { element, index, list })
    },
    handleSelect(element) {
      store.commit('SET_SELECT', element)
    }
  },
}
</script>


<style scoped lang="scss">
$primary-color: #C3841C;
$primary-color-grid: #fdf6ec;
$primary-background-color-grid: #e6a23c;
$primary-background-color: #f8f6f6;

@mixin form-item-move {
  outline-width: 0;
  height: 3px;
  box-sizing: border-box;
  font-size: 0;
  content: '';
  overflow: hidden;
  padding: 0;
  background: $primary-color;
  border: 2px solid $primary-color;
}

@mixin action-icon {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 28px;
  line-height: 28px;
  z-index: 9;

  i {
    font-size: 14px;
    color: #fff;
    margin: 0 5px;
    cursor: pointer;
  }
}

@mixin drag-icon {
  position: absolute;
  left: 0px;
  top: 1px;
  height: 24px;
  line-height: 24px;

  i {
    font-size: 14px;
    color: #fff;
    margin: 0 5px;
    cursor: move;
  } 
}

.view-form-item{
  border: 1px dashed rgba(170, 170, 170, 0.7);
  background-color: rgba(236, 245, 255, 0.3);
  margin: 2px;
  user-select: none;
  overflow: hidden;
  position: relative;

  &:hover {
    background: $primary-background-color;
    outline: 1px solid $primary-color;
  }

  &.active {
    outline: 2px solid $primary-color;
    border: 1px solid $primary-color;
  }

  //&.move {
  //  @include form-item-move;
  //}

  &.required {
    .el-form-item__label::before {
      content: '*';
      color: #f56c6c;
      margin-right: 4px;
    }
  }

  .item-drag {
    @include drag-icon;
    background: $primary-color;
  }

  .item-action {
    @include action-icon;
    background: $primary-color;
  }
}
</style>
