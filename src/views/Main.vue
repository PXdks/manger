<template>

<div >
  <a-alert :class="{active:Isdisplay}" type="error" message="未登录" banner />
  <el-menu   active-text-color="#ffd04b" style="margin-left:1000px" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" >{{$route.params.username}}xxxx</el-menu-item>
    <el-menu-item  index="4"><a-icon type="home" theme="twoTone" two-tone-color="#52c41a" /> <a-popconfirm
        title="确定退出登录吗"
        ok-text="Yes"
        cancel-text="No"
        @confirm="Logout"
        @cancel="cancel"
    >
      <a-icon slot="icon" type="question-circle-o" style="color: red" />
      <a href="#">退出登录</a>
    </a-popconfirm></el-menu-item>
  </el-menu>
<div > </div>
  <a-layout id="components-layout-demo-side" style="min-height: 120vh">

    <a-layout-sider v-model="collapsed" collapsible>

      <div class="logo" > 书城</div>
      <a-menu  theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="form" />
          <span>书籍列表</span>
          <router-link to="/Book/BookList"></router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="read" theme="filled" />
          <span>书籍管理</span>
          <router-link to="/Book/BookOperate"></router-link>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>User</span></span>
          <a-menu-item key="3">
            Tom
          </a-menu-item>
          <a-menu-item key="4">
            Bill
          </a-menu-item>
          <a-menu-item key="5">
            Alex
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="team" /><span>Team</span></span>
          <a-menu-item key="6">
            Team 1
          </a-menu-item>
          <a-menu-item key="8">
            Team 2
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <a-icon type="file" />
          <span>File</span>
          <router-link to="/Test/T1"></router-link>
        </a-menu-item>
        <a-menu-item key="10">
          <a-icon type="file" />
          <span>回到主页</span>
          <router-link to="/goMain"></router-link>
        </a-menu-item>
        <a-menu-item key="11">
          <a-icon type="file" />
          <span>获取图片</span>
          <router-link to="/GetImg"></router-link>
        </a-menu-item>
        <a-menu-item key="12">
          <a-icon type="play-square" />
          <span>音乐</span>
          <router-link to="/Music"></router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />

      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>bill</a-breadcrumb-item>
          <a-breadcrumb-item>{{ $route.params.username }}</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '120vh',overflow:'hidden' }">
          <router-view/>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>

</div>

</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
      Isdisplay:true,
    };
  },
  created() {
let Login=sessionStorage.getItem("isLogin");
      if (Login==null)
      {
        this.Isdisplay=false;
        this.$message({
          type:'error',
          message:"请先登录",
        })
      }
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    Logout()
    {
      this.$router.push("/goMain")
      this.$router.push("/Logout");
      this.$message({
        type:'success',
        message:"退出登录成功",
      })
    }
  }
}
</script>

<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 15px 10px 10px;
  text-align: center;
  font-size: larger;
  color: #409EFF;
}
.active{

  display: none;
}
</style>