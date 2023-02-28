import { FC, useEffect, useState } from 'react';
import { EChartsOption } from 'echarts';
import { LineChartProps } from './type';
import { merge } from 'lodash';
import BaseChart from '../BaseChart';

const defaultOptions: EChartsOption = {
  color: [
    // {
    //   type: 'linear',
    //   x: 0,
    //   y: 0,
    //   x2: 1,
    //   y2: 0,
    //   colorStops: [
    //     {
    //       offset: 0,
    //       color: '#4FFFD8', // 0% 处的颜色
    //     },
    //     {
    //       offset: 1,
    //       color: 'rgba(43, 224, 197, 0)', // 100% 处的颜色
    //     },
    //   ],
    //   global: false, // 缺省为 false
    // },
  ],
  grid: {
    top: 30,
    left: 50,
    right: 50,
    bottom: 40,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisLabel: {
      fontSize: 14,
      fontWeight: 300,
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.2)',
      },
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      fontSize: 14,
      fontWeight: 400,
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.2)',
      },
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.2)',
      },
    },
  },
  series: [
    {
      type: 'line',
      smooth: true,
    },
  ],
};

const LineChart: FC<LineChartProps> = ({ isArea, data, customOptions }) => {
  const [options, setOptions] = useState(merge({}, defaultOptions));

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
          dataset: {
            source: data || [],
          },
          series: [
            {
              areaStyle: isArea
                ? {
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [
                        {
                          offset: 0,
                          color: 'rgba(45, 153, 255, 0.78)', // 0% 处的颜色
                        },
                        {
                          offset: 0.61,
                          color: 'rgba(45, 153, 255, 0.61)',
                        },
                        {
                          offset: 1,
                          color: 'rgba(45, 153, 255, 0.3)', // 100% 处的颜色
                        },
                      ],
                      global: false, // 缺省为 false
                    },
                  }
                : undefined,
            },
          ],
        },
        customOptions,
      ),
    );
  }, [data, isArea, customOptions]);

  return <BaseChart options={options}></BaseChart>;
};

export default LineChart;
