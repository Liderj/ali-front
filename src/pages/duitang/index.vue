<style lang="less" scoped>
.search {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 20px 0 0 0;
    .input-key {
        display: flex;
        width: 100%;
        padding: 0 20px;
        align-items: center;
        input {
            display: block;
            flex:1;
            outline: none;
            border: 1px solid #eee;
            padding: 22px 10px;
            border-radius: 8px;
        }
        .search-btn {
            padding: 25px 20px;
            background-color: transparent;
            border: none;
            display: inline-block;
            outline: none;
            white-space: nowrap;
            line-height: 1;
        }
    }
}
.img-list {
    column-count: 2;
    margin-top: 120px;
    column-gap: 0;
    .img-item{
      padding: 10px;
      break-inside: avoid;
      img {
          width: 100%;
      }
    }
}
</style>

<template>
<div>
  <div class="search">
    <div class="input-key">
      <input type="text" v-model="keywords">
      <button class="search-btn" @click="serach">搜索</button>
    </div>
  </div>
  <transition>
    <div class="img-list" v-if="list.length">
      <!-- <div class="img-item" >
        <img v-lazy-img="list[0].fileOptions[0].url">
      </div> -->
      <div class="img-item" v-for="item in list " :key="item.id">
        <img v-lazy-img="item.fileOptions[0].url">
      </div>
    </div>
  </transition>
</div>
</template>

<script>
export default {
  data() {
    return {
      keywords: null,
      pageNum:1,
      list: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList(){
      this.$loading()
      this.$axios.get('/duitang/list?kw=' + (this.keywords?this.keywords:'手机壁纸')+'&pageToken='+this.pageNum).then(res => {
        this.list = this.list.concat(res.data)
        this.pageNum++
        this.$loading.hide()
      })
    },
    serach() {
      this.list=[]
      this.pageNum=1
      this.getList()
    }
  }
};
</script>
