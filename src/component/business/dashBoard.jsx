import React from 'react';
import echarts from 'echarts';
// 引入柱状图
// import  'echarts/lib/chart/bar';
// // 引入提示框和标题组件
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';

class DashBoard extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });

        var data = [
            [5000, 10000, 6785.71],
            [4000, 10000, 6825],
            [3000, 6500, 4463.33],
            [2500, 5600, 3793.83],
            [2000, 4000, 3060],
            [2000, 4000, 3222.33],
            [2500, 4000, 3133.33],
            [1800, 4000, 3100],
            [2000, 3500, 2750],
            [2000, 3000, 2500],
            [1800, 3000, 2433.33],
            [2000, 2700, 2375],
            [1500, 2800, 2150],
            [1500, 2300, 2100],
            [1600, 3500, 2057.14],
            [1500, 2600, 2037.5],
            [1500, 2417.54, 1905.85],
            [1500, 2000, 1775],
            [1500, 1800, 1650]
        ];
        var cities = ['北京', '上海', '深圳', '广州', '苏州', '杭州', '南京', '福州', '青岛', '济南', '长春', '大连', '温州', '郑州', '武汉', '成都', '东莞', '沈阳', '烟台'];
        var barHeight = 50;
        var myChart2 = echarts.init(document.getElementById('main2'));
        myChart2.setOption({
            title: {
                text: '在中国租个房子有多贵？',
                subtext: '市中心一室月租费（数据来源：https://www.numbeo.com）'
            },
            legend: {
                show: true,
                data: ['价格范围', '均值']
            },
            grid: {
                top: 100
            },
            angleAxis: {
                type: 'category',
                data: cities
            },
            tooltip: {
                show: true,
                formatter: function (params) {
                    var id = params.dataIndex;
                    return cities[id] + '<br>最低：' + data[id][0] + '<br>最高：' + data[id][1] + '<br>平均：' + data[id][2];
                }
            },
            radiusAxis: {
            },
            polar: {
            },
            series: [{
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                data: data.map(function (d) {
                    return d[0];
                }),
                coordinateSystem: 'polar',
                stack: '最大最小值',
                silent: true
            }, {
                type: 'bar',
                data: data.map(function (d) {
                    return d[1] - d[0];
                }),
                coordinateSystem: 'polar',
                name: '价格范围',
                stack: '最大最小值'
            }, {
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                data: data.map(function (d) {
                    return d[2] - barHeight;
                }),
                coordinateSystem: 'polar',
                stack: '均值',
                silent: true,
                z: 10
            }, {
                type: 'bar',
                data: data.map(function (d) {
                    return barHeight * 2
                }),
                coordinateSystem: 'polar',
                name: '均值',
                stack: '均值',
                barGap: '-100%',
                z: 10
            }],
            legend: {
                show: true,
                data: ['A', 'B', 'C']
            }
        })

    }

    render(){
        return (
            <div>
            <div id="main" style={{ width: 400, height: 400 }}></div>
            <div id="main2" style={{ width: 400, height: 500 }}></div>
            </div>
        )
    }
}

export default DashBoard