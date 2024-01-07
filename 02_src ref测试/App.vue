<template>
	<div>
		<h1 v-text="msg" ref="title"></h1>
		<School ref="school" />
		<button @click="showDOM">点击我输出上方DOM元素</button>
		<Student />
	</div>
</template>


<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
	name: 'App',
	components: { School, Student },
	data() {
		return {
			msg: '欢迎刘开学习Vue'
		}
	},
	methods: {
		showDOM() {
			console.log(this.$refs.school) // 获取School组件的实例，如果getByElementId 则获取的是School数据呈现的样子
		}
	},
}
</script>


<style></style>
