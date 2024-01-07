// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 关闭Vue 的生产提示
//Vue.config.productionTip = False
// 创建VM
new Vue({
	el: "#app",
	render: h => h(App)
})