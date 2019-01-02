import LoadingComponent from '../components/Loading'

export default {
  install(Vue, options) {
    const load = Vue.extend(LoadingComponent)
    let loading = null
    function $loading() {
      // 第一次调用
      if (!loading) {
        loading = new load()
        // 手动创建一个未挂载的实例
        loading.$mount()
        // 挂载
        document.querySelector('body').appendChild(loading.$el)
      }
      // 显示loading
      loading.showLoad()
    }
    $loading.hide = function() {
      if (!loading || !loading.show) {
        return
      }
      loading.hide()
    }
    Vue.prototype.$loading = $loading
  }
}
