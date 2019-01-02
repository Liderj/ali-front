export throttle = function(fn, interval = 500) {
  let _self = fn,
    timer, firstTime = true
  return function() {
    let args = arguments,
      _me = this;
    if (firstTime) {
      _self.apply(_me, args)
      return firstTime = false
    }
    if (timer) return false
    timer = setTimeout(()=>{
      clearTimeout(timer)
      timer = null
      _self.apply(_me, args)
    }, interval)
  }
}
