//时钟的组件
var myclock = {
		props:['color'],
		data() {
			return {
				date: new Date().toLocaleTimeString(),
				_timer: ''
			}
		},
		created() {
			this._timer = setInterval(this.updateTime, 1000);
		},
		methods: {
			updateTime() {
				this.date = new Date().toLocaleTimeString();
			}
		},
		//销毁创建的更新的时间,不然占用内存
		beforeDestroy() {
			this._timer.cancel();
		},
		template: `<h2 :style={color:this.color}>现在时间：{{date}}</h2>`
	}
