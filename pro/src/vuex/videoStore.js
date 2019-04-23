import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

// 请求后端接口

function reqAdminList() {
    
    axios({
        url: '/VueHandler/VideoHandler?action=showlist',
        method: 'post',
        data:{
            searchText:state.searchText,
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
                    Vname: res.list[i].Vname,
                    Vstate: res.list[i].Vstate,
                    ID: res.list[i].ID,
                    Vtime: res.list[i].Vtime,
                    createAt: res.list[i].createAt,
                    Vurl: res.list[i].Vurl,
                }
                state.tableList.list.unshift(obj);
            }
            state.maxPage = Math.ceil(res.count/res.pageSize);
        } else {
            // alert(res.data.err);
        }
    })
}

var state = {
    // 请求页码
    pageStart: 1,
    // 获取最大页码
    maxPage: 1,
    // 用户输入内容
    searchText:'',
    // 后端返回数据
    
    alertShow:{
        display:"none",
    },
    title:'',
    tableList: {
        list: [],
        getAdminList: reqAdminList,
    },
    // 用户信息
}

var mutations = {
    // 穿查询数据
    setSearch(state,data){
        state.searchTxT.Name = data.searchName;
        state.searchTxT.Email = data.searchEmail;      
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
    showAdd(state,str){
        state.alertShow.display = 'block';
        state.title = str;
    },
    hideAdd(){
        state.alertShow.display = 'none';
    },
    // setInp(state,data){
    //     if(data){
    //         state.Vname= res.list[i].Vname,
    //         state.Vstate= res.list[i].Vstate,
    //         state.ID=res.list[i].ID,
    //         state.Vtime= res.list[i].Vtime,
    //         state.createAt=res.list[i].createAt,
    //         state.Vurl= res.list[i].Vurl,

    //     }else{
    //         state.userInfo.userName='';
    //         state.userInfo.tokenId='';
    //         state.userInfo.truename='';
    //         state.userInfo.phone='';
    //         state.userInfo.password='';
    //         state.userInfo.power='';
    //     }
    // }
}

export default new Vuex.Store({
    state,
    mutations,
})