<template>
	<div>
  		<div id="Chart" :style="{width: '400px', height: '330px'}"></div>
  	</div>

</template>


<script>
	export default {
	  		data () {
			    return {
			      	msg: 'Welcome to Your Vue.js App'
			    }
	  		},
		mounted(){
		    this.drawLine2();
		},
	  	methods: {
	    	drawLine2(){
	        // 基于准备好的dom，初始化echarts实例
		        let Chart = this.$echarts.init(document.getElementById('Chart'))
		        // 绘制图表
				var option = {
					title : {
				        text: '个人生活信息',
				        subtext: '纯属虚构',
				        x:'center'
				    },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    series : [
				        {
				            name: '一天时间/h',
				            type: 'pie',
				            radius : '80%',
				            center: ['50%', '50%'],
				            data:[
				                {value:6, name:'工作'},
				                {value:6, name:'睡觉'},
				                {value:1, name:'吃饭'},
				                {value:4, name:'玩电脑'},
				                {value:7, name:'玩手机'}
				            ],
				            itemStyle: {
				                emphasis: {
				                    shadowBlur: 10,
				                    shadowOffsetX: 0,
				                    shadowColor: 'rgba(0, 0, 0, 0.5)'
				                }
				            }
				        }
				    ]
				};
		        Chart.setOption(option);
	    	}
	  	}
	}	

</script>

<style scoped>
	#Chart{
		margin-right: 100px;
		margin-bottom: 30px;
	}
</style>