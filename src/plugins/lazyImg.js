export default {
  install(Vue, options) {
    Vue.directive('lazy-img', {
      bind: function(el, binding, vnode) {
        el.setAttribute('src', '/static/svg/img-def.jpg')
      },
      inserted: function(el, binding) {
        let newImg = new Image()
        newImg.src = binding.value
        newImg.onload = function() {
          el.setAttribute('src',binding.value)
        }
        newImg.onerror = function() {

        }
      },
      update: function() {
        console.log(3);
      },
      componentUpdated: function() {
        console.log(4);
      }
    })
  }
}
