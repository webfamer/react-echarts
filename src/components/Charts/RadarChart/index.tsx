import { FC, useEffect, useState } from 'react';
import { color, EChartsOption } from 'echarts';
import { merge } from 'lodash';
import BaseChart from '../BaseChart';
import { PieChartProps } from './type';

const defaultOptions: EChartsOption = {
  title: {
    text: '基础雷达图',
  },
  tooltip: {},
  legend: {
    data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）'],
  },
  radar: {
    shape: 'circle',
    indicator: [
      { name: '销售', max: 6500 },
      { name: '管理', max: 16000 },
      { name: '信息技术', max: 30000 },
      { name: '客服', max: 38000 },
      { name: '研发', max: 52000 },
    ],
  },

  series: [
    {
      name: '预算 vs 开销（Budget vs spending）',
      type: 'radar',
      // areaStyle: {normal: {}},
      data: [
        {
          value: [4300, 10000, 28000, 35000, 50000],
          name: '预算分配（Allocated Budget）',
        },
      ],
    },
  ],
};

const PieChart: FC<PieChartProps> = ({ data = [], customOptions, unit }) => {
  const [options, setOptions] = useState(defaultOptions);

  useEffect(() => {
    setOptions(
      merge<
        EChartsOption,
        EChartsOption,
        EChartsOption,
        EChartsOption | undefined
      >(
        {},
        defaultOptions,
        {
          legend: data.length
            ? {
                formatter: (name: string) => {
                  return name;
                },
              }
            : {},
          series: [
            {
              data: data.sort((a, b) => {
                if (a.value >= b.value) {
                  return -1;
                }
                return 1;
              }),
            },
          ],
        },
        customOptions,
      ),
    );
  }, [data, customOptions]);

  return <BaseChart options={options}></BaseChart>;
};

export default PieChart;
