<template>
 <div class="page-list">
     <router-link to="duitang">
       <div class="page-item">
       <img src="../../assets/icon/duitang_logo.png" alt="">
      <!-- <span>
        堆糖
      </span> -->
   </div>
     </router-link>
     <router-link to="wangyi">
    <div class="page-item">
       <img src="../../assets/icon/wangyimusic_logo.png" alt="">
       <!-- <span>
          网易云
         </span> -->
    </div>
     </router-link>
 </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.page-list {
  padding: 30px;
  .page-item {
    display: flex;
    // background: url("../../assets/bg.jpg") repeat;
    // box-shadow: 10px 8px 2px #000;
    border: 1px solid #eee;
    border-radius: 20px;
    padding: 0px 10px;
    height: 200px;
    margin-top: 40px;
    flex-flow: column;
    align-items: center;
    // color: #fff;
    justify-content: center;
    img {
      width: 80px;
      border-radius: 8px;
    }
    span {
      margin-top: 10px;
    }
  }
}
</style>
