export default {
	template: `
		<div> 
			<table>
				<tr>
					<th>用户名:</th>
					<td><input v-model="userName"/></td>
				</tr>
				<tr>
					<th>内容评论:</th>
					<td><textarea v-model="content"></textarea></td>
				</tr>
				<tr>
					<button @click="publish_content">发表</button>
				</tr>
			</table>
			
		</div>`,
		data() {
			return {
				userName: '',
				content: ''
			}
		},
		methods: {
			publish_content() {
				//发射或广播这个对象数据有，有使用的人去接受发射的数据，
				//把所有的东西放在emitdata中
				//如果要使用@emitdata="给一个方法名来接收数据"，可以写在一个标签上
				//接收的方法要放在Vue中
				this.$emit("emitdata",{
					id: +new Date(),
					userName: this.userName,
					content: this.content
				});
				//保存到本地缓存中，localStorage是保存期限是无限期的,在这里保存名字
				localStorage.setItem('userName', this.userName);
				
				//评论内容
				this.content = '';
			}
		},
		created() {
			var userName = localStorage.getItem('userName');
			this.userName = userName;
		}
}