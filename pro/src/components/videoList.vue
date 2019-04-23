<template>
  <div class="box-wrap">
    <table class="tableList_table table-hover table-bordered">
      <thead>
        <tr>
          <th>视频名称</th>
          <th>绑定的课程</th>
          <th>视频时长</th>
          <th>上传日期</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr @click="onTrClick(rowData,index)" v-for="(rowData,index) in list" v-bind:class="{'tableList_tr_black':index%2==1?true:false, 'clickBg':rowData.isClick}" >
          <td v-for="(colType,index) in th_list" v-html="rowData[colType.type]" v-if="index < th_list.length-1"> </td> -->
        <tr v-for="value,index in list">
          <!-- 展示数据 -->
          <td>{{value.Vname}}</td>
          <td></td>
          <td>{{value.Vtime}}</td>
          <td>{{value.createAt}}</td>
          <td>
            <button @click="onUpdate(value)" >编辑</button>
            <button @click="onDelete(value)" >删除</button>
            <!-- <button
              @click="onChangeState(rowData)"
              v-if="rowData.freeze&&!appendDir"
            >{{rowData.isstate?"解冻":"冻结"}}</button>

            <button @click="onAdd(rowData)" v-if="rowData.add&&appendDir">添加</button>
            <button
              @click="onSetFrame(rowData)"
              v-if="rowData.frame&&!appendDir"
            >{{rowData.stateNum==1||rowData.stateNum==3?'上架':'下架'}}</button>
            <button
              @click="onTop(rowData)"
              v-if="rowData.stick&&!appendDir"
            >{{!rowData.isTop?"置顶":"取消置顶"}}</button> -->
          </td>
        </tr>

        <tr>&nbsp;</tr>
        <tr>&nbsp;</tr>
        <tr>&nbsp;</tr>
      </tbody>
      <tfoot>
        <tr>
          <!-- 绑定列数 -->
          <td colspan="6" class="paging_class">
            <div>
              <ul class="pageTheLi">
                <li>
                  <a @click="onFirst">
                    <img src="../assets/first.png">
                  </a>
                </li>
                <li>
                  <a @click="onPrev">
                    <img src="../assets/prev.png">
                  </a>
                </li>
                <li style="border:none;">{{$store.state.pageStart}}页/{{$store.state.maxPage}}页</li>
                <li>
                  <a @click="onNext">
                    <img src="../assets/next.png">
                  </a>
                </li>
                <li>
                  <a @click="onLast">
                    <img src="../assets/last.png">
                  </a>
                </li>
              </ul>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
import store from '../vuex/videoStore'
export default {
  store,
  mounted(){
    store.state.tableList.getAdminList();
  },
  computed:{
    list(){
      return store.state.tableList.list;
    },
   
  },
  methods:{
    onUpdate(data){
      this.$store.commit('showAdd',"编辑");
      // this.$store.commit('setInp',data)
    },
    onDelete(data){
      var that = this;
      // 后端请求删除
      this.$axios({
        url:'/VueHandler/VideoHandler?action=delete',
        method:'get',
        params:{
          ID:data.ID,
        }
      }).then(function(res){
        if(res.data.success){
          alert(res.data.success)
          that.$store.state.tableList.getAdminList();       
        }else{
          alert(res.data.err);
        }
      })
    },
    onNext(){
      this.$store.commit('addPage');
      this.$store.state.tableList.getAdminList();
    },
    onPrev(){
      this.$store.commit('minusPage');
      this.$store.state.tableList.getAdminList();
    },
    onFirst(){
      this.$store.commit('first');
      this.$store.state.tableList.getAdminList();
    },
    onLast(){
      this.$store.commit('last');
      this.$store.state.tableList.getAdminList();
    }
  }
};
/* 
	
*/
</script>

<style scoped>
.clickBg {
  background-color: #f9cc9d !important;
}
.tableList_table {
  width: 100%;
  /*height:400px;*/
  background-color: #ffffff;
  border-collapse: collapse;
}

.tableList_table thead tr {
  color: #666666;
  background-color: #efefef;
  border: 1px solid #c0c0c0;
  height: 34px;
  font-size: 13px;
}

.tableList_table tbody tr {
  height: 34px;
  font-size: 14px;
}

.tableList_table tbody tr td {
  padding-left: 10px;
  height: 34px;
  font-size: 14px;
}

.tableList_table thead tr {
  border-right: none;
}

.tableList_table thead tr th {
  padding-left: 10px;
  border-right: 1px solid #c0c0c0;
}

.tableList_tr_black {
  /* 隔行换色 使用的样式*/
  background-color: #fafafa;
  /*background-color: red;*/
}

.tableList_table tbody tr:hover {
  /*鼠标移入时的背景颜色*/
  background-color: #cddae7;
}

.tableList_table tbody button {
  margin: 0;
  padding: 0;
  list-style-type: none;
  color: blue;
  background: none;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  /* width: 50px; */
  height: 30px;
  line-height: 30px;
}

.tableList_table tbody button:hover {
  cursor: pointer;
}

#tableList_table_tbody_tr_click {
  border: 1px solid #c0c0c0;
}

.tableList_table tfoot {
  width: 100%;
}

.tableList_table tfoot tr {
  width: 100%;
  height: 30px;
  border: 1px solid #c0c0c0;
}

.tableList_table tfoot tr td {
  height: 30px;
}

.tableList_table tfoot tr td li {
  border: none;
}

.tableList_table tfoot tr td li img {
  vertical-align: bottom;
  margin-bottom: 3px;
}

.tableList_table tfoot tr td li img:hover {
  cursor: pointer;
}

.paging_class {
  text-align: left;
}

.box-wrap {
  padding: 0;
}
.pageTheLi {
  margin: 0;
}
.pageTheLi li {
  float: left;
  margin-left: 30px;
}
</style>