<style lang="less" scoped>

.search {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-flow: column;
    align-items: center;
    .input-key {
        display: flex;
        align-items: center;
        margin-top: 40px;
        input {
            display: block;
            outline: none;
            border: 1px solid #eee;
            border-right: none;
            padding: 12px 10px;
        }
        .search-btn {
            padding: 14px 20px;
            background-color: transparent;
            border: 1px solid #eee;
            border-left: none;
            display: inline-block;
            outline: none;
            white-space: nowrap;
            line-height: 1;
        }
    }
}

</style>

<template>

<div>
    <div class="search">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#rabbit-duitang"></use>
        </svg>
        <div class="input-key">
            <input type="text">
            <button class="search-btn" @click="serach">搜索</button>
        </div>
    </div>
</div>

</template>

<script>

import Loading from '../../components/Loading/index'
export default {
    data() {
            return {
                showLoading: false
            }
        },
        mounted() {
          this.$loading()
          this.$loading()
          this.$loading()
          setTimeout(()=>{
            this.$loading.hide()
          },1000)
          setTimeout(()=>{
            this.$loading()
          },2000)
           setTimeout(()=>{
              this.$loading.hide()
            },3000)
        },
        components: {
            Loading
        },
        methods: {
            serach() {}
        }
};

</script>
