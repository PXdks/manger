<template>
<div>
  <a-button style="margin: 0 0 10px auto" type="primary" @click="add">
    Primary
  </a-button>
  <a-table bordered :columns="columns" :data-source="data">
    <a slot="name" slot-scope="text">{{ text }}</a>
  </a-table>
</div>
</template>

<script>
import request from "@/utils/request";

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',

  },
  {
    title: '书名',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '作者',
    dataIndex: 'author',
    key: 'author',

  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '出版社',
    dataIndex: 'press',
    key: 'press',
  },
  {
    title: '出版时间',
    dataIndex: 'presstime',
    key: 'presstime',
  }
];


export default {
  name: "GetImg",
data()
{
  return{
    data:[],
    columns,
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
        this.data=res.data.records;
       // this.total=res.data.total;
      })
    },
  }
}

</script>

<style scoped>

</style>