<template>
	<div :style="alertStyle">     <!-- 遮罩层 -->
		<div :style="alertAll">      <!--放置修改密码弹窗的 容器-->
			<div class="alert-head">
				&nbsp;<span class="head-title">修改密码</span>
				<img src="../assets/images/x.png" @click="hideAlert" />
			</div>
			<ul class="alert-body">
				<li>	
					<span>当前密码:</span>
					<input type="text" v-model='old_pw'/>	
				</li>
				<li>
					<span>新密码:</span>
					<input type="text" v-model='new_pw'/>
				</li>
				<li>
					<span>确定密码:</span>
					<input type="text" v-model='enter_pw'/>
				</li>
			</ul>
		    <div>
		    	<button class="btn btn-success" @click="updatePwd">确定</button>
		    	<button class="btn btn-info" @click="hideAlert">取消</button>
		    </div>
		</div>	
	</div>
</template>

<script>
	export default {
		data(){
			return{
				old_pw:'',
				new_pw:'',
				enter_pw:'',
				alertStyle:{   //遮罩层
					'width':window.innerWidth+'px',
					'height':window.innerHeight+'px',
					'position':'absolute',
					'top':0,
					'left':0,
					'background':"white",
					'opacity':0.9,
					'z-index':123
				},
				alertAll:{
					'width':"410px",
					"height":"200px",
					"position":'relative',
					"top":window.innerHeight/2-200/2+'px',
					"left":window.innerWidth/2-410/2 +'px',
					"border":"5px solid #4F66bb",
					"background":"#fff"
				}
			}
		},
		methods:{
			hideAlert(){
				this.$emit('hide');
			},
			updatePwd(){
				var that = this;
				// 获取用户输入，验证两次新密码是否一致，一致请求后端接口修改
				if(this.old_pw != this.new_pw){
					if(this.new_pw == this.enter_pw){
						// 请求接口
						this.$axios({
							url:'/VueHandler/AdminHandler?action=updatepass',
							method:'post',
							data:{
								userPwd:this.old_pw,
								newPwd:this.new_pw
							}
						}).then(function(res){
							if(res.data.success){
								alert('修改成功，请重新登录');
								that.hideAlert()
								that.old_pw='';
								that.new_pw='';
								that.enter_pw='';
								// window.location.href = '#/';
							}else{
								alert(res.data.err);
							}
						})
					}else{
						alert('新密码与确认新密码不一致');
					}
				}else{
					alert('新密码与原密码不能一致');
				}
			}
		}
	}
</script>

<style scoped>
  .alert-head {
    height: 30px;
    background: #4F66B3;
    margin-bottom: 10px;
  }

  .head-title {
    color: white;
    line-height: 30px;
    font-size: 14px;
    display: inline-block;
    /*float: left*/
  }

  .alert-head img {
    float: right;
    margin-top: 5px;
    margin-right: 5px;
    cursor: pointer;
  }

  ul.alert-body li {
    display: block;
    margin-bottom: 10px
  }

  ul.alert-body li span {
    display: inline-block;
    width: 80px;
    text-align: right;
  }

  ul.alert-body li input {
    width: 200px;
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
    background: #3cadcf;
    float: right;
    margin-right: 60px;

  }

  .btn-info:hover {
    background: #1f8fb0;
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

