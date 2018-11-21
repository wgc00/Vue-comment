import commentItem from './commentItem.js';
//列表组件
export default {
	props: ['comments'],
	template: `
		<div>
			<citem v-for="c in comments" :key="c.id" :comment="c" @commentid="del"></citem>
		</div>
	`,
	methods: {
		del(id) {
			//再一次发射id
			this.$emit('deldate',id);
			console.log(id);
		}
	},
	components: {
		//局部组件
		citem: commentItem
	}
}