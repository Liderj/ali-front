<template>
  <img :src="defaultUrl" >
</template>
<script>
export default {
  name: "",
  props: {
    defaultUrl:{
      type:String,
      default:''
    }
  }
}
</script>
<style lang="less" scoped>

</style>
