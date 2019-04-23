<template>
  <div>
    <div>
      <fchead></fchead>
    </div>
    <!--搜索框  + 按钮-->
    <div class="adminListContent">
      <!-- 全包裹 -->
      <span style="color:#2880E4">首页/</span>
      <span>用户管理/</span>
      <span>学员列表</span>
      <!-- 导航  ===》 面包屑导航  -->
      <div class="fc_section_wrap">
        <!-- 搜索 还有 添加的按钮 -->
        <ul>
          <li class="admin_top_input">
            <input type="text" ref="searchName" placeholder="用户名">
            <input type="text" ref="searchEmail" placeholder="邮箱">
            <input type="text" ref="searchPhone" placeholder="手机号">
          </li>
          <li>
            <button class="btn_class" style="background: #5cb85c;" @click="search">查询</button>
          </li>
          <li class="admin_top_input">
            <input type="text" ref="addusername" placeholder="用户名">
            <input type="text" ref="addEmail" placeholder="邮箱">
            <input type="text" ref="addPhone" placeholder="手机号">
          </li>
          <li class="admin_top_add">
            <button class="btn_class" style="background:#4F66B3;" @click="addstudent()">+ 添加</button>
          </li>
        </ul>
      </div>

      <!-- 表格 -->
      <div class="box">
        <div class="box_top">
          <div class="box_left"></div>
          <div class="box_right">学员列表</div>
        </div>

        <div class="box_bottom">
          <tablelist></tablelist>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//加载  头部  fchead组件
import fchead from "./fchead";
//加载 表格组件
import tablelist from "./studentList";
//
import store from "../vuex/studentstore";
import { mapState, mapMutations } from "vuex";
export default {
  store,
  data() {
    return {
      searchUser: ""
    };
  },
  methods: {
    clearInp(obj) {
      for (var k in obj.$refs) {
        obj.$refs[k].value = "";
      }
    },
    search() {
      // 修改vuex数据
      this.$store.commit("setSearch", {
        searchName: this.$refs.searchName.value,
        searchEmial: this.$refs.searchEmail.value,
        searchPhone: this.$refs.searchPhone.value
      });

      // 加载数据
      this.$store.state.tableList.getAdminList();
      this.clearInp(this);
    },
    addstudent() {
      //请求接口
      var that = this;
      this.$axios({
        url: "/VueHandler/AdminHandler?action=adduser",
        method: "post",
        data: {
          adduserName: this.$refs.addusername.value,
          addemail: this.$refs.addEmail.value,
          addphone: this.$refs.addPhone.value
        }
      }).then(function(res) {
        if (res.data.success) {
          alert(res.data.success);

          that.$store.state.tableList.getAdminList();
          //清空文本框
          that.clearInp(that);
        } else {
          alert(res.data.err);
        }
      });
    }
  },
  components: {
    fchead,
    tablelist
  },
  computed: {}
};
</script>





<style scoped>
.adminListContent {
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background: #f5f5f5;
  min-width: 1100px;
  height: 100%;
}

.admin_top_input input {
  width: 250px;
  height: 25px;
  padding-left: 5px;
}

.fc_section_wrap {
  /* height: 35px; */
  padding: 10px;
  border: 1px solid #c0c0c0;
  background: #ffffff;
  margin-top: 15px;
  margin-bottom: 15px;
}

.fc_section_wrap ul {
  margin: 0;
  padding: 0;
}

.fc_section_wrap ul li {
  display: inline-block;
  margin: 10px 0 0 0;
  margin-right: 5px;
  padding: 0;
}

.admin_top_add {
  /* float: right; */
}

.btn_class {
  width: 80px;
  height: 28px;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  color: #fff;
  margin-right: 10px;
}

.box {
  width: 100%;
  line-height: 34px;
  background: #fff;
  text-align: left;
  margin-top: 15px;
  border: 1px solid #c0c0c0;
}

.box_top {
  height: 34px;
  position: relative;
  border-bottom: 1px solid #c0c0c0;
}

.box_left {
  position: absolute;
  width: 34px;
  height: 34px;
  border-right: 1px solid #c0c0c0;
  background: url(../assets/box.png) no-repeat center;
}

.box_right {
  padding-left: 40px;
}

.box_bottom {
  overflow: hidden;
}
</style>