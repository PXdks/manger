<!--suppress ALL -->
<template>
  <div class="Main"  >
    <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer">
      <div style="color: #409EFF;font-size: 36px;text-align: center;padding: 18px">   <a-icon type="smile" theme="twoTone" />用户注册</div>
      <el-form-item prop="username">
        <el-input prefix-icon="el-icon-s-custom" type="text" auto-complete="false" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input prefix-icon="el-icon-lock" show-password type="text" v-model="loginForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item prop="confirm">
        <el-input prefix-icon="el-icon-lock" show-password type="text" v-model="loginForm.confirm" placeholder="请确认密码"></el-input>
      </el-form-item>
        <el-link type="success" style="margin-left: 320px" @click="back">返回登录</el-link>
        <el-button type="primary" size="medium" style="width: 46%" @click="loginSubmit"> <a-icon type="user-add" />注册</el-button>
        <el-button type="success" size="medium" style="width: 47%" @click="reset('loginForm')"><a-icon type="right-square" />重置</el-button>
    </el-form>
  </div>
</template>

<script>

import request from "@/utils/request";

export default {
  name: "Register",
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
        confirm: [{
          required: true,
          message: '请确认密码',
          trigger: 'blur'
        }],
      }
    };
  },
  methods: {
    back()
    {
      this.$router.push("/Login");
    },
    reset(formName)
    {
      this.$refs[formName].resetFields();
    },

    loginSubmit() {
      if(this.loginForm.password!=this.loginForm.confirm)
      {
        this.$message({
          type:'error',
          message:'密码不一致',
        })
        return
      }
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          request.post("/admin/register",this.loginForm).then(res=>{
            if(res.code==='0')
            {

              this.$message({
                message: '注册成功！',
                type: 'success'
              });
              this.$router.push("/Login");
            }
            else
            {
              this.$message({
                message: res.msg,
                type: 'error'
              });
            }
          })

          console.log("jhhjg");
        }
      });
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
 background-color: #4a008b;
}




</style>