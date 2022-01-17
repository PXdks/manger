<template>
<div>
  <el-container>
    <el-header> <label >请输入</label> <input type="text" AUTOCOMPLETE="OFF" v-model="query" @keyup.enter="getmusic">
      <el-button type="primary" icon="el-icon-search" @click='getmusic'>搜索</el-button>
    </el-header>
    <el-main>
      <li></li>
      <li  v-for="item in musiclist" :key="item" @click="playMusic(item.id)">{{item.Array}}
      <a href="javascript:;"  > {{item.name}}</a></li>
    </el-main>
  </el-container>


  <audio v-bind:src="musicUrl" ref='audio'   controls autoplay="true">
  </audio>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Music",
  data() {
    return{
      query: '',
      musiclist: [],
      musicUrl:'',
    }

  },
  methods: {
    getmusic: function () {
      alert('成功!!')
      var that = this;
      axios.get("https://autumnfish.cn/search?keywords=" + this.query).
      then(function (response) {
        that.musiclist = response.data.result.songs;
        console.log(response);
      }, function (error) {
        console.log(error);
      })
    },
    playMusic: function (musicId) {
      console.log(musicId);
      const that = this;
      axios.get("https://autumnfish.cn/song/url?id=" + musicId).then(function (response) {
            console.log(response.data.data[0].url);
            that.musicUrl = response.data.data[0].url;
            console.log(that.musicUrl);
          })
    }
  },
}
</script>

<style scoped>

</style>