<template>
  <div class="diaries">
    <ul v-for="item in list" :key="item._id">
      <li>
        <router-link :to="'diary/'+item._id">
          <span>{{item.title}}</span>
          <span> {{item.created}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.getList();
    });
  },
  methods: {
    getList() {
      this.axios.get("/post/list").then(res => {
        this.list = res.data;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.diaries {
  padding: 20px;
  ul > li {
    display: block;
    border-bottom: 1px solid #eee;
    padding: 30px 0;
    a {
      display: flex;
      color: #000;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
