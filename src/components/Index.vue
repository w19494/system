<template>
	<div>
	    <div class="top">
	      <el-breadcrumb separator="/">
	        <el-breadcrumb-item :to="{ path: '/index/readme' }">首页</el-breadcrumb-item>
	        <el-breadcrumb-item>系统说明</el-breadcrumb-item>
	      </el-breadcrumb>
	    </div>  
		<router-view></router-view>
	</div>
  	
  
</template>


<script>

</script>
<style scoped>
  p{
    float: right;
  }
</style>