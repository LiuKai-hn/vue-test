<template>
	<div class="school">
		<h2 @click="showName">学校名称:{{ name }}</h2>
		<h2>学校地址:{{ address }}</h2>
	</div>
</template>

<script>
// 引入一个混合 
import {my_mixin,my_mixin2} from '../mixin'
export default {
	name: 'School',
	data() {
		return {
			name: '尚硅谷',
			address: '门头沟'
		}
	},
	mixins:[my_mixin,my_mixin2]
	
}
</script>

<style>
.school {
	background-color: gray;
}
</style>
