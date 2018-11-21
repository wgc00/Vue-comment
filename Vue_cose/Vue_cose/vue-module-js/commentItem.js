//用户名、内容组件
var commentItem = {
	props: ['comment'],
	template: `
		<p>
			<span><b>{{comment.userName}}:</b></span>
			<span>{{comment.content}}</span>
			<a @click.prevent="deleteMe">删除</a>
		</p>`,
	methods: {
		deleteMe() {
			//发射 一个id使用id进行删除
			/* alert(this.comment.id); */
			this.$emit('commentid', this.comment.id);
		}
		
	}
	
}

//导出 一个js只能有一个默认default ， 如果要多个导出
//多导出 export { 名字, 名字 };
export default commentItem;