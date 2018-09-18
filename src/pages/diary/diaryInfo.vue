<template>
  <div class="diary">
    <h1 class="diary-title">
      {{details.title}}
    </h1>
    <p class="diary-date">
      {{details.created}}
    </p>
    <div class="content markdown" v-html="details.content">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: {
        title: "",
        created: "",
        content: ""
      }
    };
  },
  mounted() {
    this.axios.get(`/post/${this.$route.params.id}`).then(res => {
      this.details = res.data;
    });
  }
};
</script>
<style lang="less">
@import url("../../../static/css/markdown.css");
.diary {
  padding: 20px;
  .diary-title {
    text-align: center;
  }
  .diary-date {
    color: #666;
    text-align: right;
  }
}
</style>
