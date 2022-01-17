<template>
<div>
this is a bookoperate

  <el-table
      border
      :data="tableData"
     >
    <el-table-column
        prop="id"
        label="ID"
        >
    </el-table-column>
    <el-table-column
        prop="name"
        label="书名"
        >
    </el-table-column>
    <el-table-column
        prop="author"
        label="作者">
    </el-table-column>
    <el-table-column
        prop="type"
        label="图书类型">
    </el-table-column>
    <el-table-column
        prop="press"
        label="出版社">
    </el-table-column>
  </el-table>
  <div style="margin: 10px 0">
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5,10,20]"
        :page-size="10"
        layout="total, sizes, prev, pager, next"
        :total="total">
    </el-pagination>
  </div>

</div>

</template>

<script>


import request from "@/utils/request";

export default {
  name: "BookOperate",
data()
{
  return{
    currentPage:1,
    tableData:[],
    pageSize:10,
    total:0,
    search: "",
  }
},
  created() {
this.showData();
  },
  methods:{
    showData()
    {
      request.get("/booklist",{
        params:{
          pageNum:this.currentPage,
          pageSize:this.pageSize,
          search:this.search,
        }
      }).then(res=>{
        console.log(res);
        this.tableData=res.data.records;
        this.total=res.data.total;
      })
    },
    handleSizeChange(){

    },
    handleCurrentChange()
    {

    }

  }
}


</script>

<style scoped>

</style>