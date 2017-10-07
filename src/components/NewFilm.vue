<template>
    <div>
      	<div class="table"> 
      	  <el-table
      	    :data="ajaxRes"
      	    border
      	    height="480"
      	    style="width: 95%; margin-top: 20px">
      	    <el-table-column prop='' label="序号" width="100" align='center'>
                  <template scope="scope" >
                      <template class="">
                           <p>{{scope.$index+1}}</p>
                      </template>             
                  </template>		    
      	    </el-table-column>

      	    <el-table-column label="海报" align='center'>
                  <template scope="scope" >
                      <template class="">
                           <p><img :src="scope.row.images.small" alt=""></p>
                      </template>             
                  </template>		    
      	    </el-table-column>

      	    <el-table-column prop="title" sortable label="名称" align='center'>
      	    </el-table-column>

      	    <el-table-column label="导演" align='center'>
                  <template scope="scope" >
                      <template class="" v-for="item in scope.row.directors">
                           <p><a target="_blank" :href="item.alt">&nbsp;{{ item.name }}&nbsp;</a></p>
                      </template>             
                  </template>	
      	    </el-table-column>

      	    <el-table-column label="主演" align='center'>
                  <template scope="scope" >
                      <template class="" v-for="item in scope.row.casts">
                          <p><a target="_blank" :href="item.alt">&nbsp;{{ item.name }}&nbsp;</a>、</p>
                      </template>             
                  </template>	    
      	    </el-table-column>
      		
      	    <el-table-column prop="genres" label="类型" align='center'>

      	    </el-table-column>

      	    <el-table-column prop="rating.average" label="综合评分" sortable align='center'>
      	    </el-table-column>	

      	    <el-table-column prop="collect_count" label="收藏量" sortable align='center'>
      	    </el-table-column>

      	    <el-table-column prop="year" label="上映年份" align='center'>
      	    </el-table-column>  

      	  </el-table>
        </div>
        <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage1"
              :page-size="100"
              layout="prev, pager, next, jumper"
              :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
        return {
            ajaxRes:null,
            currentPage1: 1,
            currentPage2: 2,
            currentPage3: 3,
            currentPage4: 4,
            start:0,
            count:10,
        };
    },
    mounted(){
        let vm=this
        this.Ajax()
    },
    methods:{
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
           this.start=val;
           this.Ajax()
           
        },
        Ajax(){
            let vm=this;
            let par={
                "count":this.count,
                "start":this.start
            };
            this.$http.jsonp('http://api.douban.com/v2/movie/in_theaters',{params:par})
            .then(res=>{
                console.log('ajax请求成功了！',res)
                vm.ajaxRes=res.body.subjects;
            },res=>{

                console.log('ajax请求失败了',res)
            })            
        }
    }
  };
</script>
<style scoped>
	.table{
		margin-left: 240px;
		margin-top: 20px;
	}
	.cell a{
		color: #000;
	}
    .block{
        margin-left: 240px;
        margin-top: 20px;
    }
</style>