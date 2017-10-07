<template>
  <div class="menu">
    <el-row class="tac">
      <el-col :span="8">
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme='dark'>
          <router-link to='/index/userinfo'>
            <el-menu-item index="1"><i class="el-icon-menu"></i>首页</el-menu-item>
          </router-link>
          <router-link to='/table'>
            <el-menu-item index="2"><i class="el-icon-menu"></i>示例表格</el-menu-item>
          </router-link>
          <router-link to='/contact'>
            <router-link to='/newFilm'><el-menu-item index="/newFilm"><i class="el-icon-setting"></i>热映电影</el-menu-item></router-link>
          </router-link>
          <router-link to='/index'>
            <el-menu-item index="4"><i class="el-icon-setting"></i>电影搜索</el-menu-item>
          </router-link>                         
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-message"></i>综合实例</template>
            <el-menu-item-group>
              <router-link to='/case/form'><el-menu-item index="/case/form">form表单编辑</el-menu-item></router-link>
              <router-link to='/case/editor'><el-menu-item index="/case/editor">富文本编辑器</el-menu-item></router-link>
              <el-menu-item index="5-2">小组件</el-menu-item>
              <el-submenu index="5-2">
                <template slot="title"><i class="el-icon-message"></i>第二级菜单</template>
                <el-menu-item-group>
                  <el-menu-item index="5-1">没权限重定向401</el-menu-item>
                  <el-menu-item index="5-2">地址错误跳404</el-menu-item>              
                </el-menu-item-group>
              </el-submenu>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title"><i class="el-icon-message"></i>系统设置</template>
            <el-menu-item-group>
              <el-menu-item index="6-1">权限管理</el-menu-item>
              <el-menu-item index="6-2">登录日志</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title"><i class="el-icon-message"></i>学生信息管理</template>
            <el-menu-item-group>
              <router-link to='/studentsInf/studentsList'><el-menu-item index="7-1">学生信息列表</el-menu-item></router-link>
              <router-link to='/studentsInf/studentsAdd'><el-menu-item index="7-2">学生信息添加</el-menu-item></router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    <header>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          楚乔<img src="./userpur.jpg" alt="" class="userpur"><i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>首页</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>切换主题</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </header>
 
    <router-view></router-view>
  </div>
  
</template>


<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  body,html{
    padding: 0;
    margin: 0;

  }
  .tac{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background: #324157;
    z-index: 10;
  }
  .tac{
    width: 200px;
  }
  .el-menu-item-group__title{
    padding: 0;
  }
  .el-col-8{
    width: 100%;
  }
  a{
    text-decoration: none;
  }

  header{
    position: relative;
    top: 0;
    left: 0;
    background: #eef1f6;
    height: 50px;
    width: 100%;
    overflow: hidden;
  }
  .el-dropdown{
    float: right;
    margin-right: 26px;
    line-height: 52px;
    cursor: pointer;
  }
  .userpur{
    width: 40px;
    border-radius: 50%;
    vertical-align: -13px;
  }
  .top{
    margin-top: 20px;
    margin-left: 210px;
  }
  .el-breadcrumb{
    font-size: 15px;
  }
</style>
