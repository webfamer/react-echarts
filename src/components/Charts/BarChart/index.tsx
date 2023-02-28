import { color, EChartsOption } from 'echarts';
import { merge, transform } from 'lodash';
import { FC, useEffect, useState } from 'react';
import BaseChart from '../BaseChart';
import { BarChartProps } from './type';

const defaultOptions: EChartsOption = {
  grid: { left: 70, right: 70, top: 30, bottom: 40 },
  xAxis: {
    type: 'category',
    axisLabel: {
      fontSize: 24,
      fontWeight: 400,
    },
    // splitLine: {
    //   show: false,
    // },
    axisLine: {
      show: true,
      lineStyle: {
        color: ' rgba(189, 233, 255, 0.46)',
        width: 2,
      },
    },
    // axisTick: {
    //   show: false,
    // },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      fontSize: 16,
      fontWeight: 400,
      margin: 16,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(189, 233, 255, 0.46)',
        width: 2,
      },
    },
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  series: [
    {
      type: 'bar',
      label: {
        show: false,
      },
      barWidth: '30%',
      itemStyle: {
        borderRadius: [16, 16, 0, 0],
        borderWidth: 20,
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#4C83FF', // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#2AFADF', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
      showBackground: true,
    },
  ],
};

const BarChart: FC<BarChartProps> = ({
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
        {
          series: [
            {
              showBackground: showBg,
              backgroundStyle: showBg
                ? {
                    color: 'rgba(255, 255, 255, 0.1)',
                    // borderRadius: 14,
                  }
                : {
                    color: 'transparent',
                  },
            },
          ],
        },
        defaultOptions,
        {
          dataset: {
            source: data,
          },
        },
        customOptions,
      ),
    );
  }, [data, customOptions]);

  return <BaseChart options={options}></BaseChart>;
};

export default BarChart;
