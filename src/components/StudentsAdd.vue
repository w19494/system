<template>
    <div class="peo">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm ">

            <el-form-item label="学生姓名" required>
                <el-input v-model="ruleForm.studentName" class='sname'></el-input>
            </el-form-item>

            <el-form-item label="性别" prop="sex" required>
                <el-radio-group v-model="ruleForm.sex">
                    <el-radio label="man">男</el-radio>
                    <el-radio label="woman">女</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="民族" prop="minzu">
                <el-select v-model="ruleForm.minzu" placeholder="民族">
                    <el-option label="汉族" value="10010"></el-option>
                    <el-option label="壮族" value="10011"></el-option>
                    <el-option label="苗族" value="10013"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="籍贯" prop="jiguan">
                <el-select v-model="ruleForm.jiguan" placeholder="籍贯">
                    <el-option label="广西" value="20010"></el-option>
                    <el-option label="广东" value="20011"></el-option>
                    <el-option label="湖南" value="20013"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="政治面貌" prop="mianmao">
                <el-select v-model="ruleForm.mianmao" placeholder="政治面貌">
                    <el-option label="党员" value="30010"></el-option>
                    <el-option label="团员" value="30011"></el-option>
                    <el-option label="群众" value="30013"></el-option>
                </el-select>
            </el-form-item>  
            <el-form-item label="二级学院" prop="xueyuan">
                <el-select v-model="ruleForm.xueyuan" placeholder="二级学院">
                    <el-option label="文学院" value="40010"></el-option>
                    <el-option label="外国语学院" value="40011"></el-option>
                    <el-option label="法学院" value="40013"></el-option>
                </el-select>
            </el-form-item>                                   
            <el-form-item label="入校时间" required>
                <el-col :span="11">
                    <el-form-item prop="ruxiaodate">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.ruxiaodate" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="出生时间" required>
                <el-col :span="11">
                    <el-form-item prop="createDate">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.createDate" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="是否全日制" prop="quanrizhi" required>
                <el-switch on-text="" off-text="" v-model="ruleForm.quanrizhi"></el-switch>
            </el-form-item>

            <el-form-item label="兴趣爱好" prop="ins">
                <el-checkbox-group v-model="ruleForm.ins">
                    <el-checkbox label="checkbox1">吃饭</el-checkbox>
                    <el-checkbox label="checkbox2">睡觉</el-checkbox>
                    <el-checkbox label="checkbox3">打电脑</el-checkbox>
                    <el-checkbox label="checkbox4">玩手机</el-checkbox>
                </el-checkbox-group>
            </el-form-item>

            <el-form-item label="活动形式" prop="beizhu" class='text'>
                <el-input type="textarea" v-model="ruleForm.beizhu"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                    "address":'',
                    "beizhu":'',
                    "birthDate":'',
                    "ins":[],
                    "jiguan":"",
                    "mianmao":"",
                    "minzu":"",
                    "quanrizhi":false,
                    "ruxiaodate":"",
                    "sex":"man",
                    "studentName":"",
                    "xueyuan":"",
                },
                rules: {
                  name: [
                    { required: true, message: '请输入学生姓名', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                  ],
                },

            };
        },
        methods: {
            //提交数据
            submitForm(formName) {
                let vem=this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('提交成功');
                        vem.Ajax()

                    } else {
                        console.log('提交失败');
                        return false;
                    }
                });
            },
            //
            resetForm(formName) {
                this.$refs[formName].resetFields();


            },
            Ajax(){
                let vm=this;
                let par={
                    

                };
                this.$http.post('http://localhost:3000/api/addStudents',this.ruleForm)
                .then(res=>{
                    console.log('ajax请求成功了！',res)
                    setTimeout(()=>{                              
                        vm.$router.push('/studentsInf/studentsList')
                    },1000);
                },res=>{

                    console.log('ajax请求失败了',res)
                })                 
            },
        },
        mounted(){
            
        },
    }
</script>

<style scoped>
    .peo{
        margin-left: 240px;
        width: 55%;
        margin-top: 20px;
    }
    .sname{
        width: 46%;
    }
    .text{
        width: 53%;
    }
</style>