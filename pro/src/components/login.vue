<template>
    <div class="content">
	    <bg-canvas></bg-canvas>
	    <!--包裹的div-->
	    <div class="login_wrap" >
	      <img src="../assets/back_logo.png" class="logo" alt="" />
          <form>
          	<!-- 图标 和 输入框  -->
          	<div class="oneinput_box">
          		<span class="icon">
                    <i class="fa fa-shower"></i>
                </span>
          		<input ref="userName" type="text" placeholder="用户名" />
          	</div>
          	<div class="oneinput_box pwd_box">
          		<span class="icon">
          			<i class="fa fa-lock"></i>
          		</span>
          		<input ref="password" v-if="isShow" type="password" placeholder="密码" />
                <input ref="password" v-else type="text" placeholder="密码" />
                <span class="icon right">
                    <i class="fa " v-bind:class="[{'fa-eye-slash':isShow},{'fa-eye':!isShow}]" v-on:click="changePwd"></i>
                </span>
          	</div>
          	<div class="oneinput_box">
          		<span class="icon">
          			<i class="fa fa-lock"></i>
          		</span>
          		<input ref="input_veri" type="text" style="width: 310px;" placeholder="请输入验证码"  />
          		<!-- <div style="width: 99px;height: 30px;border: 1px solid red;display: inline-block;"></div> -->
          	    <veri ref="output_veri"></veri>
          	</div>
          </form>
          <button class="btn btn-info" >忘记密码</button>
          <button class="btn btn-success"  @click="login">登录</button>
	    </div>
	</div>
</template>

<script>
import bgCanvas from './bgCanvas.vue'
import veri from './verification.vue'
export default {
    data(){
        return{
            isShow:true,
        }
    },
    methods:{
        changePwd(){
            this.isShow = !this.isShow;
        },
        login(){
            // 业务流程
            /* 1.获取用户输入验证码，校验验证码
                2.如果验证码无误，获取用户名密码，请求后端校验用户
             */
            // 获取用户验证码
            var inpVeri = this.$refs.input_veri.value.trim();
            // 外围保存实例
            var that = this;
            // 请求校验接口
            this.$axios({
                url:'/VueHandler/AdminLoginAndRegHandler?action=checkVerification',
                method:'get',
                params:{veri:inpVeri},
            }).then(function(res){
                if(res.data.success){
                    // 验证码正确，校验用户名密码
                    var uname = that.$refs.userName.value.trim();
                    var pwd = that.$refs.password.value.trim();
                    // 请求后端校验用户名密码
                    that.$axios({
                        url:'/VueHandler/AdminLoginAndRegHandler?action=login',
                        method:'post',
                        data:{
                            userName:uname,
                            password:pwd,
                            validCode:inpVeri,
                        }
                    }).then(function(res){

                        // 返回结果
                        if(res.data.success){
                            // 验证成功
                            alert("登录成功");
                            window.location.href = "#/home";
                        }else{
                            alert(res.data.err);
                            that.$refs.output_veri.changeVeri();
                        }
                    })
                }else{
                    alert('验证码错误');
                    // 通过组件实例调用组件的方法
                    that.$refs.output_veri.changeVeri();
                }
            })
        }
    },
    components:{
        bgCanvas,
        veri,
    }
}
</script>

<style>
.content {
    background: #0d1953;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .content img {
    border: none;
  }

  .content bg-cavas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .login_wrap {
    width: 560px;
    height: 320px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -180px;
    margin-left: -280px;
    z-index: 3;
    color: #fff;
  }

  .login_wrap .logo {
    margin-left: 180px;
    margin-bottom: 29px;
  }

  .login_wrap form {
    margin-left: 50px;
  }

  .login_wrap input {
    background: #0d1953;
    width: 413px;
    height: 34px;
    line-height: 34px;
    border: 1px solid #3c498a;
    margin-left: 0px;
    padding-left: 5px;
    color: #fff;
  }

  input:focus {
    outline: none;
  }

  .oneinput_box {
    position: relative;
    margin-bottom: 25px;
    overflow: hidden;
    width: 457px;
    padding-left: 10px;
  }

  .oneinput_box * {
    float: left;
  }

  .oneinput_box span {
    background: #0d1953;
    border: 1px solid #3c498a;
    padding: 11px 9px;
    border-right: none 0;
    height: 12px;
    width: 10px;
    padding-left: 10px;
    overflow: hidden;

  }

  .oneinput_box .icon {
    top: 0;
    left: 10px;
    font-size: 10px;
    width: 9px;
    height: 12px;
  }
    .pwd_box input{
        width: 380px;
    }

  .oneinput_box .fa-lock {
    top: 0;
    left: 10px;
    font-size: 10px;
    width: 9px;
    height: 12px;
    z-index: 1000000000;
  }

  .erwei_code {
    width: 91px;
    height: 34px;
    float: right;
    cursor: pointer;
  }

  .btn {
    width: 113px;
    height: 34px;
    line-height: 34px;
    border: none;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }

  .btn-info {
    background: #3cadcf;
    float: left;
  }

  .btn-info:hover {
    background: #1f8fb0;
  }

  .btn-success {
    background: #5cb85c;
    float: right;
  }

  .btn-success:hover {
    background: #449d44;
  }	
</style>
