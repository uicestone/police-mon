(function () {
    'use strict';

    angular.module('app')
        .controller('DashboardCtrl', ['$scope', DashboardCtrl])

    function DashboardCtrl($scope) {

        var stations = ['曹行','陈行','杜行','虹桥','华漕','纪王','金都','鲁汇','马桥','梅陇','七宝','塘湾','吴泾','新虹','新镇','莘光','莘松','莘庄','颛桥','碧江路','古美路','华坪路','航华新村','龙柏新村','田园新村'];
        var days = ['1/18', '1/17', '1/16', '1/15', '1/14', '1/13', '1/12'];

        var data = [['曹行','1/18',5],['陈行','1/18',1],['塘湾','1/18',2],['吴泾','1/18',4],['新虹','1/18',1],['新镇','1/18',1],['莘光','1/18',3],['莘松','1/18',4],['莘庄','1/18',6],['颛桥','1/18',4],['碧江路','1/18',4],['古美路','1/18',3],['华坪路','1/18',3],['航华新村','1/18',2],['龙柏新村','1/18',5],['田园新村','1/18',2],['曹行','1/17',7],['七宝','1/17',5],['塘湾','1/17',2],['吴泾','1/17',2],['新虹','1/17',6],['新镇','1/17',9],['莘光','1/17',11],['莘松','1/17',6],['莘庄','1/17',7],['颛桥','1/17',8],['碧江路','1/17',12],['古美路','1/17',5],['华坪路','1/17',5],['航华新村','1/17',7],['龙柏新村','1/17',2],['田园新村','1/18',2],['曹行','1/16',1],['陈行','1/16',1],['七宝','1/16',3],['塘湾','1/16',2],['吴泾','1/16',1],['新虹','1/16',9],['新镇','1/16',8],['莘光','1/16',10],['莘松','1/16',6],['莘庄','1/16',5],['颛桥','1/16',5],['碧江路','1/16',5],['古美路','1/16',7],['华坪路','1/16',4],['航华新村','1/16',2],['龙柏新村','1/16',4],['田园新村','1/18',2],['曹行','1/15',7],['陈行','1/15',3],['马桥','1/15',1],['七宝','1/15',5],['塘湾','1/15',4],['吴泾','1/15',7],['新虹','1/15',14],['新镇','1/15',13],['莘光','1/15',12],['莘松','1/15',9],['莘庄','1/15',5],['颛桥','1/15',5],['碧江路','1/15',10],['古美路','1/15',6],['华坪路','1/15',4],['航华新村','1/15',4],['龙柏新村','1/15',1],['田园新村','1/18',2],['曹行','1/14',1],['陈行','1/14',3],['纪王','1/14',1],['梅陇','1/14',2],['七宝','1/14',4],['塘湾','1/14',4],['吴泾','1/14',2],['新虹','1/14',4],['新镇','1/14',4],['莘光','1/14',14],['莘松','1/14',12],['莘庄','1/14',1],['颛桥','1/14',8],['碧江路','1/14',5],['古美路','1/14',3],['华坪路','1/14',7],['航华新村','1/14',3],['田园新村','1/18',2],['曹行','1/13',2],['陈行','1/13',1],['虹桥','1/13',3],['马桥','1/13',2],['七宝','1/13',4],['塘湾','1/13',1],['吴泾','1/13',5],['新虹','1/13',10],['新镇','1/13',5],['莘光','1/13',7],['莘松','1/13',11],['莘庄','1/13',6],['碧江路','1/13',5],['古美路','1/13',3],['华坪路','1/13',4],['航华新村','1/13',2],['田园新村','1/18',2],['曹行','1/12',1],['七宝','1/12',1],['吴泾','1/12',2],['新虹','1/12',1],['新镇','1/12',3],['莘光','1/12',4],['古美路','1/12',1],['华坪路','1/12',2],['航华新村','1/12',2],['龙柏新村','1/12',6],['田园新村','1/18',2]];

        $scope.stationHeatmap = {};
        $scope.stationHeatmap.options = {
            title: {
                text: '近7天各派出所嫌疑对象数'
            },
            tooltip: {
                position: 'top'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '6%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: stations,
                axisLabel: {
                    interval: 0,
                    rotate: 35
                },
                splitArea: {
                    show: true
                }
            },
            yAxis: {
                type: 'category',
                data: days,
                splitArea: {
                    show: true
                }
            },
            visualMap: {
                type: 'continuous',
                min: 0,
                max: Math.max(...data.map(value => value[2])),
                calculable: false,
                orient: 'horizontal',
                left: 'right',
                top: '0',
                inRange: {color: ['#F3E5F5', '#9C27B0', '#4A148C']}
            },
            series: [{
                name: '对象数量',
                type: 'heatmap',
                data: data,
                label: {
                    normal: {
                        show: true
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };

        $scope.countTotal = {};
        $scope.countTotal.options = {
            title: {
                text: '全员门急诊总量同环比分析'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['同比','环比']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['2016/01','2016/02','2016/03','2016/04','2016/05','2016/06','2016/07','2016/08','2016/09']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        formatter: function(value) {
                            return (value * 100).toFixed(1) + '%'
                        }
                    }
                },
            ],
            series : [
                {
                    name:'同比',
                    type:'line',
                    data:[0.143686134,0.311108823,0.344196973,0.218641317,0.288048693,0.221174125,0.094098023,0.181481202,0.031431328],
                    markPoint: {
                        data: [
                            {name: '最低', type: 'min'},
                            {name: '最高', type: 'max'}
                        ],
                        label: {
                            normal: {
                                formatter: function(point) {
                                    return (point.value * 100).toFixed(0) + '%'
                                }
                            }
                        }
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'环比',
                    type:'line',
                    data:[-0.150014413,-0.169473176,0.419857399,-0.127953278,0.089776763,-0.016073465,0.031962336,0.077809237,-0.147393834],
                    markPoint: {
                        data: [
                            {name: '最低', type: 'min'},
                            {name: '最高', type: 'max'}
                        ],
                        label: {
                            normal: {
                                formatter: function(point) {
                                    return (point.value * 100).toFixed(0) + '%'
                                }
                            }
                        }
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                }
            ]
        };

        $scope.countMenzhen = {};
        $scope.countMenzhen.options = {
            title: {
                text: '全员门急诊总量同环比分析'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['同比','环比']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['2016/01','2016/02','2016/03','2016/04','2016/05','2016/06','2016/07','2016/08','2016/09']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        formatter: function(value) {
                            return (value * 100).toFixed(1) + '%'
                        }
                    }
                },
            ],
            series : [
                {
                    name:'同比',
                    type:'line',
                    data:[0.143686134,0.311108823,0.344196973,0.218641317,0.288048693,0.221174125,0.094098023,0.181481202,0.031431328],
                    markPoint: {
                        data: [
                            {name: '最低', type: 'min'},
                            {name: '最高', type: 'max'}
                        ],
                        label: {
                            normal: {
                                formatter: function(point) {
                                    return (point.value * 100).toFixed(0) + '%'
                                }
                            }
                        }
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'环比',
                    type:'line',
                    data:[-0.150014413,-0.169473176,0.419857399,-0.127953278,0.089776763,-0.016073465,0.031962336,0.077809237,-0.147393834],
                    markPoint: {
                        data: [
                            {name: '最低', type: 'min'},
                            {name: '最高', type: 'max'}
                        ],
                        label: {
                            normal: {
                                formatter: function(point) {
                                    return (point.value * 100).toFixed(0) + '%'
                                }
                            }
                        }
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                }
            ]
        };

        $scope.enterSources = {};
        $scope.enterSources.options = {
            title: {
                text: '嫌疑对象来源'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                y: 'bottom',
                data:['刑事','行政', '传唤','拘传','扭送','自首']
            },
            series: [
                {
                    name:'案件性质',
                    type:'pie',
                    selectedMode: 'multiple',
                    radius: [0, '40%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'刑事', selected:true},
                        {value:679, name:'行政'}
                    ]
                },
                {
                    name:'来源类型',
                    type:'pie',
                    radius: ['55%', '78%'],

                    data:[
                        {value:335, name:'传唤'},
                        {value:310, name:'拘传'},
                        {value:234, name:'扭送'},
                        {value:135, name:'自首'}
                    ]
                }
            ]
        };

        $scope.exitType = {};
        $scope.exitType.options = {
            title: {
                text: '嫌疑对象去向'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                y: 'bottom',
                data:['释放','戒毒','拘留']
            },
            series: [
                {
                    name:'去向',
                    type:'pie',
                    selectedMode: 'multiple',
                    data:[
                        {value:335, name:'戒毒', selected:true},
                        {value:310, name:'释放', selected:true},
                        {value:234, name:'拘留', selected:true}
                    ]
                }
            ]
        };

        $scope.closeType = {};
        $scope.closeType.options = {
            title: {
                text: '案件办结类型'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                y: 'bottom',
                data:['刑事','行政','涉黄','涉赌','涉毒','其他']
            },
            series: [
                {
                    name:'案件性质',
                    type:'pie',
                    selectedMode: 'multiple',
                    radius: [0, '40%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'刑事', selected:true},
                        {value:679, name:'行政'}
                    ]
                },
                {
                    name:'来源类型',
                    type:'pie',
                    radius: ['55%', '78%'],

                    data:[
                        {value:335, name:'涉黄'},
                        {value:310, name:'涉赌'},
                        {value:234, name:'涉毒'},
                        {value:135, name:'其他'}
                    ]
                }
            ]
        };

        $scope.punishRate = {};
        $scope.punishRate.options = {
            title: {
                text: '来源处罚比例'
            },
            legend: {
                orient: 'horizontal',
                x: 'right',
                y: 'top',
                data:['行政拘留','刑事拘留','取保候审']
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['传唤','拘传','扭送','自首']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    max: 'dataMax',
                    axisLabel: {
                        formatter: function(value) {
                            return Math.round(value * 100) + '%'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'行政拘留',
                    type:'bar',
                    stack: '处罚',
                    data:[0.01, 0.07, 0.4, 0.02]
                },
                {
                    name:'刑事拘留',
                    type:'bar',
                    stack: '处罚',
                    data:[0.005, 0.03, 0.55, 0.9]
                },
                {
                    name:'取保候审',
                    type:'bar',
                    stack: '处罚',
                    data:[0.001, 0.008, 0.03, 0.08]
                }
            ]
        };
    }
})(); 
