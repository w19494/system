<template>
	<div>
	    <div class="top">
	      <el-breadcrumb separator="/">
	        <el-breadcrumb-item :to="{ path: '/index/readme' }">首页</el-breadcrumb-item>
	        <span>综合实例 / </span>
	        <span>form表单编辑</span>
	      </el-breadcrumb>
	    </div>   
	    <router-view></router-view>
	</div>
  	
  
</template>


<script>

</script>
<style scoped>
  	.top{
    	margin-top: 20px;
    	margin-left: 210px;
  	}
  	.top span{
  		color: #97a8be;
  	}
</style>