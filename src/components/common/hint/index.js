import Hint from './HintPlugin.vue'

const obj = {}

obj.install = function(Vue) {
  const hintConstructor = Vue.extend(Hint)
  const hint = new hintConstructor()
  hint.$mount(document.createElement('div'))
  document.body.appendChild(hint.$el)
  Vue.prototype.$hint = Hint
  console.log(Vue.prototype.$hint);
  
}

export default obj