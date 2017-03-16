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
                    data:[0.245392854,0.384254358,0.372912917,0.303888474,0.35377276,0.254544088,0.123270955,0.188979985,0.055235742],
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
                    data:[-0.061994439,-0.154108935,0.309140217,-0.13731532,0.049637849,-0.015501174,0.013413747,0.102138185,-0.137658116],
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
                    data:[24479278.59,20706803.04,27108108.63,23385750.02,24546568.34,24166067.71,24490225.23,26991612.38,23275997.88],
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
                    radius: ['45%', '75%'],
                    data:[
                        {value:40327396.48, name:'急诊内科', selected:true},
                        {value:17976211.39, name:'老年科门诊'},
                        {value:16152093.25, name:'消化科门诊'},
                        {value:11445755.89, name:'肾内科血透中心'},
                        {value:8702108.07, name:'神经内科门诊'},
                        {value:8062291.34, name:'中医科门诊'},
                        {value:8018783.31, name:'骨科门诊'},
                        {value:7165638.75, name:'心内科门诊'},
                        {value:7070104.75, name:'风湿病科门诊'},
                        {value:6824735.67, name:'儿科门诊'},
                        {value:6646524.45, name:'普外科门诊'},
                        {value:6626027.77, name:'急内留观'},
                        {value:5761010.28, name:'产科门诊'},
                        {value:5664804.89, name:'妇科门诊'},
                        {value:5107273.90, name:'神经内科急诊'},
                        {value:4791818.02, name:'泌尿科门诊'},
                        {value:4355846.14, name:'呼吸科门诊'},
                        {value:4336042.04, name:'针灸科门诊'},
                        {value:4024809.14, name:'普内科门诊'},
                        {value:3896582.87, name:'门诊计划生育'},
                        {value:3827979.51, name:'内分泌科门诊'},
                        {value:3096387.96, name:'普外科急诊'},
                        {value:3088909.82, name:'皮肤科门诊'},
                        {value:3033441.51, name:'儿科急诊'},
                        {value:3002970.22, name:'肾内科门诊'},
                        {value:2946050.30, name:'眼科门诊'},
                        {value:17198714.10, name:'其他'}
                    ]
                }
            ]
        };

        $scope.chargeMenzhenByChargeGroup = {};
        $scope.chargeMenzhenByChargeGroup.options = {
            title: {
                text: '门急诊收入类型分布'
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
                    radius: ['45%', '75%'],
                    data:[
                        {value:95303071.13, name:'西药费', selected:true},
                        {value:29068303.00, name:'化验费'},
                        {value:16294243.23, name:'中成药费'},
                        {value:13835123.00, name:'检查费'},
                        {value:13448016.50, name:'治疗费'},
                        {value:11779680.00, name:'CT费'},
                        {value:11503500.00, name:'三级医院诊疗费'},
                        {value:5329431.91, name:'中草药费'},
                        {value:4440720.05, name:'医用材料费'},
                        {value:3451050.00, name:'三级医院挂号费'},
                        {value:3399960.00, name:'核磁共振'},
                        {value:2441100.00, name:'摄片费'},
                        {value:1801474.00, name:'手术费'},
                        {value:7054639.00, name:'其他'}                   
                    ]
                }
            ]
        };
    }
})(); 
