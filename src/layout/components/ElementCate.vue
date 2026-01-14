<template>
  <div>
    <template v-if="base.length">
      <div class="element-cate-title">基础字段</div>
      <Draggable v-model="base"
                 class="base-cate-ul"
                 tag="ul"
                 v-bind="{
          group: {
            name: 'view',
            pull: 'clone',
            put: false,
          },
          sort: false,
        }">
        <li v-for="(item, index) in base" :key="index" class="element-cate-item">
          <a>
            <i class="icon iconfont" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </a>
        </li>
      </Draggable>
    </template>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import {base} from '@/element/index.js'

export default {
  name: "ElementCate",
  components: {
    Draggable
  },
  data() {
    return {
      base
    }
  },
  mounted() {
    console.log(this.base);
  }
}
</script>

<style scoped lang="scss">

$primary-color: #409eff;
$primary-color-grid: #fdf6ec;
$primary-background-color-grid: #e6a23c;
$primary-background-color: #ecf5ff;

.element-cate-title {
  padding: 8px 12px;
  font-size: 13px;
}

.base-cate-ul {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}

.element-cate-item {
  font-size: 12px;
  flex: 0 0 calc(50% - 10px); // 👈 两列布局核心
  line-height: 26px;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
  margin: 1%;
  color: #333;
  border: 1px solid #f4f6fc;

  &:hover {
    color: $primary-background-color-grid;
    border: 1px dashed $primary-background-color-grid;
  }

  > a {
    height: 100%;
    display: flex; // 👈 内部也用 flex
    align-items: center; // 图标 + 文本垂直居中
    cursor: move;
    background: #f1e1c0;
    border: 1px solid #f4f6fc;

    .icon {
      margin: 0 6px 0 8px;
      font-size: 17px;
      flex-shrink: 0;
    }

    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
