import { FC, useEffect, useState } from 'react';
import { color, EChartsOption } from 'echarts';
import BaseChart from '../BaseChart';
import { PieChartProps } from './type';
import { merge } from 'lodash';

const defaultOptions: EChartsOption = {
  textStyle: {
    fontFamily: 'alilight',
    color: '#FFF',
  },
  tooltip: {
    trigger: 'item',
  },
  color: ['#1883FD', '#18DBFD', '#FFC002', '#FF6620', '#6BD98D'],
  legend: {
    orient: 'vertical',
    left: '60%',
    top: 'center',
    // height: '80%',
    textStyle: {
      color: '#ffffff',
      fontSize: 16,
      rich: {
        tw: {
          // width: 100,
          fontSize: 20,
          fontWeight: 400,
          width: 100,
          align: 'right',
        },
        num: {
          fontFamily: 'Avenir-Medium, Avenir',
          fontSize: 32,
          fontWeight: 500,
          color: '#10FFCA',
          width: 80,
          align: 'right',
        },
        unit: {
          fontSize: 20,
          fontWeight: 400,
        },
      },
    },
    tooltip: {
      show: true,
    },
    itemWidth: 0,
    // itemHeight: 12,
    itemGap: 16,
  },
  series: [
    {
      name: '人口',
      type: 'pie',
      // right: '15%',
      radius: '65%',
      center: ['30%', '50%'],
      startAngle: 90,
      label: {
        show: true,
        // position: 'center',
        formatter: '{label|{b}}\n{num|{d}}',
        rich: {
          num: {
            fontFamily: 'Avenir-Medium, Avenir',
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 23,
            color: '#fff',
            align: 'center',
          },
          label: {
            fontFamily: 'PingFangSC-Regular, PingFang SC',
            fontSize: 18,
            fontWeight: 400,
            lineHeight: 18,
            align: 'center',
            color: '#fff',
          },
        },
      },
      minAngle: 15,
      emphasis: {
        scaleSize: 6,
        label: {
          show: true,
          fontSize: 16,
          color: '#fff',
          lineHeight: 20,
        },
      },
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
                  const idx = data.findIndex((e) => e.name === name);
                  const v = data[idx].value;
                  let n = name;
                  // if (name.length > 5) {
                  //     n = name.slice(0, 5) + '...';
                  // }
                  return `{tw|${n}：} {num|${v}}${
                    unit ? ` {unit|${unit}}` : ''
                  }`;
                },
              }
            : {},
          series: [
            {
              data: data.sort((a, b) => {
                if (a.value >= b.value) {
                  return -1;
                } else {
                  return 1;
                }
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
