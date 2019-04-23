<template>
  <div class="hello">
    vue init webpack project

    build   webpack用来构建项目的目录
    config  vue服务器目录
    node_modules  项目依赖目录
    src     自己的项目目录
    static  静态资源目录
    index.html  项目入口文件
    package.json 项目配置文件
    <br>
    cnpm i axios --save
    import
    vue.prototype 

    $http

    this.$axios({
      url:'',
      method:'',  get post
      params:{get请求准备的数据},
      data:{post请求准备的数据},
    }).then(function(res){  //请求成功
      res 服务器的响应
    }).catch(function(err){ //失败
      err 失败的原因
    })
    <br>
    跨域：
    1.后端调整 
    2.设置代理 
    <br>
    <vue-particles 
        color="#ff0000"
        :particleOpacity="1"
        :particlesNumber="120"
        shapeType="circle"
        :particleSize="4"
        linesColor="#000000"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="100"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="repulse"
        class="lizi"></vue-particles>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background: skyblue;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
