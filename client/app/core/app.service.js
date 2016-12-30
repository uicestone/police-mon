(function() {
    'use strict';

    var module = angular.module('app')
        .service('suspectService', [suspectService]);
    
    function suspectService() {

        var suspects = [
            {
                station: '田园',
                number:"01",
                name: "陈勇",
                status: "醒酒中",
                source: '刑事传唤',
                entered_at: "2016-12-25 21:47:00"
            },
            {
                station: '田园',
                number:"02",
                name: "关南",
                status: "候问看管",
                source: '刑事传唤',
                entered_at: "2016-12-25 21:50:00"
            },
            {
                station: '田园',
                number:"03",
                name: "张壮志",
                status: "讯（询）问中",
                source: '刑事传唤',
                entered_at: "2016-12-25 21:49:00"
            },
            {
                station: '田园',
                number:"04",
                name: "杨宇",
                status: "入所登记中",
                source: '刑事传唤',
                entered_at: "2016-12-25 21:48:00"
            },
            {
                station: '莘松',
                name: '曾元洲',
                source: '行政传唤',
                status: '等候讯（询）问'
            },
            {
                station: '高校',
                name: '苏情文',
                source: '群众扭送',
                status: '等候讯（询）问'
            },
            {
                station: '高校交大',
                name: '万向南',
                source: '自首',
                status: '等候讯（询）问'
            },
            {
                station: '开发区',
                name: '刀若灵',
                source: '行政传唤',
                status: '离所（行政拘留）'
            },
            {
                station: '梅陇',
                name: '江弘文',
                source: '刑事传唤',
                status: '离所（刑事拘留）'
            },
            {
                station: '古美',
                name: '宋永言',
                source: '行政传唤',
                status: '刑事传唤'
            },
            {
                station: '车站',
                name: '张世超',
                source: '刑事传唤',
                status: '等候讯（询）问'
            },
            {
                station: '新虹',
                name: '毛虹雨',
                source: '刑事传唤',
                status: '离所（刑事拘留）'
            },
            {
                station: '新镇',
                name: '徐行舟',
                source: '行政传唤',
                status: '候问看管'
            },
            {
                station: '航华',
                name: '聊宇航',
                source: '刑事传唤',
                status: '等候讯（询）问'
            },
            {
                station: '鲁汇',
                name: '欧高逸',
                source: '刑事传唤',
                status: '等候讯（询）问'
            },
            {
                station: '杜行',
                name: '孙咏志',
                source: '行政传唤',
                status: '离所（强制戒毒）'
            },
            {
                station: '水上',
                name: '劳昊宇',
                source: '行政传唤',
                status: '候问看管'
            },
            {
                station: '吴泾',
                name: '包飞龙',
                source: '刑事传唤',
                status: '临时离所（起赃）'
            },
            {
                station: '莘光',
                name: '乔阳焱',
                source: '行政传唤',
                status: '等候讯（询）问'
            },
            {
                station: '华坪路',
                name: '僧旭尧',
                source: '刑事传唤',
                status: '候问看管'
            },
            {
                station: '龙柏新村',
                name: '实以晴',
                source: '刑事传唤',
                status: '结案未离所'
            },
            {
                station: '虹桥机场西',
                name: '原英锐',
                source: '行政传唤',
                status: '候问看管'
            }
        ];

        this.query = function() {
            return suspects;
        }

        this.get = function(id) {
            return suspects.filter(suspect => suspect.id === id)[0];
        }
    }

})();
