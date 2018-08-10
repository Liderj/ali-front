<template>
  <div class="home">
    <div class="me">
      <img class="avatar ignore" src="../../assets/avatar.jpeg" alt="">
      <span>兔子先生ai____</span>
      <p>一生总有太多的遗憾。你的遗憾是什么？</p>
      <p>我没有温柔 | 唯有宠溺</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  background: transparent;
}
.me {
  display: flex;
  flex-flow: column;
  align-items: center;
  .avatar {
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }
  span {
    margin: 50px 0;
    font-family: "BernhardFashionBT-Regular";
    font-size: 40px;
    color: #fff;
  }
  p {
    font-family: "BernhardFashionBT-Regular";
    font-size: 14px;
    color: #fff;
    margin: 20px 0;
  }
}
</style>
