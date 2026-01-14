<template>
  <div class="header-main">
    <div class="header-image">
      <img src="~/assets/logo.png" alt/>
    </div>

    <div class="header-link-leader">
      <a href="https://github.com/dongwei1125/dw-form-making/blob/master/docs/guide.md" target="black"
      >开发指南</a
      >
      <a href="https://juejin.cn/post/6960878751978618910" target="black">工具详解</a>
      <a href="https://dongwei1125.github.io/dw-form-making/" target="black">在线预览</a>
      <a href="https://dongwei1125.github.io/" target="black">关于作者</a>
    </div>

    <div class="header-link-npm">
      <a href="https://github.com/dongwei1125/dw-form-making" target="black">GitHub</a>
      <a href="https://gitee.com/dongwei1125/dw-form-making" target="black">Gitee</a>
      <a href="https://www.npmjs.com/package/dw-form-making" target="black">NPM</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkHeader',
}
</script>
<style scoped lang="scss">
.header-main {
  display: flex;
  align-items: center;
}

.header-image {
  display: flex;
  align-items: center;
  height: 60px;

  img {
    width: 50px;
    height: 50px;
  }
}

.header-link-leader {
  margin-left: 10px;
}

.header-link-leader a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 14px;
  line-height: 50px;
  font-weight: 500;
  margin-left: 15px;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
}

.header-link-npm {
  margin-left: auto;
  a{
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 14px;
    line-height: 50px;
    font-weight: 500;
    margin-left: 15px;
    &:hover {
      color: rgba(255, 255, 255, 0.5);
    }
  }
  
}

</style>
