import HallDetail from "@/types/HallDetailsType";

const HallDetailsConstant: Array<HallDetail> = [
  {
    name: '横浜市営戸塚斎場',
    tel: '045-864-7001',
    address: '横浜市戸塚区鳥が丘10番地5号',
    url: 'https://www.city.yokohama.lg.jp/kurashi/sumai-kurashi/saijo/saijo/to-saijou.html',
    stations: [
      '市営地下鉄ブルーライン／踊場駅',
      'JR線・市営地下鉄ブルーライン／戸塚駅',
      '相鉄いずみ野線／弥生台駅'
    ],
    mapOption: {
      lat: 35.41374457000047,
      lng: 139.5212493248272,
      zoom: 17
    }
  },

  {
    name: '横浜市営久保山斎場',
    tel: '045-231-3060',
    address: '横浜市西区元久保町3番1号',
    url: 'https://www.city.yokohama.lg.jp/kurashi/sumai-kurashi/saijo/saijo/ku-saijou.html',
    stations: [
      '京急線／黄金町',
      'JR横須賀線／保土ヶ谷駅',
      '相鉄線／西横浜駅'
    ],
    mapOption: {
      lat: 35.44381208839534,
      lng: 139.608406213187,
      zoom: 17
    }
  },

  {
    name: '横浜市営北部斎場',
    tel: '045-921-5700',
    address: '横浜市緑区長津田町5125番地1',
    url: 'https://www.city.yokohama.lg.jp/kurashi/sumai-kurashi/saijo/saijo/ho-saijou.html',
    stations: [
      'JR横浜線／十日市場駅',
    ],
    mapOption: {
      lat: 35.51078236900749,
      lng: 139.48744890094062,
      zoom: 17
    }
  },

  {
    name: '横浜市営南部斎場',
    tel: '045-785-9411',
    address: '横浜市金沢区みず木町1番地',
    url: 'https://www.city.yokohama.lg.jp/kurashi/sumai-kurashi/saijo/saijo/na-saijou.html',
    stations: [
      '京急線／金沢八景駅',
    ],
    mapOption: {
      lat: 35.33813875815392,
      lng: 139.58956494202005,
      zoom: 17
    }
  },
]

export default HallDetailsConstant;