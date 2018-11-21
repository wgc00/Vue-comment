var mybutton = {
	data() {
		return {
			count: 0
		}
	},
	methods: {
		incr() {
			this.count = this.count + 1;
		},
		decr() {
			this.count = this.count > 0 ? this.count - 1 : 0;
		}
	},
	template: `<button @click="incr" @mouseover="decr">你单击了{{count}}次</button>`
}
