<template>
  <div>
    <div class="top-btn">
      <el-input v-model="input" placeholder="请输入内容" class="one"></el-input>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" icon="search">搜索</el-button>
      <el-button type="primary" icon="edit">添加</el-button>
      <el-button type="primary" icon="delete">批量删除</el-button>
      <el-button type="primary" icon="search">导出</el-button>
    </div>
    <div class="table">
      <el-table
        ref="multipleTable"
        :data="tableData3"
        border
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="序列号"
          width="120">
          <template scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="word1"
          label="字段一"
          width="120">
          <template scope="scope">{{ scope.row.word1 }}</template>
        </el-table-column>
        <el-table-column
          prop="word2"
          label="字段二"
          width="120">
          <template scope="scope">{{ scope.row.word2 }}</template>
        </el-table-column>
         <el-table-column
          prop="word3"
          label="字段三"
          width="120">
          <template scope="scope">{{ scope.row.word3 }}</template>
        </el-table-column>
        <el-table-column
          prop="word4"
          label="字段四"
          width="120">
          <template scope="scope">{{ scope.row.word4 }}</template>
        </el-table-column>       
        <el-table-column
          prop="word5"
          label="字段五"
          width="120">
          <template scope="scope">{{ scope.row.word5 }}</template>
        </el-table-column> 
        <el-table-column
          prop="word6"
          label="操作"
          width="175">
          <template scope="scope">
            <el-button type="info">编辑</el-button>
            <el-button type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="foot">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="60">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: '',
        options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }],
          value: '',
        tableData3: [{
            date: 1,
            word1:10004,
            word2:2,
            word3:'YYALIPAY',
            word4:'ZC',
            word5:10
          },{
            date: 1,
            word1:10004,
            word2:2,
            word3:'YYALIPAY',
            word4:'ZC',
            word5:10
          },{
            date: 1,
            word1:10004,
            word2:2,
            word3:'YYALIPAY',
            word4:'ZC',
            word5:10
          },{
            date: 1,
            word1:10004,
            word2:2,
            word3:'YYALIPAY',
            word4:'ZC',
            word5:10
          },{
            date: 1,
            word1:10004,
            word2:2,
            word3:'YYALIPAY',
            word4:'ZC',
            word5:10
          }],
          ajaxRes:null
      }
    },
    mounted:function(){
      let vm=this;
      let par={
        "count":10,
        "start":0
      };
      this.$http.jsonp('http://api.douban.com/v2/movie/in_theaters',{params:par})
      .then(res=>{
        console.log('ajax请求成功了！',res)
        vm.ajaxRes=res;
      },res=>{

        console.log('ajax请求失败了',res)
      })
    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top-btn{
    margin-left: 240px;
    margin-top: 20px;
  }
  .one{
    width: 130px;
  }
  .table{
    margin-left: 240px;
    margin-top: 30px;
  }
  .el-table{
    width: 84.5%!important;
  }
  .foot{
    margin-left: 250px;
    margin-top: 20px;
  }
</style>