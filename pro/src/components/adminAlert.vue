<template>
  <div class="alert-shade">
    <!--遮罩-->
    <div class="alert-box">
      <!-- 具体的容器-->
      <div class="alert-head">
        <span class="head-title">{{$store.state.title}}管理员</span>
        <img @click="close" src="../assets/images/x.png">
      </div>
      <ul class="alert-body">
        <li>
          <span>用户名：</span>
          <input type="text" v-model="userInfo.userName">
        </li>
        <li>
          <span>姓名：</span>
          <input type="text" v-model="userInfo.truename">
        </li>
        <li>
          <span>手机号：</span>
          <input type="text" v-model="userInfo.phone">
        </li>
        <li>
          <span>权限选择：</span>
          <select v-model="userInfo.power">
            <!-- 通过 v-for 循环   v-bind绑定-->
            <!--  { power:"权限名称",powerCode:"权限编码"}-->
            <!-- <option >权限</option> -->
            <option value="系统管理员">系统管理员</option>
            <option value="课程管理员">课程管理员</option>
          </select>
        </li>
      </ul>
      <div>
        <button class="btn btn-success" @click="enter">确定</button>
        <button class="btn btn-info" @click="close">取消</button>
      </div>
    </div>
  </div>
</template>
<script>
import store from "../vuex/adminStore";
export default {
  store,
  methods: {
    

    
    enter() { 
      this.userInfo
      // 请求后端接口存储数据
      var that = this;
      //声明请求数据
      var url = "";
      var data = {
        userName: this.userInfo.userName,
        // tokenId: "",
        turename: this.userInfo.truename,
        phone: this.userInfo.phone,
        // password: "123456",
        power: this.userInfo.power
      };
      //判断注册还是更新\修改
      if (!this.userInfo.tokenId) {
        url = "/VueHandler/AdminLoginAndRegHandler?action=add";
        data.password = '123456';
      } else {
        url = "/VueHandler/AdminHandler?action=update";
        data.tokenId = this.userInfo.tokenId;
      }

      this.$axios({
        url: url,
        method: "post",
        data: data,
      }).then(function(res) {
        // res that.userInfo
        console.log(res);
        if (res.data.success) {
          alert(res.data.success);
          that.close();
          that.$store.commit("setInp");
          that.$store.state.tableList.getAdminList();
        } else {
          alert(res.data.err + ",请联系管理员");
        }
      });
    },
    close() {
      this.$store.commit("hideAdd");
      this.$store.commit("setInp");
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    }
  }
};
</script>
<style scoped>
.alert-shade {
  position: fixed;
  top: 20px;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 10002;
  /* background: black; */
  /* opacity: 0.8; */
  background: rgba(000, 000, 000, 0.5);
}
.alert-box {
  opacity: 1;
  width: 410px;
  height: 250px;
  background: #fff;
  border: 5px solid #4f66bb;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10003;
  margin: auto;
}
.alert-head {
  height: 30px;
  background: #4f66b3;
  margin-bottom: 10px;
}

.head-title {
  color: white;
  line-height: 30px;
  font-size: 14px;
  display: inline-block;
  float: left;
}

.alert-head img {
  display: inline-block;
  float: right;
  margin-top: 5px;
  margin-right: 5px;
  cursor: pointer;
}

ul.alert-body li {
  display: block;
  margin-bottom: 10px;
}

ul.alert-body li span {
  display: inline-block;
  width: 80px;
  text-align: right;
}

ul.alert-body li input {
  height: 18px;
  width: 200px;
}

ul.alert-body li select {
  width: 204px;
  height: 24px;
}

.btn {
  width: 80px;
  height: 30px;
  line-height: 20px;
  border: none;
  color: #fff;
  text-align: center;
  cursor: pointer;
}

.btn-info {
  background: #4f66bd;
  float: right;
  margin-right: 60px;
}

.btn-info:hover {
  background: #4f66a4;
}

.btn-success {
  background: #5cb85c;
  float: left;
  margin-left: 60px;
}

.btn-success:hover {
  background: #449d44;
}
</style>