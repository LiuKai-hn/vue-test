<template>
	<div class="student">
		<h2 @click="showName">学生名称:{{ name }}</h2>
		<h2>学生性别:{{ sex }}</h2>
	</div>
</template>

<script>
// 引入一个混合 
import {my_mixin,my_mixin2} from '../mixin'
export default {
	name: 'Student',
	// 最简单的方式
	data() {
		return {
			name:'刘开',
			sex:'男'
		}
	},
	mixins:[my_mixin,my_mixin2]
	
}
</script>

<style>
.student {
	background-color: goldenrod;
}
</style>
