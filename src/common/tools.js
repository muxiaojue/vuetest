export function debounce(func, delay) {
  let timer = null
  return function(...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func(args)
      console.log('goodrefresh');

      // func.call(this, args)  call方法详情自查
      //call改变func函数的this指向，但这个func被箭头函数包裹，this指向Vue实例
    }, delay)
  }
}