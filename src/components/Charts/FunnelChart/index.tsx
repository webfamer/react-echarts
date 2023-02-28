import { EChartsOption } from 'echarts';
import { merge } from 'lodash';
import { FC, useEffect, useState } from 'react';
import BaseChart from '../BaseChart';
import { FunnelChartProps } from './type';

const defaultOptions: EChartsOption = {
  // color: ['linear-gradient(90deg, #FFCA5A 0%, #DC9100 100%)', 'linear-gradient(90deg, #00D1FF 0%, #00A3FC 100%)', 'linear-gradient(360deg, #00AE92 0%, #04FFD7 100%)'],
  color: [
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#FFCA5A', // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#DC9100', // 100% 处的颜色
        },
      ],
      global: false, // 缺省为 false
    },
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#00D1FF', // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#00A3FC', // 100% 处的颜色
        },
      ],
      global: false, // 缺省为 false
    },
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#00AE92', // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#04FFD7', // 100% 处的颜色
        },
      ],
      global: false, // 缺省为 false
    },
  ],
  series: [
    {
      name: 'Funnel',
      type: 'funnel',
      left: '10%',
      top: 20,
      bottom: 20,
      width: '40%',
      //   min: 0,
      //   max: 100,
      minSize: '0%',
      maxSize: '100%',
      sort: 'none',
      gap: 2,
      label: {
        show: true,
        fontFamily: 'alilight',
        position: 'inside',
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        color: '#fff',
        textBorderColor: '#fff',
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: 'solid',
        },
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1,
      },
      emphasis: {
        label: {
          fontSize: 18,
        },
      },
    },
  ],
};

const FunnelChart: FC<FunnelChartProps> = ({
  data = [],
  customOptions,
  unit,
}) => {
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
                show: true,
                orient: 'vertical',
                left: '60%',
                top: 'center',
                height: '80%',
                // align: 'right',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 20,
                  rich: {
                    tw: {
                      width: 100,
                      fontFamily: 'PingFangSC-Regular, PingFang S',
                      fontSize: 20,
                      fontWeight: 400,
                    },
                    num: {
                      fontSize: 32,
                      fontWeight: 500,
                      fontFamily: 'Avenir-Medium, Avenir',
                      color: '#10FFCA',
                      width: 80,
                      align: 'right',
                    },
                    unit: {
                      fontFamily: 'PingFangSC-Regular, PingFang S',
                      fontSize: 20,
                      fontWeight: 400,
                      width: 20,
                    },
                  },
                },
                tooltip: {
                  show: true,
                },
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
                itemWidth: 0,
                // itemHeight: 12,
                itemGap: 16,
              }
            : { show: false },
          series: [
            {
              data,
            },
          ],
        },
        customOptions,
      ),
    );
  }, [data, customOptions]);

  return <BaseChart options={options}></BaseChart>;
};
export default FunnelChart;
