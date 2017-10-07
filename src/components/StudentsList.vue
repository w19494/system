<template>
  <div>
    <div class="top-btn">
      <el-input v-model="input" placeholder="请输入学生姓名" class="one"></el-input>
      <el-button type="primary" icon="search" @click="nameSearch(input)">搜索</el-button>
      <el-button type="primary" icon="edit" @click='addInf()'>添加</el-button>
      <el-button type="primary" icon="delete" @click='moreDel(mor)'>批量删除</el-button>
      <el-button type="primary" icon="search" @click='downData()'>导出</el-button>
    </div>
    <div class="table">
      <el-table ref="multipleTable" :data="ajaxRes" border tooltip-effect="dark" style="width: 99.3%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center">
        </el-table-column>
        <el-table-column label="序号" width="90" align="center" >
            <template scope="scope">
                <template class="">
                    <p>{{scope.$index+1}}</p>
                </template> 
            </template>
        </el-table-column>
        <el-table-column label="学生姓名" width="120" align="center">
          <template scope="scope">{{ scope.row.studentName }}</template>
        </el-table-column>
        <el-table-column label="性别" width="90" align="center">
            <template scope="scope">
                <p v-if='scope.row.sex=="man"'>男</p>
                <p v-else>女</p>
            </template>
        </el-table-column>
         <el-table-column label="民族" width="90" align="center">
            <template scope="scope">
                <p v-if='scope.row.minzu==10010'>汉族</p>
                <p v-else-if='scope.row.minzu==10011'>壮族</p>
                <p v-else-if='scope.row.minzu==10013'>苗族</p>
                <p v-else>无</p>
            </template>
        </el-table-column>
        <el-table-column label="二级学院" width="120" align="center">
            <template scope="scope">
                <p v-if='scope.row.xueyuan==="40011"'>文学院</p>
                <p v-else-if='scope.row.xueyuan==="40010"'>外国语学院</p>
                <p v-else-if='scope.row.xueyuan==="40013"'>法学院</p>
                <p v-else>无</p>
            </template>
        </el-table-column>       
        <el-table-column label="入校时间" width="120" align="center">
            <template scope="scope">
                <p>{{scope.row.ruxiaodate | capitalize}}</p>
            </template>
        </el-table-column> 
        <el-table-column label="家庭住址" width="120" align="center">
            <template scope="scope">{{ scope.row.address }}</template>
        </el-table-column>
        <el-table-column label="是否全日制" width="120" align="center">
            <template scope="scope">
                <p v-if='scope.row.quanrizhi==true'>是</p>
                <p v-else>否</p>
            </template>
        </el-table-column>          
        <el-table-column prop="word6" label="操作" width="175"  align="center">
          <template scope="scope">
            <el-button type="info" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="foot">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage1"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    import {DateDiff} from '../js/dateDiff.js';
    export default {
        data() {
            return {
                input: '',
                value: '',  
                tableData3:[], 
                currentPage1: 1,
                ajaxRes:null, 
                pageSize:10,
                currPage:1,
                total:0      
            }
        },
        mounted(){
            this.Ajax()
        },
        //时间函数过滤器
        filters:{
            capitalize:function(v){
                if(v==''){
                    return '无'
                }else{
                   return DateDiff(v) 
                }
                
            }
        },
        methods:{
            //后台数据请求
            Ajax(){
                let vm=this;
                let par={
                    "pageSize":10,
                    "currPage":this.currPage,
                    "studentName":this.input,
                };
                this.$http.get('http://localhost:3000/api/queryStudents',{params:par})
                .then(res=>{
                    console.log('ajax请求成功了！',res)
                    vm.ajaxRes=res.body.data.data;
                    vm.total=res.body.data.total
                },res=>{

                    console.log('ajax请求失败了',res)
                })                 
            },
            //翻页
            handleCurrentChange(v){
                this.currPage=v;
                this.Ajax()
            },
            //翻页
            handleSizeChange(){

            },
            //批量选择
            handleSelectionChange(v,index){
                this.mor=v
            },
            //搜索
            nameSearch(v){
                this.input=v;
                this.Ajax();
            },
            //单个编辑
            handleEdit(index, row) {
                this.$router.push( { path: '/studentsInf/studentsUpdata', query: { id: row._id } } );
            },
            //单个删除
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                this.delData(row);
                this.Ajax();                    

                });
            },
            //执行删除函数
            delData(row){
                this.$http.get('http://localhost:3000/api/delStudents',{ params:{ id:row._id } })
                this.$message({
                    message: '删除成功!'

                }); 
                        

                this.Ajax()
               
            },
            moreDel(v){
                this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    for(let index in v){
                        this.delData(v[index]);
                    }       
                });               
                this.Ajax();
            },
            //添加
            addInf(){
                this.$router.push('/studentsInf/studentsAdd')
            },
/*            downData(){
                let vm = this;

                require.ensure([], () => {
                    const { export_json_to_excel } = require('vendor/Export2Excel');
                    const tHeader = ['字段1', '字段2', '字段3', '字段4', '字段5'];
                    const filterVal = ['chnlId', 'hisChnlId', 'chnlName', 'state', 'isavailable'];
                    const list = vm.list;
                    const data = vm.formatJson(filterVal, list);
                    export_json_to_excel(tHeader, data, '导出的列表excel');
                })
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            }        
            */

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
    width: 160px;
    margin-right: 8px;
  }
  .table{
    margin-left: 240px;
    margin-top: 30px;
  }

  .foot{
    margin-left: 250px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>