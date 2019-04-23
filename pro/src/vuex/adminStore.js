import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

// 请求后端接口

function reqAdminList() {

    axios({
        url: '/VueHandler/AdminHandler?action=show',
        method: 'get',

        params: {
            searchText: state.searchTxT,
            pageStart: state.pageStart,
        }
    }).then(function (res) {
        console.log(res)
        if (res.data.data) {
            res = res.data.data;    //{ count:'',list:[],pageSize:'',}
            // 注意！ 后端有bug，暂时不使用count，用list.length
            // 清空页面数据
            state.tableList.list = [];
            // 遍历后端数据
            for (var i = 0; i < res.list.length; i++) {
                var obj = {
                    userName: res.list[i].userName,
                    truename: res.list[i].turename,
                    power: res.list[i].power,
                    phone: res.list[i].phone,
                    createAt: res.list[i].createAt,
                    tokenId: res.list[i].tokenId,
                }
                state.tableList.list.unshift(obj);
            }
            state.maxPage = Math.ceil(res.count / res.pageSize);
        } else {
            alert(res.data.err);
        }
    })
}

var state = {
    //当前系统登录用户ID
    globalTokenId: '',
    // 请求页码
    pageStart: 1,
    // 获取最大页码
    maxPage: 1,
    // 用户输入内容
    searchTxT: '',
    // 后端返回数据
    tableList: {
        list: [],
        getAdminList: reqAdminList,
    },
    // 控制显示隐藏添加窗口
    alertShow: {
        display: 'none',
    },
    title: '',
    // 用户信息
    userInfo: {
        userName: '',
        tokenId: '',
        truename: '',
        phone: '',
        password: '',
        power: '',
    }
}

var mutations = {
    //修改标题

    /*  // 用来修改state里的数据
     delS(value){
         var jsonS={
           'tokenId':value.tokenId,
         } 
         // console.log(index);
         axios({
           url:'/VueHandler/AdminHandler?action=delete',
            method: "get",
           data:jsonS,
   
         }).then(function(res){
           if (!res.data.success) {
             alert('删除成功')
           } else {
             alert( "删除失败");
           }
         })
         
   
       }, */

    setInp(state, data) {
        if (data) {
            state.userInfo.userName = data.userName;
            state.userInfo.truename = data.truename;
            state.userInfo.phone = data.phone;
            state.userInfo.power = data.power;
            state.userInfo.tokenId = data.tokenId;
        } else {
            state.userInfo.userName = '';
            state.userInfo.tokenId = '';
            state.userInfo.truename = '';
            state.userInfo.phone = '';
            state.userInfo.password = '';
            state.userInfo.power = '';
        }
    },
    showAdd(state, str) {
        state.alertShow.display = 'block';
        state.title = str;
    },
    hideAdd(state) {
        state.alertShow.display = 'none';
    },

    addPage(state) {
        if (state.pageStart < state.maxPage) {
            state.pageStart++;
        } else {
            state.pageSize = state.maxPage;
        }
    },
    minusPage(state) {
        if (state.pageStart < 2) {
            state.pageStart = 1;
        } else {
            state.pageStart--;
        }
    },
    first(state) {
        state.pageStart = 1;
    },
    last(state) {
        state.pageStart = state.maxPage;
    },
}

export default new Vuex.Store({
    state,
    mutations,
})