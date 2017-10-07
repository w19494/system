<template>
	<div>
  		<div id="myChart" :style="{width: '400px', height: '300px'}"></div>
  	</div>	
</template>


<script>
	export default {
	  name: 'hello',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  mounted(){
	    this.drawLine();
	  },
	  methods: {
	    drawLine(){
	        // 基于准备好的dom，初始化echarts实例
	        let myChart = this.$echarts.init(document.getElementById('myChart'))
	        // 绘制图表
	        myChart.setOption({
	        	title : {
				        text: '个人支付信息',
				        subtext: '纯属虚构',
				        x:'center'
				    },
	            tooltip: {},
	            xAxis: {
	                data: ["7月","8月","9月","10月","11月","12月"]
	            },
	            yAxis: {},
	            series: [{
	                name: '支出',
	                type: 'bar',
	                data: [3000, 3020, 3600, 2880, 4550, 4880]
	            }]
	        });
	    }
	  }
	}	

</script>

<style scoped>
	#myChart{
		margin-left: 280px;
	}
</style>