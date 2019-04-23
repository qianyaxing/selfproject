<template>
  <div class="main">
    <div>
      <fchead></fchead>
    </div>

    <div class="index_body">
      <!-- 快捷操作开始 -->
      <div class="quick_links">
        <div class="quicklinks_one">
          <h1>课程列表</h1>
          <h2>Course List</h2>
          <div class="icon_wrap">
            <i class="fa fa-th-large"></i>
          </div>
          <p>查询现有课程，添加课程，管理课程</p>
        </div>
        <div class="quicklinks_one">
          <h1>课程添加</h1>
          <h2>Course Add</h2>
          <div class="icon_wrap">
            <i class="fa fa-plus"></i>
          </div>
          <p>添加、修改课程信息，为课程添加视频课件……</p>
        </div>
        <div class="quicklinks_one mouse_on">
          <h1>课程置顶</h1>
          <h2>Course Up</h2>
          <div class="icon_wrap">
            <i class="fa fa-arrow-up"></i>
          </div>
          <p>课程置顶，显示在移动端banner上</p>
        </div>
        <div class="quicklinks_one">
          <h1>视频管理</h1>
          <h2>Video Manage</h2>
          <div class="icon_wrap">
            <i class="fa fa-youtube-play"></i>
          </div>
          <p>管理视频，上传、删除</p>
        </div>
        <div class="quicklinks_one mouse_on">
          <h1>用户管理</h1>
          <h2>User Manage</h2>
          <div class="icon_wrap">
            <i class="fa fa-user"></i>
          </div>
          <p>管理系统用户</p>
        </div>
        <div class="quicklinks_one mouse_on">
          <h1>学员管理</h1>
          <h2>Student Manage</h2>
          <div class="icon_wrap">
            <i class="fa fa-file"></i>
          </div>
          <p>管理学员</p>
        </div>
      </div>

      <!-- 图表开始 -->
      <!--整体 包-->
      <div class="charts_wrap">
        <!--单个的包-->
        <div style="background:#fff; height:340px;">
          <!--具体的图表-->
          <div style="width:500px; height:370px;" ref="echarts01"></div>
        </div>

        <div style="background:#fff; height:700px;">
          <div style="width:700px; height:700px;" ref="echarts02"></div>
        </div>

        <div style="background:#fff; margin-top:-390px; height:340px;">
          <div style="width:500px; height:370px;" ref="echarts03"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fchead from "./fchead"
import echarts from "echarts"

export default {
    components: {
        fchead,
    },
    mounted(){
        var echarts1 = echarts.init(this.$refs.echarts01);
        var option1 = {
            angleAxis: {
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                z: 10
            },
            radiusAxis: {
            },
            polar: {
            },
            series: [{
                type: 'bar',
                data: [1, 2, 3, 4, 3, 5, 1],
                coordinateSystem: 'polar',
                name: 'A',
                stack: 'a'
            }, {
                type: 'bar',
                data: [2, 4, 6, 1, 3, 2, 1],
                coordinateSystem: 'polar',
                name: 'B',
                stack: 'a'
            }, {
                type: 'bar',
                data: [1, 2, 3, 4, 1, 2, 5],
                coordinateSystem: 'polar',
                name: 'C',
                stack: 'a'
            }],
            legend: {
                show: true,
                data: ['A', 'B', 'C']
            }
        };
        echarts1.setOption(option1);
        // ----------------------------------------
        var echarts2 = echarts.init(this.$refs.echarts02);
        var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
        var bgColor = '#2E2733';

        var itemStyle = {
            star5: {
                color: colors[0]
            },
            star4: {
                color: colors[1]
            },
            star3: {
                color: colors[2]
            },
            star2: {
                color: colors[3]
            }
        };

        var data = [{
            name: '虚构',
            itemStyle: {
                normal: {
                    color: colors[1]
                }
            },
            children: [{
                name: '小说',
                children: [{
                    name: '5☆',
                    children: [{
                        name: '疼'
                    }, {
                        name: '慈悲'
                    }, {
                        name: '楼下的房客'
                    }]
                }, {
                    name: '4☆',
                    children: [{
                        name: '虚无的十字架'
                    }, {
                        name: '无声告白'
                    }, {
                        name: '童年的终结'
                    }]
                }, {
                    name: '3☆',
                    children: [{
                        name: '疯癫老人日记'
                    }]
                }]
            }, {
                name: '其他',
                children: [{
                    name: '5☆',
                    children: [{
                        name: '纳博科夫短篇小说全集'
                    }]
                }, {
                    name: '4☆',
                    children: [{
                        name: '安魂曲'
                    }, {
                        name: '人生拼图版'
                    }]
                }, {
                    name: '3☆',
                    children: [{
                        name: '比起爱你，我更需要你'
                    }]
                }]
            }]
        }, {
            name: '非虚构',
            itemStyle: {
                color: colors[2]
            },
            children: [{
                name: '设计',
                children: [{
                    name: '5☆',
                    children: [{
                        name: '无界面交互'
                    }]
                }, {
                    name: '4☆',
                    children: [{
                        name: '数字绘图的光照与渲染技术'
                    }, {
                        name: '日本建筑解剖书'
                    }]
                }, {
                    name: '3☆',
                    children: [{
                        name: '奇幻世界艺术\n&RPG地图绘制讲座'
                    }]
                }]
            }, {
                name: '社科',
                children: [{
                    name: '5☆',
                    children: [{
                        name: '痛点'
                    }]
                }, {
                    name: '4☆',
                    children: [{
                        name: '卓有成效的管理者'
                    }, {
                        name: '进化'
                    }, {
                        name: '后物欲时代的来临',
                    }]
                }, {
                    name: '3☆',
                    children: [{
                        name: '疯癫与文明'
                    }]
                }]
            }, {
                name: '心理',
                children: [{
                    name: '5☆',
                    children: [{
                        name: '我们时代的神经症人格'
                    }]
                }, {
                    name: '4☆',
                    children: [{
                        name: '皮格马利翁效应'
                    }, {
                        name: '受伤的人'
                    }]
                }, {
                    name: '3☆',
                }, {
                    name: '2☆',
                    children: [{
                        name: '迷恋'
                    }]
                }]
            }, {
                name: '居家',
                children: [{
                    name: '4☆',
                    children: [{
                        name: '把房子住成家'
                    }, {
                        name: '只过必要生活'
                    }, {
                        name: '北欧简约风格'
                    }]
                }]
            }, {
                name: '绘本',
                children: [{
                    name: '5☆',
                    children: [{
                        name: '设计诗'
                    }]
                }, {
                    name: '4☆',
                    children: [{
                        name: '假如生活糊弄了你'
                    }, {
                        name: '博物学家的神秘动物图鉴'
                    }]
                }, {
                    name: '3☆',
                    children: [{
                        name: '方向'
                    }]
                }]
            }, {
                name: '哲学',
                children: [{
                    name: '4☆',
                    children: [{
                        name: '人生的智慧'
                    }]
                }]
            }, {
                name: '技术',
                children: [{
                    name: '5☆',
                    children: [{
                        name: '代码整洁之道'
                    }]
                }, {
                    name: '4☆',
                    children: [{
                        name: 'Three.js 开发指南'
                    }]
                }]
            }]
        }];

        for (var j = 0; j < data.length; ++j) {
            var level1 = data[j].children;
            for (var i = 0; i < level1.length; ++i) {
                var block = level1[i].children;
                var bookScore = [];
                var bookScoreId;
                for (var star = 0; star < block.length; ++star) {
                    var style = (function (name) {
                        switch (name) {
                            case '5☆':
                                bookScoreId = 0;
                                return itemStyle.star5;
                            case '4☆':
                                bookScoreId = 1;
                                return itemStyle.star4;
                            case '3☆':
                                bookScoreId = 2;
                                return itemStyle.star3;
                            case '2☆':
                                bookScoreId = 3;
                                return itemStyle.star2;
                        }
                    })(block[star].name);

                    block[star].label = {
                        color: style.color,
                        downplay: {
                            opacity: 0.5
                        }
                    };

                    if (block[star].children) {
                        style = {
                            opacity: 1,
                            color: style.color
                        };
                        block[star].children.forEach(function (book) {
                            book.value = 1;
                            book.itemStyle = style;

                            book.label = {
                                color: style.color
                            };

                            var value = 1;
                            if (bookScoreId === 0 || bookScoreId === 3) {
                                value = 5;
                            }

                            if (bookScore[bookScoreId]) {
                                bookScore[bookScoreId].value += value;
                            }
                            else {
                                bookScore[bookScoreId] = {
                                    color: colors[bookScoreId],
                                    value: value
                                };
                            }
                        });
                    }
                }

                level1[i].itemStyle = {
                    color: data[j].itemStyle.color
                };
            }
        }

        var option2 = {
            backgroundColor: bgColor,
            color: colors,
            series: [{
                type: 'sunburst',
                center: ['50%', '48%'],
                data: data,
                sort: function (a, b) {
                    if (a.depth === 1) {
                        return b.getValue() - a.getValue();
                    }
                    else {
                        return a.dataIndex - b.dataIndex;
                    }
                },
                label: {
                    rotate: 'radial',
                    color: bgColor
                },
                itemStyle: {
                    borderColor: bgColor,
                    borderWidth: 2
                },
                levels: [{}, {
                    r0: 0,
                    r: 40,
                    label: {
                        rotate: 0
                    }
                }, {
                    r0: 40,
                    r: 105
                }, {
                    r0: 115,
                    r: 140,
                    itemStyle: {
                        shadowBlur: 2,
                        shadowColor: colors[2],
                        color: 'transparent'
                    },
                    label: {
                        rotate: 'tangential',
                        fontSize: 10,
                        color: colors[0]
                    }
                }, {
                    r0: 140,
                    r: 145,
                    itemStyle: {
                        shadowBlur: 80,
                        shadowColor: colors[0]
                    },
                    label: {
                        position: 'outside',
                        textShadowBlur: 5,
                        textShadowColor: '#333',
                    },
                    downplay: {
                        label: {
                            opacity: 0.5
                        }
                    }
                }]
            }]
        };
        echarts2.setOption(option2);
        // -------------------------------------
        var echarts3 = echarts.init(this.$refs.echarts03);
        var option3 = {
            tooltip : {
                formatter: "{a} <br/>{c} {b}"
            },
            // toolbox: {
            //     show: true,
            //     feature: {
            //         restore: {show: true},
            //         saveAsImage: {show: true}
            //     }
            // },
            series : [
                {
                    name: '速度',
                    type: 'gauge',
                    z: 3,
                    min: 0,
                    max: 220,
                    splitNumber: 11,
                    radius: '50%',
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 15,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 20,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    axisLabel: {
                        backgroundColor: 'auto',
                        borderRadius: 2,
                        color: '#eee',
                        padding: 3,
                        textShadowBlur: 2,
                        textShadowOffsetX: 1,
                        textShadowOffsetY: 1,
                        textShadowColor: '#222'
                    },
                    title : {
                        // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 20,
                        fontStyle: 'italic'
                    },
                    detail : {
                        // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        formatter: function (value) {
                            value = (value + '').split('.');
                            value.length < 2 && (value.push('00'));
                            return ('00' + value[0]).slice(-2)
                                + '.' + (value[1] + '00').slice(0, 2);
                        },
                        fontWeight: 'bolder',
                        borderRadius: 3,
                        backgroundColor: '#444',
                        borderColor: '#aaa',
                        shadowBlur: 5,
                        shadowColor: '#333',
                        shadowOffsetX: 0,
                        shadowOffsetY: 3,
                        borderWidth: 2,
                        textBorderColor: '#000',
                        textBorderWidth: 2,
                        textShadowBlur: 2,
                        textShadowColor: '#fff',
                        textShadowOffsetX: 0,
                        textShadowOffsetY: 0,
                        fontFamily: 'Arial',
                        width: 100,
                        color: '#eee',
                        rich: {}
                    },
                    data:[{value: 40, name: 'km/h'}]
                },
                {
                    name: '转速',
                    type: 'gauge',
                    center: ['20%', '55%'],    // 默认全局居中
                    radius: '35%',
                    min:0,
                    max:7,
                    endAngle:45,
                    splitNumber:7,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 8
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length:12,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    splitLine: {           // 分隔线
                        length:20,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    pointer: {
                        width:5
                    },
                    title: {
                        offsetCenter: [0, '-30%'],       // x, y，单位px
                    },
                    detail: {
                        // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder'
                    },
                    data:[{value: 1.5, name: 'x1000 r/min'}]
                },
                {
                    name: '油表',
                    type: 'gauge',
                    center: ['77%', '50%'],    // 默认全局居中
                    radius: '25%',
                    min: 0,
                    max: 2,
                    startAngle: 135,
                    endAngle: 45,
                    splitNumber: 2,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 8
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        splitNumber: 5,
                        length: 10,        // 属性length控制线长
                        lineStyle: {        // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    axisLabel: {
                        formatter:function(v){
                            switch (v + '') {
                                case '0' : return 'E';
                                case '1' : return 'Gas';
                                case '2' : return 'F';
                            }
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    pointer: {
                        width:2
                    },
                    title : {
                        show: false
                    },
                    detail : {
                        show: false
                    },
                    data:[{value: 0.5, name: 'gas'}]
                },
                {
                    name: '水表',
                    type: 'gauge',
                    center : ['77%', '50%'],    // 默认全局居中
                    radius : '25%',
                    min: 0,
                    max: 2,
                    startAngle: 315,
                    endAngle: 225,
                    splitNumber: 2,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 8
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        show: false
                    },
                    axisLabel: {
                        formatter:function(v){
                            switch (v + '') {
                                case '0' : return 'H';
                                case '1' : return 'Water';
                                case '2' : return 'C';
                            }
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    pointer: {
                        width:2
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        show: false
                    },
                    data:[{value: 0.5, name: 'gas'}]
                }
            ]
        };

        setInterval(function (){
            option3.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
            option3.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;
            option3.series[2].data[0].value = (Math.random()*2).toFixed(2) - 0;
            option3.series[3].data[0].value = (Math.random()*2).toFixed(2) - 0;
            echarts3.setOption(option3,true);
        },2000);
    }
}
</script>
<style scoped>
.index_body {
  background: url(../assets/images/index_body_bg.jpg);
  padding-top: 65px;
  color: #fff;
}

.quick_links {
  overflow: hidden;
}

.quicklinks_one {
  width: 12%;
  height: 202px;
  background: url(../assets/images/white_opacity_bg.png);
  position: relative;
  text-align: center;
  cursor: pointer;
  float: left;
  margin-left: 4%;
  margin-bottom: 54px;
}

.quicklinks_one h1 {
  font-size: 24px;
  font-family: "方正大标宋", "宋体";
  padding-top: 38px;
}

.quicklinks_one h2 {
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 12px;
  font-weight: normal;
}

.quicklinks_one p {
  font-size: 12px;
  padding: 5px 22px 0;
  display: none;
  line-height: 21px;
}

.quicklinks_one .icon_wrap {
  position: absolute;
  top: 130px;
  left: 0;
  width: 100%;
}

.quicklinks_one i {
  font-size: 40px;
}

.quicklinks_one i {
  border: none;
  height: 20px;
}

.quicklinks_one .icon-plus {
  border: 4px solid #fff;
  border-radius: 2px;
}

.quicklinks_one .icon::before {
  position: absolute;
  left: -25px;
  top: -10px;
}

.quicklinks_one .icon-plus:before {
  width: 20px;
  border: 4px solid #fff;
  border-radius: 2px;
  left: -13px;
  top: 5px;
}

.quicklinks_one:hover {
  background-color: #27a9e3;
  transition: all 0.5s ease 0s;
}

.quicklinks_one:hover .icon_wrap {
  top: 22px;
  transition: all 0.5s ease 0s;
}

.quicklinks_one:hover h1 {
  padding-top: 78px;
  transition: all 0.5s ease 0s;
}

.quicklinks_one:hover h2 {
  display: none;
  transition: all 0.5s ease 0s;
}

.quicklinks_one:hover p {
  display: block;
  transition: all 0.5s ease 0s;
}

.quicklinks_one.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
/*图表*/

.charts_wrap {
  margin-left: 4%;
  margin-right: 4%;
  background: url(../assets/images/white_opacity_bg.png);
  padding-top: 50px;
  overflow: hidden;
}

.charts_wrap > div {
  float: left;
  margin-left: 4%;
  overflow: hidden;
  margin-bottom: 50px;
}
</style>