<template>
	<div class="student">
		<h2>学校名称:{{ name }}</h2>
		<h2>学校地址:{{ age }}</h2>
	</div>
</template>

<script>
export default {
	name: 'Student',
	data() {
		return {
			name: '刘开',
			age: 29
		}
	},
}
</script>

<style>
.student {
	background-color: goldenrod;
}
</style>
