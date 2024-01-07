export const my_mixin = {
    methods:{
		showName(){
			alert(this.name)
		}
	},
    mounted(){
        console.log("你好啊")
    }
}
export const my_mixin2 = {
   data(){
    return{
        x:100,
        y:200
    }
    
   }
}