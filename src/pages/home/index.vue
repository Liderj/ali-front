<template>
  <div class="home">
    <div class="me animated bounceIn">
      <img class="avatar rotating" src="../../assets/avatar.jpg" alt="">
        <router-link to="pageList">
          <span>兔子先生ai____</span>
        </router-link>
      <p class="ignore">我没有温柔 | 唯有宠溺</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.home {
  background: url("../../assets/bg.jpg") repeat;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  color: #fff;
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
  a {
    margin: 50px 0;
    font-family: "BernhardFashionBT-Regular";
    font-size: 40px;
    color: #fff;
  }
  p {
    font-family: "BernhardFashionBT-Regular";
    font-size: 28px;
    color: #fff;
    margin: 40px 0;
  }
}
.rotating {
  animation: rotat 6s linear infinite;
}

@keyframes rotat {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
