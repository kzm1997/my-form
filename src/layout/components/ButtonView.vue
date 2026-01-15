<template>
  <el-container class="my-form-view-container">
       <el-header class="my-form-view-header">
           <el-button v-for="(item,index) in buttons"  
                      :key="index"
                      :type="item.type"

                      :size="item.size" 
                      :icon="item.icon"
           >{{item.label}}
           </el-button>
       </el-header>
        <el-main >
          <view-form></view-form>
        </el-main>
  </el-container>
</template>

<script>
import ViewForm from "@/components/ButtonView/ViewForm.vue";
export default {
  name: "ButtonView",
  components: {ViewForm},
  data() {
    return {
      buttons:[
        {
          type: 'text',
          size: 'medium',
          icon: 'el-icon-upload2',
          label: '导入JSON',
          method: this.handleUpload,
        },
        {
          type: 'text',
          size: 'medium',
          icon: 'el-icon-delete',
          label: '清空',
          method: this.handleClear,
        },
        {
          type: 'text',
          size: 'medium',
          icon: 'el-icon-view',
          label: '预览',
          method: this.handlePreview,
        },
        {
          type: 'text',
          size: 'medium',
          icon: 'el-icon-tickets',
          label: '生成JSON',
          method: this.handleCreateJson,
        },
        {
          type: 'text',
          size: 'medium',
          icon: 'el-icon-document',
          label: '生成代码',
          method: this.handleCreateCode,
        }
      ]
    }
  }
  
}
</script>

<style scoped lang="scss">

.my-form-view-container{ 
  height: 100%;
  overflow: hidden;
}

.my-form-view-header{
  display: flex;
  justify-content: flex-end;
  height: 45px !important;
  border-bottom: 2px solid #e4e7ed;
  height: 100%;
  .el-button{
    color: #b46c00;
  }
  
}
</style>
