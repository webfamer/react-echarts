import { EChartsOption } from 'echarts';
import { merge } from 'lodash';
import { FC, useEffect, useState } from 'react';
import BaseChart from '../BaseChart';
const color = [
  '#FF5D94',
  '#00C9D5',
  '#6BD98D',
  '#FD645C',
  '#001BFF',
  '#6E76FC',
  '#1C9DD8',
  '#2D6193',
];
const defaultColor = '#2D6193';

const defaultOptions: EChartsOption = {
  grid: {
    top: 0,
    bottom: 0,
  },
  xAxis: {
    min: 0,
    max: 100,
    axisLabel: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    min: 0,
    max: 100,
    axisLabel: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
  },

  series: [
    {
      type: 'scatter',
      symbolSize: (data: any) => {
        return data[2];
      },
      itemStyle: {
        color: (params) => {
          return color[params.dataIndex] || defaultColor;
        },
      },
      data: [
        [60, 70, 120, '稻梦空间'],
        [45, 40, 100, '云顶之上'],
        [30, 20, 80, '网红'],
        [20, 68, 60, '云松'],
        [80, 80, 50, ''],
        [70, 30, 30, ''],
        [90, 40, 30, ''],
      ],
      label: {
        show: true,
        position: 'inside',
        color: '#fff',
        formatter: ({ data }: any) => {
          return data[3] || '';
        },
      },
    },
  ],
};

const ScatterChart: FC = () => {
  const [options, setOptons] = useState(defaultOptions);

  useEffect(() => {
    setOptons(
      merge<EChartsOption, EChartsOption, EChartsOption>(
        {},
        defaultOptions,
        {},
      ),
    );
  }, []);

  return <BaseChart options={options}></BaseChart>;
};

export default ScatterChart;
