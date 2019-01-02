<style lang="less" scoped>

@keyframes dot-jump {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    100% {
        -webkit-transform: translateY(-30px);
        transform: translateY(-30px);
    }
}

.loading-mask {
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, .1);
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 999999;
    .loading-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        .loader {
            position: relative;
            width: 120px;
            height: 60px;
            border-radius: 50%;
            display: inline-block;
            vertical-align: middle;
            .dot {
                width: 20px;
                height: 20px;
                background: #ff7e7e;
                border-radius: 50%;
                position: absolute;
                top: calc(50% - 10px);
            }
            .dot1 {
                left: 0;
                animation: dot-jump 0.5s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate infinite;
            }
            .dot2 {
                left: 40px;
                animation: dot-jump 0.5s 0.2s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate infinite;
            }
            .dot3 {
                left: 80px;
                animation: dot-jump 0.5s 0.4s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate infinite;
            }
        }
        .loading-text {
            text-align: center;
            font-size: 24px;
            letter-spacing: 2px;
        }
    }
}

.loading-mask-leave-active,
.loading-mask-enter-active {
    position: relative;
    z-index: 1;
}

.loading-mask-enter,
.loading-mask-leave-active {
    opacity: 0;
}

.loading-mask-leave-active,
.loading-mask-enter-active {
    transition: opacity 250ms;
}

</style>

<template>

<transition :name="transition">
    <div class="loading-mask" v-show="show">
        <div class="loading-content">
            <div class="loading-img">
                <slot>
                    <div class="loader">
                        <div class="dot dot1"></div>
                        <div class="dot dot2"></div>
                        <div class="dot dot3"></div>
                    </div>
                </slot>
            </div>
            <slot name="text">
                <div class="loading-text" v-text="text"></div>
            </slot>
        </div>
    </div>
</transition>

</template>

<script>

export default {
    name: "laoding",
    data() {
        return {
            show: false
        }
    },
    props: {
        text: {
            type: String,
            default: '加载中...'
        },
        transition: {
            type: String,
            default: 'loading-mask'
        }
    },
    methods: {
        showLoad() {
            this.show = true
        },
        hide(){
          this.show = false
        }
    }
};

</script>
