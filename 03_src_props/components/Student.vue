<template>
	<div class="student">
		<h1>{{ msg }}</h1>
		<h2>学生名称:{{ name }}</h2>
		<h2>学生性别:{{ sex }}</h2>
		<h2>学生年龄:{{ age }}</h2>
	</div>
</template>

<script>
export default {
	name: 'Student',
	// 最简单的方式
	//props:['name','age','sex'],
	// 复杂一点的
	// props:{
	// 	'name':String,
	// 	'age':Number, // 如果传入的值是字符串，页面仍然也会显示，但是会报错,但是需要使用v-bind 或者简写:
	// 	'sex':String
	// },

	props:{
        	name:{
        	type:String, //类型
        	required:true, //必要性
        	default:'老王' //默认值
        	},
			age:Number,
			sex:String
        },

	data() {
		return {
			msg: '我是一个尚硅谷的学生'
		}
	},
}
</script>

<style>
.student {
	background-color: goldenrod;
}
</style>
