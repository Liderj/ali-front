<style lang="less" scoped>
.page-list {
    padding: 30px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .page-item {
        border: 1px solid #eee;
        flex: 0 0 25%;
        display: flex;
        flex-flow: column;
        padding: 40px 0;
        align-items: center;
        justify-content: center;
        color: #343434;
        img {
            width: 40px;
            height: 40px;
        }
        span {
            margin-top: 10px;
        }
    }
}

</style>

<template>

<div class="page-list">
    <router-link to="duitang" class="page-item">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#rabbit-duitang"></use>
        </svg>
        <span>堆糖</span>
    </router-link>
    <router-link to="wangyi" class="page-item">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#rabbit-wangyiyun"></use>
        </svg>
        <span>网易云</span>
    </router-link>
    <router-link to="diary" class="page-item">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#rabbit-diary"></use>
        </svg>
        <span>日记本</span>
    </router-link>
</div>

</template>

<script>

export default {};

</script>
