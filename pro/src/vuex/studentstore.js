import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

// 请求后端接口

function reqAdminList() {
    
    axios({
        url: '/VueHandler/AdminHandler?action=usershow',
        method: 'post',
        data:{
            userName:state.searchTxT.Name,
            email:state.searchTxT.Email,
            phone:state.searchTxT.Phone,
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
                    email: res.list[i].email,
                    phone: res.list[i].phone,
                    isstate: res.list[i].isstate,
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
    // 请求页码
    pageStart: 1,
    // 获取最大页码
    maxPage: 1,
    // 用户输入内容
    searchTxT: {
        Name: '',
        Email: '',
        Phone: '',
    },
    // 后端返回数据
    tableList: {
        list: [],
        getAdminList: reqAdminList,
    },
    // 用户信息
    
}

var mutations = {
    //传查询数据
    setSearch(state,data){
        state.searchTxT.Name = data.searchName;
        state.searchTxT.Emial = data.searchEmial;
        state.searchTxT.Phone = data.searchPhone;
    },
  // 用来修改state里的数据
    
    

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