(function() {
    'use strict';

    var module = angular.module('app')
        .service('suspectService', [suspectService])
        .service('beaconService', [beaconService]);
    
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

    function beaconService() {
        var ws = new WebSocket('ws://192.168.4.1:8080');
        var reader = new FileReader();
        
        this.onData = function(dataCallback) {
            this.dataCallback = dataCallback;
        };

        this.onRssiUpdate = function(rssiCallback) {
            this.rssiCallback = rssiCallback;
        };

        ws.onmessage = event => {

            if ((event.data.size == 0) || (typeof event.data != "object")) {
                return;
            }

            reader.readAsBinaryString(event.data);
        }

        reader.addEventListener("loadend", () => {
            
            var data = reader.result.split(/\r\n/)
                .filter(line => line.length > 0)
                .map(line => Array.from(line).map(byte => byte.charCodeAt(0)))
                .map(line => {
                    var data = line.slice(10, line.length);
                    return {
                        length: line[1],
                        type: line[2],
                        mac: line.slice(3, 8).map(byte => byte.toString(16)).join(':'),
                        rssi: line[9] - 255,
                        ver: data[17],
                        uuid: [data[5], data[6]],
                        temperature: data[18],
                        x: data[20],
                        y: data[21],
                        z: data[22],
                        currentMotionDuration: data[23],
                        lastMotionDuration: data[24],
                        battery: data[25],
                        measuredPower: data[26],
                        data: data,
                        dataString: data.join(' ')
                    }
                });

            if(this.dataCallback) {
                this.dataCallback(data);
            }

            // let data = Array.from(reader.result).map(byte => {
            //  return byte.match(/[\r\n]/) ? byte : byte.charCodeAt(0).toString(16);
            // })
            // .join('')
            // .split(/[\r\n]+/).filter(line => line.length > 0);

            data.filter(line => {
                return line.mac === '12:3b:6a:1a:83'
                // && line.type === 0
                && line.data.length === 27
            }).forEach(line => {
                if(this.rssiCallback) {
                    this.rssiCallback(line.rssi);
                }
                // console.log(line.rssi);
                // context.fillRect(x, -line.rssi, 1, 1);
                // console.log(line.uuid);
                return line;
            });
        });
    }

})();
