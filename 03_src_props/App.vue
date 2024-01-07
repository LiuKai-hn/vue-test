<template>
	<div>
		<Student name="liukai1" :age=29 sex="男"/>
		<hr/>
		<Student name="liukai2" :age=30 sex="男"/>
		<hr/>
		<Student name="liukai3" :age=31 sex="男"/>
	</div>
</template>


<script>
import Student from './components/Student.vue'
export default {
	name: 'App',
	components: { Student }
}
</script>


<style></style>
