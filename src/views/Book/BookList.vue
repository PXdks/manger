<template>
<div>
  this is a booklist
  <div style="margin: 10px 0">
    <a-input-search style="width: 400px;" placeholder="input search text" enter-button @search="onSearch" />
    <a-button icon="plus-circle" style=" margin-left:10px" type="primary" @click="add">
      新增
    </a-button>
  </div>
  <el-table
      :data="tableData"
      border
      style="width: 100%">
    <el-table-column
        prop="id"
        label="ID"
       >
    </el-table-column>
    <el-table-column
        prop="username"
        label="用户名"
        >
    </el-table-column>

    <el-table-column
        prop="age"
        label="年龄"
       >
    </el-table-column>
    <el-table-column
        prop="sex"
        label="性别"
        >
    </el-table-column>
    <el-table-column
        prop="telephone"
        label="电话"
    >
    </el-table-column>
    <el-table-column
        prop="address"
        label="地址"
    >
    </el-table-column>
    <el-table-column
        fixed="right"
        label="操作"
        >
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="primary" size="small">编辑</el-button>
        <el-popconfirm
            confirm-button-text='好的'
            cancel-button-text='不用了'
            icon="el-icon-info"
            icon-color="red"
            title="确定删除吗？"
            @confirm=" handleDelete(scope.row.id)"
        >
          <el-button  style="margin-left: 10px" type="danger" size="small" slot="reference">删除</el-button>
        </el-popconfirm>
      </template>
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
  <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
     >
   <el-form :model="form" label-width="120px">
     <el-form-item label="用户名">
       <el-input v-model="form.username" style="width: 85%"></el-input>
     </el-form-item>
     <el-form-item label="电话">
       <el-input v-model="form.telephone" style="width: 85%"></el-input>
     </el-form-item>
     <el-form-item label="年龄">
       <el-input v-model="form.age" style="width: 85%"></el-input>
     </el-form-item>
     <el-form-item label="性别">
       <el-radio v-model="form.sex" label="男">男</el-radio>
       <el-radio v-model="form.sex" label="女">女</el-radio>

     </el-form-item>
     <el-form-item label="地址">
       <el-input type="textarea" v-model="form.address" style="width: 85%"></el-input>
     </el-form-item>

   </el-form>

    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="save">确 定</el-button>
  </span>
  </el-dialog>
</div>
</template>

<script>
import request from "@/utils/request";

export default {
  name: "BookList",
 beforeRouteEnter:(to, from, next)=>{
   console.log("进入booklist页面");
   next(
   )
 },
  beforeRouteLeave:(to, from, next)=> {
    console.log("离开booklist页面");
    next();

  },
  data()
  {
    return {
      form:{},
      dialogVisible:false,
      search:"",
      currentPage:1,
      pageSize:10,
      total:0,
      tableData: []
    }


  },
  created()
  {
   this.load();
  },
  methods:{

load()
{
  request.get("/user",{
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

    handleClick(row) {
      console.log(row);
      this.form=JSON.parse(JSON.stringify(row));
      this.dialogVisible=true;
    },
    //搜索
    onSearch()
    {
      alert("fffdg");
    },
    //删除确认
    handleDelete(id)
    {
      console.log(id);
      request.delete("user/"+id).then(res=>{
        if(res.code==='0')
        {
          this.$message({
            message: '删除成功！',
            type: 'success'
          });
        }
        else
        {
          this.$message({
            message: res.msg,
            type: 'error'
          });
        }
        this.load();//删除之后重新加载表格的数据
      })
    },
    handleSizeChange(pageSize)
    {
      this.pageSize=pageSize;
      this.load();
    },
    handleCurrentChange(pageNum)
    {
      this.currentPage=pageNum;
      this.load();
    },

    add()
    {
this.dialogVisible=true;
this.form={};
    },
    save()
    {
      if(this.form.id)
      {
        request.put("/user",this.form).then(res =>{
          console.log(res)
          if(res.code==='0')
          {
            this.$message({
              message: '更新成功！',
              type: 'success'
            });
          }
      else
          {
            this.$message({
              message: res.msg,
              type: 'error'
            });
          }
        })
        this.load();
        this.dialogVisible=false;
      }
      else{
        request.post("/user",this.form).then(res =>{
          console.log(res)
          if(res.code==='0')
          {
            this.$message({
              message: '新增成功！',
              type: 'success'
            });
          }
          else
          {
            this.$message({
              message: res.msg,
              type: 'error'
            });
          }
          this.load();
          this.dialogVisible=false;
        })
      }
     // this.dialogVisible=false;
    }
  }
}
</script>

<style scoped>

</style>