<template>
<div ref='a'>
  搜索
</div>
</template>
<script>
export default {
  mounted() {
    console.log("DOM解析" + new Date().getTime());
    console.log(this.$refs.a);

    this.$nextTick(() => {
      console.log("====================================");
      console.log("DOM结束" + new Date().getTime());
      console.log("====================================");
    });
  }
};
</script>
