<template>
	<div class="student">
		<h2 >学校名称:{{ name }}</h2>
		<h2>学校地址:{{ address }}</h2>
	</div>
</template>

<script>
export default {
	name: 'School',
	data() {
		return {
			name: '尚硅谷',
			address: '门头沟'
		}
	},
	
}
</script>

<style>
.student {
	background-color: gray;
}
</style>
