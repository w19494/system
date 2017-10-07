<template>
    <div> 
        <div class="one">
            <div class="avatar">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="pur">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  <el-button type="primary" class="btn"><i class="el-icon-upload el-icon--right"></i> 上传头像</el-button>
                </el-upload>
            </div>
            <div class="inf">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span style="line-height: 36px;">个人信息</span>
                    <el-button style="float: right;" type="primary" v-on:click="change_div()" id="edit">编辑</el-button>
                  </div>
                  <div id="text">
                    <p>昵称：楚乔</p>
                    <p>真实姓名：伍猪江</p>
                    <p>性别：女</p>
                    <p>邮件地址：81438234@qq.com</p>
                    <p>个人简介：我的外号叫小六，呵呵。我的爱好是：吃饭睡觉打豆豆</p>
                  </div>
                  <div id="text2">
                    <el-form ref="form" :model="form" label-width="80px">
                      <el-form-item label="昵称">
                        <el-input v-model="form.name"></el-input>
                      </el-form-item>
                      <el-form-item label="真实姓名">
                        <el-input v-model="form.realname"></el-input>
                      </el-form-item>
                      <el-form-item label="邮件地址" >
                        <el-input v-model="form.realname" :disabled="true"></el-input>
                      </el-form-item>

                      <el-form-item label="性别">
                        <el-radio-group v-model="form.resource">
                          <el-radio label="男"></el-radio>
                          <el-radio label="女"></el-radio>
                        </el-radio-group>
                      </el-form-item>
                      <el-form-item label="个人简介">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button @click="cancel">取消</el-button>
                      </el-form-item>
                    </el-form>
                  </div>
                </el-card>
            </div>
        </div> 
        <div>
            <div class="left"><Tu></Tu></div>  
            <div class="right"><Pie></Pie> </div>         
        </div>
                
    </div>  
</template>

<style scoped>
    .one{
        overflow: hidden;
    }
  .avatar-uploader .el-upload {
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-left: 50px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .el-upload .el-upload--text{
    height: 185px;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    margin-left: 50px;
  }
  .avatar {
    position: relative;
    width: 280px;
    height: 190px;
    display: block;
    margin-left: 280px;
    border: 1px solid #000;
    margin-top: 20px;
    float: left;
  }
  .pur{
    float: left;
    margin-left: 65px;
  }
  .btn{
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -54px;
  }
  .inf{
    float: right;
    margin-right: 50px;
  }
  #text {
    font-size: 14px;

  }

  #text>p{
    margin: 25px;
  }
  #text2{
    display: none
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }

  .box-card {
    width: 600px;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
</style>


<script>
    import Tu from './Tu'
    import Pie from './Pie'

  export default {
    data() {
      return {
        imageUrl: '',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      change_div(){
        document.getElementById("text").style.display = 'none' ;
        document.getElementById("text2").style.display = 'block';
        document.getElementById("edit").style.display = 'none';
      },
      onSubmit() {
        document.getElementById("text").style.display = 'block' ;
        document.getElementById("text2").style.display = 'none' ;
        document.getElementById("edit").style.display = 'block';
      },
      cancel(){
        document.getElementById("text").style.display = 'block' ;
        document.getElementById("text2").style.display = 'none' ;
        document.getElementById("edit").style.display = 'block';
      }
    },
    components:{
      Tu,Pie
    }
  }
</script>