import { color, EChartsOption } from 'echarts';
import { merge, transform } from 'lodash';
import { FC, useEffect, useState } from 'react';
import BaseChart from '../BaseChart';
import { RadiusBarChartProps } from './type';

const defaultOptions: EChartsOption = {
  // grid: { left: 100, right: 70, top: 20, bottom: 20 },
  angleAxis: {
    axisLabel: { show: false },
    axisLine: { show: false },
    splitLine: { show: false },
    axisTick: { show: false },
    max: 4000,
  },
  radiusAxis: {
    type: 'category',
    axisLabel: { show: false },
    axisLine: { show: false },
    splitLine: { show: false },
    axisTick: { show: false },
  },
  polar: {
    center: ['30%', '55%'],
    radius: '450%',
  },
  legend: {
    show: true,
    orient: 'vertical',
    left: '60%',
    top: 'center',
    padding: [0, 0, 0, 6],
  },
};

const RadiusBarChart: FC<RadiusBarChartProps> = ({
  data = [],
  customOptions,
  showBg = false,
}) => {
  const [options, setOptions] = useState<EChartsOption>(defaultOptions);

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
          radiusAxis: {
            data: data.map((item) => item.name),
          },
          series: data
            .sort((a, b) => {
              return a >= b ? -1 : 1;
            })
            .map((item) => {
              return {
                type: 'bar',
                name: item.name,
                label: {
                  show: false,
                  position: 'right',
                  textBorderColor: '#fff',
                  color: '#fff',
                  fontFamily: 'venir-Book, Avenir',
                  fontSize: 26,
                  fontWeight: 'normal',
                },
                barGap: '80%',
                roundCap: true,
                itemStyle: {
                  // borderRadius: [12, 12, 12, 12],
                },
                barWidth: 8,
                coordinateSystem: 'polar',
                data: [item.value],
                showBackground: true,
                // itemStyle: {
                //   borderRadius: [14, 14, 14, 14],
                //   borderWidth: 20,
                //   color: {
                //     type: 'linear',
                //     x: 0,
                //     y: 0,
                //     x2: 1,
                //     y2: 0,
                //     colorStops: [
                //       {
                //         offset: 0,
                //         color: 'rgba(24, 219, 253, 0)', // 0% 处的颜色
                //       },
                //       {
                //         offset: 1,
                //         color: '#18DBFD', // 100% 处的颜色
                //       },
                //     ],
                //     global: false, // 缺省为 false
                //   },
                // },
                // showBackground: true,
              };
            }),
          // [
          //   {
          //     showBackground: showBg,
          //     backgroundStyle: showBg
          //       ? {
          //           color: 'rgba(255, 255, 255, 0.1)',
          //           borderRadius: 14,
          //         }
          //       : {
          //           color: 'transparent',
          //         },
          //     data: data.map((item) => item.value),
          //   },
          // ],
          legend: {
            show: true,
            data: data.map((item) => item.name),
            formatter: (name) => {
              const item = data.find((item) => item.name === name) as any;
              return `{label|${item.name}} {num|${item.value}}`;
            },
            textStyle: {
              rich: {
                label: {
                  fontSize: 16,
                  fontWeight: 400,
                  width: 80,
                },
                num: {
                  fontSize: 18,
                  fontWeight: 500,
                },
              },
            },
            itemGap: 16,
            itemWidth: 16,
            itemHeight: 4,
          },
        },

        customOptions,
      ),
    );
  }, [data, customOptions]);

  return <BaseChart options={options}></BaseChart>;
};

export default RadiusBarChart;
