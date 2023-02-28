export const pieChardata = [
  { name: '取消成绩', value: 10 },
  { name: '取消资格', value: 25 },
  { name: '命中无效', value: 20 },
  { name: '违规加时', value: 10 },
];
export const funnyChartData = [
  {
    name: '60岁以上',
    value: 743,
  },
  {
    name: '14-59岁',
    value: 1593,
  },
  {
    name: '14岁以下',
    value: 200,
  },
]
export const funny3DData = [[10,30],[20,20],[30,10]]

export const radardata = [
  {
    value: [90, 86, 76, 83, 92],
    name: '个人能力模型',
  },
];
export const rateOptions = {
  color: ['#1890FF', '#FFE434', '#56A3F1', '#FF917C'],
  title: {
    show: false,
  },
  legend: {
    show: false,
  },
  radar: {
    shape: 'radar',
    indicator: [
      { name: '命中', max: 100 },
      { name: '精度', max: 100 },
      { name: '协作', max: 100 },
      { name: '速度', max: 100 },
      { name: '识别', max: 100 },
    ],
    axisName: {
      textStyle: { color: '#ccc', fontSize: '12px' },
    },
    center: ['50%', '60%'],
    axisLine: { lineStyle: { type: 'dotted' } },
  },
  series: [
    {
      name: '综合评分',
      markPoint: {
        symbol: 'emptyDiamond' /* 指定一个类型 */,
        label: {
          color: '#FF9023',
        },
        data: [
          /* value为值，x,y对应坐标，symbolSize为显示大小 */
          { name: '', value: 96.5, x: '50%', y: '60%', symbolSize: 68 },
        ],
        itemStyle: {
          normal: {
            /* 正常显示样式 */ color: '#E3F2FF',
            borderWidth: 0 /* 保证不显示边框 */,
          },
          emphasis: {
            /* 鼠标移上样式 */ borderWidth: 0,
          },
        },
      },
      label: {
        show: true,
        textStyle: {
          color: '#FF9023',
          fontSize: '12px',
          fontWeight: 'bold',
        },
        formatter: function (params: any) {
          return params.value;
        },
      },
      areaStyle: {
        normal: {
          color: '#3CB9EF',
        },

        emphasis: {
          color: 'rgba(6, 222, 249,0.5)',
        },
      },
    },
  ],
};