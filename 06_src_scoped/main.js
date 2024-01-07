// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

import plugins from './plugins'
// 使用插件
Vue.use(plugins)

// 关闭Vue 的生产提示
//Vue.config.productionTip = False
// 创建VM
new Vue({
	el: "#app",
	render: h => h(App)
})