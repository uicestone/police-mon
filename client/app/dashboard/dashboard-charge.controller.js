(function () {
    'use strict';

    angular.module('app')
        .controller('DashboardChargeCtrl', ['$scope', DashboardChargeCtrl])

    function DashboardChargeCtrl($scope) {

        var departments = ['儿科急诊','普外科急诊','急诊内科','针灸科门诊','老年科门诊','消化科门诊','产科门诊','普外科门诊','儿科门诊','风湿病科门诊','耳鼻咽喉科门诊','胸外科急诊','妇科门诊','普内科门诊','神经内科门诊','血液科门诊','骨科急诊','心内科门诊','骨科门诊','肾内科门诊','神经内科急诊','泌尿科门诊','皮肤科门诊','眼科门诊','口腔科门诊','呼吸科门诊','疼痛科门诊','泌尿科急诊','胸外科门诊','内分泌科门诊','中医科门诊','神外科急诊','门诊计划生育','妇科急诊','神外科门诊','健康管理中心','肾内科血透中心','生殖医学科门诊','心血管外科门诊','血管外科急诊','血管外科门诊','营养科门诊','超声医学科门诊','内窥镜门诊','麻醉科门诊','肿瘤微创介入科门诊','高压氧舱','放射诊疗科门诊','膏方门诊','耳鼻咽喉科急诊','放射科门诊','发热门诊','眼科急诊'];
        var months = ['2016/01','2016/02','2016/03','2016/04','2016/05','2016/06','2016/07','2016/08','2016/09'];

        var dataGrowthYearByDepartments = [
            
        ];

        $scope.growthMenzhen = {};
        $scope.growthMenzhen.options = {
            title: {
                text: '全院门诊收入同环比'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['同比','环比']
            },
            dataZoom: [
                  {
                        type: 'slider',
                        show: true,
                        realtime: true,
                  }
            ],          
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : months
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
                    areaStyle: {normal: {}},
                    markPoint: {
                        data: [
                            {name: '最低', type: 'min'},
                            {name: '最高', type: 'max'}
                        ],
                        label: {
                            normal: {
                                formatter: '{b}'
                            }
                        }
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ],
                        label: {
                            normal: {
                                formatter: '{b}'
                            }
                        }
                    }
                },
                {
                    name:'环比',
                    type:'line',
                    data:[-0.150014413,-0.169473176,0.419857399,-0.127953278,0.089776763,-0.016073465,0.031962336,0.077809237,-0.147393834],
                    areaStyle: {normal: {}},
                    markPoint: {
                        data: [
                            {name: '最低', type: 'min'},
                            {name: '最高', type: 'max'}
                        ],
                        label: {
                            normal: {
                                formatter: '{b}'
                            }
                        }
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ],
                        label: {
                            normal: {
                                formatter: '{b}'
                            }
                        }
                    }
                }
            ]
        };

        $scope.chargeMenzhen = {};
        $scope.chargeMenzhen.options = {
            title: {
                text: '全院门诊收入'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['门诊', '急诊']
            },
            dataZoom: [
                  {
                        type: 'slider',
                        show: true,
                        realtime: true,
                  }
            ],          
            xAxis : [
                {
                    type : 'category',
                    data : months
                }
            ],
            yAxis : [
                {
                    type : 'value'
                },
            ],
            series : [
                {
                    name:'门诊',
                    type:'bar',
                    data:[59929,50842,75018,64223,71043,69160,70554,77329,65562],
                    stack: '收入',
                    markPoint: {
                        data: [
                            {name: '最低', type: 'min'},
                            {name: '最高', type: 'max'}
                        ],
                        label: {
                            normal: {
                                formatter: '{b}'
                            }
                        }
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ],
                        label: {
                            normal: {
                                formatter: '{b}'
                            }
                        }
                    }
                }
            ]
        };

        $scope.growthYearByDepartmentsMenzhen = {};
        $scope.growthYearByDepartmentsMenzhen.options = {
            title: {
                text: '科室急门诊收入同比变化情况'
            },
            tooltip: {
                position: 'top',
                formatter: function(point) {
                    return point.seriesName + '<br>' + point.data[0] + ' ' + point.data[1] + ' ' + (point.data[2] * 100).toFixed(1) + '%'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '6%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: months,
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
                data: departments,
                splitArea: {
                    show: true
                }
            },
            visualMap: {
                type: 'continuous',
                min: -1,
                max: 1,
                calculable: false,
                orient: 'horizontal',
                left: 'right',
                top: '0',
                inRange: {color: ['#008800', '#FFFFFF', '#880000']}
            },
            series: [{
                name: '同比变化',
                type: 'heatmap',
                data: dataGrowthYearByDepartments,
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
                },
                label: null
            }]
        };

        $scope.chargeMenzhenByDepartment = {};
        $scope.chargeMenzhenByDepartment.options = {
            title: {
                text: '门诊收入科室分布'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                y: 'bottom',
                data:['儿科门诊','骨科门诊','普外科门诊','神经内科门诊','普内科门诊','泌尿科门诊','心内科门诊','中医科门诊','皮肤科门诊','产科门诊','耳鼻咽喉科门诊','眼科门诊','风湿病科门诊','儿科急诊','呼吸科门诊','内分泌科门诊','口腔科门诊','针灸科门诊','肾内科门诊','普外科急诊','门诊计划生育','其他']
            },
            series: [
                {
                    name:'科室',
                    type:'pie',
                    radius: ['25%', '78%'],
                    data:[
                        {value:55416, name:'其他'}
                    ]
                }
            ]
        };

        $scope.chargeMenzhenByChargeGroup = {};
        $scope.chargeMenzhenByChargeGroup.options = {
            title: {
                text: '门诊收入类型分布'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                y: 'bottom',
                data:[]
            },
            series: [
                {
                    name:'类型',
                    type:'pie',
                    radius: ['25%', '78%'],
                    data:[
                        {value:39136, name:'儿科门诊'}
                        
                    ]
                }
            ]
        };
    }
})(); 
