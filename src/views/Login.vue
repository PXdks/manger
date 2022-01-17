<!--suppress ALL -->
<template>
  <div class="Main"  >
    <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer">
      <div style="color: #409EFF;font-size: 36px;text-align: center;padding: 18px"><a-icon type="home" theme="twoTone" two-tone-color="#eb2f96" /> 系统登录</div>
      <el-form-item prop="username">
        <el-input prefix-icon="el-icon-s-custom" type="text" auto-complete="false" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input prefix-icon="el-icon-lock" show-password type="text" v-model="loginForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>

  <el-checkbox class="loginCheckbox" v-model="checked">记住我</el-checkbox>
  <el-link type="success" style="margin-left: 300px" @click="register">注册</el-link>

  <el-button type="primary" style="width: 100%" @click="loginSubmit"><a-icon type="login" />登录</el-button>
    </el-form>

  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  name: "Login",
  data() {
    return {
      loginForm: {

      },
      checked: true,
      rules: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }],
      }
    };
  },
  created() {
    sessionStorage.removeItem("username");
  },
  methods: {

    loginSubmit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          request.post("/admin/login",this.loginForm).then(res=>{
            if(res.code==='0')
            {    sessionStorage.setItem("isLogin",'true');
              this.$router.push({name:'Main',params:{name:this.loginForm.username}});
              this.$message({
                message: '登录成功！',
                type: 'success'
              });
              sessionStorage.setItem("username",JSON.stringify(res.data));
              this.$router.push("/");
            }

            else
            {
              this.$message({
                message: res.msg,
                type: 'error'
              });
            }
          })
        }
      });
    },
    register()
    {
      this.$router.push("/register");
    }
  },
};
</script>

<style scoped>
.loginContainer {
  width: 400px;
  margin: 100px auto;

}
.Main{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: lightpink;
  background-image: url('https://w.wallhaven.cc/full/6o/wallhaven-6olw9x.jpg');
  background-position: left ;


}




</style>
