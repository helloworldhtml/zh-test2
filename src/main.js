import Vue from 'vue'
import App from './App.vue'
import Login from './components/Login.vue'
import { Field, Button, Popup } from 'vant'
// 引入 flexible 用于设置 rem 基准值
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false
Vue.use(Field)
Vue.use(Button)
Vue.use(Popup)

new Vue({
  render: h => h(App),
}).$mount('#app')

const install = () => {
  Vue.component(Login.name, Login)
}

export default install