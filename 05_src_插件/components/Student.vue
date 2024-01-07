<template>
	<div class="student">
		<h2>学生名称:{{ name }}</h2>
		<h2>学生性别:{{ sex }}</h2>
	</div>
</template>

<script>
export default {
	name: 'Student',
	// 最简单的方式
	data() {
		return {
			name:'刘开',
			sex:'男'
		}
	},
	
}
</script>

<style>
.student {
	background-color: goldenrod;
}
</style>
