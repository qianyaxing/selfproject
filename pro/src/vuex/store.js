// 引入依赖
import Vue from 'vue'
import Vuex from 'vuex'
// 加载
Vue.use(Vuex)
// 存储数据
var state ={
    isShow:false,
}
// 操作数据的方法 
var mutations={
    // 
    toggle(){
        this.state.isShow = !this.state.isShow
    },
}
// 抛出引用
export default new Vuex.Store({
    state,
    mutations,
})