<template>
	<div id="myChart" :style="{width: '800px', height: '400px'}">
	</div>
</template>
<script>
	export default {
		data() {
			return {
				msg: 'hello!',
				goods: {}
			}
		},
		mounted() {
			this.drawLine();
		},
		/*created() {
			this.$axios.get('/static/data.json').then(res => {
				const data = res.data;
				this.goods = data;
				console.log(this.goods);
				console.log(Array.from(this.goods.xAxis.data));
			}).catch(err => {
				console.log(err);
			})
		},*/
		methods: {
			// 绘制图表
			drawLine() {
		      // 基于准备好的dom，初始化echarts实例
		      let myChart = this.$echarts.init(document.getElementById('myChart'));
		      // 绘制图表
		      myChart.setOption({
		        title: { text: 'ECharts 入门示例' },
		        tooltip: {},
		        xAxis: {
		          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
		        },
		        yAxis: {},
		        series: [{
		          name: '销量',
		          type: 'bar',
		          data: [5, 20, 36, 10, 10, 20]
		        }]
		    });
				// 基于准备好的dom，初始化echarts实例
			/*	console.log('hhh');
				let myChart = this.$echarts.init(document.getElementById('myChart'));
				// 绘制图表
				myChart.setOption({
					title: {},
					tooltip: {},
					xAxis: {
						data: []
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: []
					}]
				});

				this.$axios.get('/static/data.json').then(res => {
					const data = res.data;
					const list = data.series.map(good => {
						let list = good.data;
						return [...list]
					})

					myChart.setOption({
						title: data.title,
						xAxis: [{
							data: data.xAxis.data
						}],
						series:[{
							name: '销量',
							type: 'bar',
							data: Array.from(...list)
						}]
					});
				})*/
			}
		}
	}
</script>
<style scoped>
	
</style>