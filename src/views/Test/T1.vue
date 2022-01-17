<template>
<div>
  this is a test aaaaaaaaaaaaa
<div>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>
        <img src="https://tva1.sinaimg.cn/large/9bd9b167ly1fzjxyqdcfkj20b40b4wf0.jpg" alt="">
      </h3>
    </el-carousel-item>
  </el-carousel>
</div>
</div>
</template>

<script>
export default {
  name: "T1",
  data()
  {
  }
}
</script>

<style scoped>
.el-carousel__item h3 {

  color: #475669;
  font-size: 18px;
width: 100px;
  line-height: 300px;
  margin: 0;

}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>