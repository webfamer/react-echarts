import { color, EChartsOption } from 'echarts';
import { merge, transform } from 'lodash';
import { FC, useEffect, useState } from 'react';
import BaseChart from '../BaseChart';
import { ColumnBarChartProps } from './type';

const defaultOptions: EChartsOption = {
  grid: { left: 100, right: 70, top: 20, bottom: 20 },
  yAxis: {
    type: 'category',
    axisLabel: {
      fontSize: 18,
      fontWeight: 400,
    },
    splitLine: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  xAxis: {
    type: 'value',
    axisLabel: {
      show: false,
    },
    splitLine: {
      show: false,
    },
  },
  series: [
    {
      type: 'bar',
      label: {
        show: true,
        position: 'right',
        textBorderColor: '#fff',
        color: '#fff',
        fontFamily: 'venir-Book, Avenir',
        fontSize: 22,
        fontWeight: 'normal',
      },
      barWidth: '30%',
      itemStyle: {
        borderRadius: [14, 14, 14, 14],
        borderWidth: 20,
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(16, 255, 202, 0)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#10FFCA', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
      showBackground: true,
    },
  ],
};

const ColumnBarChart: FC<ColumnBarChartProps> = ({
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
                    borderRadius: 14,
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

export default ColumnBarChart;
