import React from 'react';
import { connect } from 'react-redux';
import './right.less';
let data = [
  {"id": 1,
    "pic": "https://yanxuan.nosdn.127.net/9f6527e200948c4e1f29963531520006.jpg?imageView&thumbnail=0x196",
    "list": [{
      "id": 2,
      "pic": "https://yanxuan.nosdn.127.net/63d0143fbab9805fff7487b89529b6b5.png?imageView&quality=85&thumbnail=144x144",
      "title": "精选好物15元起"
    },
    {
      "id": 3,
      "pic": "https://yanxuan.nosdn.127.net/42b69535d9b5a90ffe6888982ef1a715.png?imageView&quality=85&thumbnail=144x144",
      "title": "超值好物9.9元起"
    },
    {
      "id": 4,
      "pic": "https://yanxuan.nosdn.127.net/21d086e4c082aeae802e3dc76deac74d.png?imageView&quality=85&thumbnail=144x144",
      "title": "999+好评"
    },
    {
      "id": 5,
      "pic": "https://yanxuan.nosdn.127.net/3af83a0ebe69609542289769ea31a156.png?imageView&quality=85&thumbnail=144x144",
      "title": "日用囤货低至5元"
    },
    {
      "id": 6,
      "pic": "https://yanxuan.nosdn.127.net/defb73f57e42a32e9aa6832856273cc9.png?imageView&quality=85&thumbnail=144x144",
      "title": "11.11特惠3折起"
    },
    {
      "id": 7,
      "pic": "https://yanxuan.nosdn.127.net/afd45edfc612698ce85c713a58f67c9f.png?imageView&quality=85&thumbnail=144x144",
      "title": "26h限时冰点价"
    },
    {
      "id": 8,
      "pic": "https://yanxuan.nosdn.127.net/940487ab4ebd6de850454c5605710d9f.png?imageView&quality=85&thumbnail=144x144",
      "title": "美食129选9再享8折"
    }, {
        "id":9,
        "pic":"https://yanxuan.nosdn.127.net/b0e4fffc4ae4ecba747b1141ed80cc5a.png?imageView&quality=85&thumbnail=144x144",
        "title":"美食129选9再享8折"
    },
    {
      "id": 10,
      "pic": "https://yanxuan.nosdn.127.net/f86d010727189a2b591f6bdfe297a0af.png?imageView&quality=85&thumbnail=144x144",
      "title": "新品粉丝价7.9元起"
    },
    {
      "id": 11,
      "pic": "https://yanxuan.nosdn.127.net/158bc59812eb2d8821c84a3b9ad6856a.png?imageView&quality=85&thumbnail=144x144",
      "title": "冬日养生必备"
    },
    {
      "id": 12,
      "pic": "https://yanxuan.nosdn.127.net/0e12cf2d5fed751cc1c032b4a56e5139.png?imageView&quality=85&thumbnail=144x144",
      "title": "冬季取暖神器"
    },
    {
      "id": 13,
      "pic": "https://yanxuan.nosdn.127.net/5fef565e9220d479ce064f757ab6eb7d.png?imageView&quality=85&thumbnail=144x144",
      "title": "8折券叠加满减低至3折"
    }]
  },
  , {
    "id": 14,
    "pic": "https://yanxuan.nosdn.127.net/ed8077b5c1930c001d33db2dca28a2a0.jpg?imageView&thumbnail=0x196",
    "list":[ {
      "id": 15,
      "pic": "https://yanxuan.nosdn.127.net/231f1733268092f9316c0c0f30ced62e.png?imageView&quality=85&thumbnail=144x144",
      "title": "温暖舒适床品"
    }, {
      "id": 16,
      "pic": "https://yanxuan.nosdn.127.net/fa19961437b7d6b01a2aad49c298037f.png?imageView&quality=85&thumbnail=144x144",
      "title": "冬日养生进补"
    }, {
      "id": 17,
      "pic": "https://yanxuan.nosdn.127.net/b049ba42c4a7413eef72f3be8b6f85da.png?imageView&quality=85&thumbnail=144x144",
      "title": "精选美味小食"
    }, {
      "id": 18,
      "pic": "https://yanxuan.nosdn.127.net/e7384a52091eae3d49990ca6126e0353.png?imageView&quality=85&thumbnail=144x144",
      "title": "精选美味小食"
    }, {
      "id": 19,
      "pic": "https://yanxuan.nosdn.127.net/69babae401e3c0ddc4a1bfb116617e8e.png?imageView&quality=85&thumbnail=144x144",
      "title": "精选美味小食"
    }, {
      "id": 20,
      "pic": "https://yanxuan.nosdn.127.net/9de35115bdd12ea9114162c7993015db.png?imageView&quality=85&thumbnail=144x144",
      "title": "精选美味小食"
    }, {
      "id": 21,
      "pic": "https://yanxuan.nosdn.127.net/c6042f1b381fcdacd0276fe5bd7af535.png?imageView&quality=85&thumbnail=144x144",
      "title": "精选美味小食"
    }, {
      "id": 22,
      "pic": "https://yanxuan.nosdn.127.net/1ee90668cf2fe0c58351ffd0f09aaff3.png?imageView&quality=85&thumbnail=144x144",
      "title": "精选美味小食"
    }]
  },{
    "id": 23,
    "pic": "https://yanxuan.nosdn.127.net/edc311882c97da117f860264548212e1.png?imageView&thumbnail=0x196",
    "list":[{
      "id": 24,
      "pic": "https://yanxuan.nosdn.127.net/4a7eaff4e3cb3b7e90a7e88ffc897f04.png?imageView&quality=85&thumbnail=144x144",
      "title": "居家生活"
  
    }, {
      "id": 25,
      "pic": "https://yanxuan.nosdn.127.net/5aa5f7d5f2d137c1bf635eba8477aca1.png?imageView&quality=85&thumbnail=144x144",
      "title": "服饰鞋包"
    }, {
      "id": 26,
      "pic": "https://yanxuan.nosdn.127.net/31e4234a9c64af28f5cee04b1425d758.png?imageView&quality=85&thumbnail=144x144",
      "title": "美食酒水"
    }, {
      "id": 27,
      "pic": "https://yanxuan.nosdn.127.net/31361f7e78182fe2a38c10148012a601.png?imageView&quality=85&thumbnail=144x144",
      "title": "个护清洁"
    }, {
      "id": 28,
      "pic": "https://yanxuan.nosdn.127.net/5cbd1ced1c0c8148251601e68685bcd4.png?imageView&quality=85&thumbnail=144x144",
      "title": "运动旅行"
    }, {
      "id": 29,
      "pic": "https://yanxuan.nosdn.127.net/6a9ee4e42c8675717a2aae6ebf7dcff5.png?imageView&quality=85&thumbnail=144x144",
      "title": "母婴亲子"
    }, {
      "id": 30,
      "pic": "https://yanxuan.nosdn.127.net/dce70bfc0cc50d65def7deb2b4d4a27e.png?imageView&quality=85&thumbnail=144x144",
      "title": "数码家电"
    }, {
      "id": 31,
      "pic": "https://yanxuan.nosdn.127.net/d5690ebca5f6305b5ed5ee5a3ec7cd5d.png?imageView&quality=85&thumbnail=144x144",
      "title": "海外精选"
    }, {
      "id": 32,
      "pic": "https://yanxuan.nosdn.127.net/331332104225a04d91c1672224a9ab23.png?imageView&quality=85&thumbnail=144x144",
      "title": "周边特色"
    }]
  }, {
    "id": 33,
    "pic": "https://yanxuan.nosdn.127.net/dec6ff5ae8bae410809598950ba1f5b4.jpg?imageView&thumbnail=0x196",
    "list":[ {
      "id": 34,
      "pic": "https://yanxuan-item.nosdn.127.net/1494142790ff9cd2e3b297efd711841f.png?imageView&quality=85&thumbnail=144x144",
      "title": "居家生活新品"
    },
    {
      "id": 35,
      "pic": "https://yanxuan-item.nosdn.127.net/07f908583e3ed746575598c9efbce177.png?imageView&quality=85&thumbnail=144x144",
      "title": "服饰鞋包新品"
    },
    {
      "id": 36,
      "pic": "https://yanxuan-item.nosdn.127.net/434c9af286dd995e41f862cdd45e0080.png?imageView&quality=85&thumbnail=144x144",
      "title": "美食酒水新品"
    }, {
      "id": 37,
      "pic": "https://yanxuan-item.nosdn.127.net/16ba6260bc2b9d29b7093399fb280e06.png?imageView&quality=85&thumbnail=144x144",
      "title": "个护清洁新品"
    }, {
      "id": 38,
      "pic": "https://yanxuan-item.nosdn.127.net/70919d5f5643040a2b8ed95bb0fcdc1c.png?imageView&quality=85&thumbnail=144x144",
      "title": "运动旅行新品"
    }, {
      "id": 39,
      "pic": "https://yanxuan-item.nosdn.127.net/b16fef9608c1f415b7b6423ccb6282f0.png?imageView&quality=85&thumbnail=144x144",
      "title": "母婴亲子新品"
    }, {
      "id": 40,
      "pic": "https://yanxuan-item.nosdn.127.net/60425d3b71675b588ceb05924fc10d71.png?imageView&quality=85&thumbnail=144x144",
      "title": "数码家电新品"
    }, {
      "id": 41,
      "pic": "https://yanxuan-item.nosdn.127.net/0c8c477279a5e69f105ff19f82940b28.png?imageView&quality=85&thumbnail=144x144",
      "title": "全球特色新品"
    }]
  },
  {
    "id": 42,
    "pic": "https://yanxuan.nosdn.127.net/dd27620d667c0aafdd5f78d1c9b4b501.jpg?imageView&quality=75&thumbnail=0x196",
    "list":[ {
      "id": 43,
      "pic": "https://yanxuan.nosdn.127.net/749f0ba087d2035b6d2937b4919952de.png?imageView&quality=85&thumbnail=144x144",
      "title": "秋冬好物"
    }, {
      "id": 44,
      "pic": "https://yanxuan.nosdn.127.net/0fe3073506c10f604c4ed7e0ba65d1f4.png?imageView&quality=85&thumbnail=144x144",
      "title": "主题床品"
    }, {
      "id": 45,
      "pic": "https://yanxuan-item.nosdn.127.net/4ccd6ee87a83918474e7e962b06d96fd.png?imageView&quality=85&thumbnail=144x144",
      "title": "餐厨爆款清单"
    }, {
      "id": 46,
      "pic": "https://yanxuan.nosdn.127.net/ed6400e5be573e1524cdef0b5c9e462d.png?imageView&quality=85&thumbnail=144x144",
      "title": "床品件套"
    }, {
      "id": 47,
      "pic": "https://yanxuan.nosdn.127.net/96d109867f08a14af62d2390b7787439.png?imageView&quality=85&thumbnail=144x144",
      "title": "被枕盖毯"
    }, {
      "id": 48,
      "pic": "https://yanxuan.nosdn.127.net/b91e14afc5a138df8dbc3236146d24e6.png?imageView&quality=85&thumbnail=144x144",
      "title": "床垫床褥"
    }]

  }, {
    "id": 49,
    "pic": "https://yanxuan.nosdn.127.net/9fafb4adb40303dc2914c3aa04da03df.jpg?imageView&thumbnail=0x196",
    "list":[{
      "id": 50,
      "pic": "https://yanxuan.nosdn.127.net/e279c3e247614d47404d9d5d88b397c9.png?imageView&quality=85&thumbnail=144x144",
      "title": "热销爆款"
    }, {
      "id": 51,
      "pic": "https://yanxuan.nosdn.127.net/d0a099cb4bfdb9afccf9470719b3611c.png?imageView&quality=85&thumbnail=144x144",
      "title": "好物上新"
    }, {
      "id": 52,
      "pic": "https://yanxuan.nosdn.127.net/f2ab8dca74661d5b7d36f80b14e50a5a.png?imageView&quality=85&thumbnail=144x144",
      "title": "抄底特惠"
    }, {
      "id": 53,
      "pic": "https://yanxuan.nosdn.127.net/35b564c2867fc5faed9403cec440bafe.png?imageView&quality=85&thumbnail=144x144",
      "title": "男式外套"
    }, {
      "id": 54,
      "pic": "https://yanxuan.nosdn.127.net/2c5a1f681831987ff3d4fb8e63f6d0d6.jpg?imageView&quality=85&thumbnail=144x144",
      "title": "男式针织衫/卫衣"
    }, {
      "id": 55,
      "pic": "https://yanxuan.nosdn.127.net/10b0537e284e4eb89a9461e583d017db.png?imageView&quality=85&thumbnail=144x144",
      "title": "男式衬衫"
    }, {
      "id": 56,
      "pic": "https://yanxuan.nosdn.127.net/aba02a880a47a4a62cd85842ea6eadce.jpg?imageView&quality=85&thumbnail=144x144",
      "title": "男式裤装"
    }, {
      "id": 57,
      "pic": "https://yanxuan.nosdn.127.net/690dee73a00b6922664f727b40a58a3b.png?imageView&quality=85&thumbnail=144x144",
      "title": "男式牛仔"
    }, {
      "id": 58,
      "pic": "https://yanxuan.nosdn.127.net/f917b00b07445c46a1df90ccaff2a8de.png?imageView&quality=85&thumbnail=144x144",
      "title": "男式T恤/POLO"
    }]

  }, {

    "id": 59,
    "pic": "https://yanxuan.nosdn.127.net/a657e5214585b1825b7970c4b956e3c2.jpg?imageView&thumbnail=0x196",
    "list":[ {
      "id": 60,
      "pic": "https://yanxuan.nosdn.127.net/12672efc1f7ffe63b1fa33f95708a3a8.jpg?imageView&quality=85&thumbnail=144x144",
      "title": "双11特价TOP榜"
    }, {
      "id": 61,
      "pic": "https://yanxuan.nosdn.127.net/5c362bf2c24bf590f0eb2c1677a648ec.png?imageView&quality=85&thumbnail=144x144",
      "title": "新品首发"
    }, {
      "id": 62,
      "pic": "https://yanxuan.nosdn.127.net/b51b82b8b0047d3ff54aed5da313cb1e.png?imageView&quality=85&thumbnail=144x144",
      "title": "好味精选"
    }, {
      "id": 63,
      "pic": "https://yanxuan.nosdn.127.net/2e753a8f0977fd09a74ccea4f0c6192c.png?imageView&quality=85&thumbnail=144x144",
      "title": "饼干糕点"
    }, {
      "id": 64,
      "pic": "https://yanxuan.nosdn.127.net/6941ede8541ceeb432e8da16e200152b.png?imageView&quality=85&thumbnail=144x144",
      "title": "小食糖巧"
    }, {
      "id": 65,
      "pic": "https://yanxuan.nosdn.127.net/18dc905db6c49fbf55b2709078875cdb.png?imageView&quality=85&thumbnail=144x144",
      "title": "肉类零食"
    }, {
      "id": 66,
      "pic": "https://yanxuan.nosdn.127.net/46b5256193d052612ecb9fb22d7f4b88.png?imageView&quality=85&thumbnail=144x144",
      "title": "坚果炒货"
    }, {
      "id": 67,
      "pic": "https://yanxuan.nosdn.127.net/dfc7d79ca21ee0f55428c8be218da5d3.png?imageView&quality=85&thumbnail=144x144",
      "title": "蜜饯果干"
    }]
  },{
    "id": 68,
    "pic": "https://yanxuan.nosdn.127.net/0cf6e47037b7cc7688ec9845b543525f.jpg?imageView&thumbnail=0x196",
    "list":[{
      "id": 69,
      "pic": "https://yanxuan.nosdn.127.net/0af70c043ee2418c63eb74135084b215.png?imageView&quality=85&thumbnail=144x144",
      "title": "爆款榜单"
    }, {
      "id": 70,
      "pic": "https://yanxuan.nosdn.127.net/225c391499919578f94975cec9df4134.png?imageView&quality=85&thumbnail=144x144",
      "title": "新品尝鲜"
    }, {
      "id": 71,
      "pic": "https://yanxuan.nosdn.127.net/52bca59c658299046c4df435c3abee1c.png?imageView&quality=85&thumbnail=144x144",
      "title": "基础护肤"
    }, {
      "id": 72,
      "pic": "https://yanxuan.nosdn.127.net/e3211f79704b02298656ec8c99b6a70d.png?imageView&quality=85&thumbnail=144x144",
      "title": "卸妆洁面"
    }, {
      "id": 73,
      "pic": "https://yanxuan.nosdn.127.net/52068e062728c10f4d4da30fed9d3280.png?imageView&quality=85&thumbnail=144x144",
      "title": "护肤工具"
    }, {
      "id": 74,
      "pic": "https://yanxuan.nosdn.127.net/1ac9a9eee6be87a02faaea2e3abfec25.png?imageView&quality=85&thumbnail=144x144",
      "title": "洗发护发"
    }, {
      "id": 75,
      "pic": "https://yanxuan.nosdn.127.net/cf842f27c11f1587ca55d20035c1caba.png?imageView&quality=85&thumbnail=144x144",
      "title": "身体护理"
    }, {
      "id": 76,
      "pic": "https://yanxuan.nosdn.127.net/cef1d1b9f26a01037d705443e585d313.png?imageView&quality=85&thumbnail=144x144",
      "title": "口腔护理"
    }]
  },  {
    "id": 77,
    "pic": "https://yanxuan.nosdn.127.net/3dbb62e200611707a0f818833b823d9a.jpg?imageView&thumbnail=0x196",
    "list":[{
      "id": 78,
      "pic": "https://yanxuan.nosdn.127.net/97f65393f6a4a7b3d91cbe0cd19c617d.png?imageView&quality=85&thumbnail=144x144",
      "title": "11.11爆品清单"
    }, {
      "id": 79,
      "pic": "https://yanxuan.nosdn.127.net/ce21d420125e5593ffa216623955834c.png?imageView&quality=85&thumbnail=144x144",
      "title": "秋冬热卖"
    }, {
      "id": 80,
      "pic": "https://yanxuan.nosdn.127.net/c87f7108500ba28aea7037199fd52528.png?imageView&quality=85&thumbnail=144x144",
      "title": "今日特价"
    }, {
      "id": 81,
      "pic": "https://yanxuan.nosdn.127.net/b150824b900a05b0c0db4683b7600b34.png?imageView&quality=85&thumbnail=144x144",
      "title": "尾货秒杀"
    }, {
      "id": 82,
      "pic": "https://yanxuan.nosdn.127.net/60a70b35a24ad07449c763a6f2d16434.png?imageView&quality=85&thumbnail=144x144",
      "title": "上衣"
    }, {
      "id": 83,
      "pic": "http://yanxuan.nosdn.127.net/cfbe20d66ea16903d786d5a19976d5d0.png?imageView&quality=85&thumbnail=144x144",
      "title": "裙装"
    }, {
      "id": 84,
      "pic": "https://yanxuan.nosdn.127.net/8ae80697a24aefe4069f1066ebe142fc.png?imageView&quality=85&thumbnail=144x144",
      "title": "下装"
    }, {
      "id": 85,
      "pic": "https://yanxuan.nosdn.127.net/cfbe20d66ea16903d786d5a19976d5d0.png?imageView&quality=85&thumbnail=144x144",
      "title": "裙装"
    }]
  }, {

    "id": 86,
    "pic": "https://yanxuan.nosdn.127.net/7325584e6fcaf7a6af0fa469b605ac0e.jpg?imageView&thumbnail=0x196",
    "list":[ {
      "id": 87,
      "pic": "https://yanxuan.nosdn.127.net/ba81ce10c1e0fab23d010736d65ba0a7.jpg?imageView&quality=85&thumbnail=144x144",
      "title": "Yessing"
    }, {
      "id": 88,
      "pic": "https://yanxuan.nosdn.127.net/b1752ad79f8d9daa6b4b765d734f9bd6.jpg?imageView&quality=85&thumbnail=144x144",
      "title": "健身系列"
    }, {
      "id": 89,
      "pic": "https://yanxuan.nosdn.127.net/2e8953d954d410a2ae2c9321651b85f1.png?imageView&quality=85&thumbnail=144x144",
      "title": "出行好货"
    }, {
      "id": 90,
      "pic": "https://yanxuan.nosdn.127.net/c2871979efcc7ed2d40bc569c7fe70a2.png?imageView&quality=85&thumbnail=144x144",
      "title": "男式运动外套/卫衣"
    }, {
      "id": 91,
      "pic": "https://yanxuan.nosdn.127.net/23cbe4d7d1e3e23d4cc097a67f57b6f9.png?imageView&quality=85&thumbnail=144x144",
      "title": "男式运动裤装"
    }, {
      "id": 92,
      "pic": "https://yanxuan.nosdn.127.net/26f8b210ff0dba32cee3e2f374c47e9b.png?imageView&quality=85&thumbnail=144x144",
      "title": "男式户外服装"
    }, {
      "id": 93,
      "pic": "https://yanxuan.nosdn.127.net/0ccd33322fda8fc8ad7ccc61b1207afa.png?imageView&quality=85&thumbnail=144x144",
      "title": "男式运动T恤"
    }]
  }, {
    "id": 94,
    "pic": "https://yanxuan.nosdn.127.net/6ea5a277746a4e9849040bf2c619d6e9.jpg?imageView&thumbnail=0x196",
    "list":[ {
      "id": 95,
      "pic": "https://yanxuan.nosdn.127.net/1ca73b12b6338a54421add710d406364.png?imageView&quality=85&thumbnail=144x144",
      "title": "甄选爆款"
    }, {
      "id": 96,
      "pic": "https://yanxuan.nosdn.127.net/c9d30ae0dbc2c0537984e4f4b3ccec9f.png?imageView&quality=85&thumbnail=144x144",
      "title": "颜值好物"
    }, {
      "id": 97,
      "pic": "https://yanxuan.nosdn.127.net/e6c44e8dd451090b324fe127e3e8616d.png?imageView&quality=85&thumbnail=144x144",
      "title": "口腔护理"
    }, {
      "id": 98,
      "pic": "https://yanxuan.nosdn.127.net/61d16210f6dfff72668ff425b79c7190.png?imageView&quality=85&thumbnail=144x144",
      "title": "身体护理"
    }, {
      "id": 99,
      "pic": "https://yanxuan.nosdn.127.net/2de6707340d511031a3fcb3d98ae770d.png?imageView&quality=85&thumbnail=144x144",
      "title": "面部护理"
    }, {
      "id": 100,
      "pic": "https://yanxuan.nosdn.127.net/117270efbbb5f5520dbc609dda5d5b44.png?imageView&quality=85&thumbnail=144x144",
      "title": "头发护理"
    }]
  }, {
    "id": 101,
    "pic": "https://yanxuan.nosdn.127.net/a29e68a6f85dc934412b478edc907ee8.jpg?imageView&thumbnail=0x196",
    "list":[{
      "id": 102,
      "pic": "https://yanxuan.nosdn.127.net/9b809562dfee86bab55e49638fc0bd92.png?imageView&quality=85&thumbnail=144x144",
      "title": "当季星品"
    }, {
      "id": 103,
      "pic": "https://yanxuan.nosdn.127.net/d49727b5068e5d07ef12121131ba57f1.png?imageView&quality=85&thumbnail=144x144",
      "title": "好评推荐"
    }, {
      "id": 104,
      "pic": "https://yanxuan.nosdn.127.net/e98025a8dc0578fce04a78f19b29b5f7.png?imageView&quality=85&thumbnail=144x144",
      "title": "礼品点卡"
    }, {
      "id": 105,
      "pic": "https://yanxuan.nosdn.127.net/ef13f4b0eb17ed2c5da7fe816900f7ec.png?imageView&quality=85&thumbnail=144x144",
      "title": "礼盒"
    }, {
      "id": 106,
      "pic": "https://yanxuan.nosdn.127.net/ef0e7cea476170bf5ea27e5fbfaaf063.png?imageView&quality=85&thumbnail=144x144",
      "title": "床品家纺"
    }, {
      "id": 107,
      "pic": "https://yanxuan.nosdn.127.net/efc1a0fa662f5e199c578d24b8b39281.png?imageView&quality=85&thumbnail=144x144",
      "title": "餐具用品"
    }, {
      "id": 108,
      "pic": "https://yanxuan.nosdn.127.net/6cc34e3f44e2da140a2aca023d2dc61b.png?imageView&quality=85&thumbnail=144x144",
      "title": "日用百货"
    }]
  }]

export default function right(props) {
  console.log('props', props)
  const result = data.filter(item=> props.id == item.id)
  const {pic, list=[]} = result[0];
  return <div className="right">
    <img src={pic} alt="" className="rightImg" />
    <ul className="descInt clearfix" >
      {list.map((item, index) => {
        return <li key={item.id}>
              <img src={item.pic} alt="" />
              <span>{item.title}</span>
        </li>

      })}
    </ul>
  </div>
}

