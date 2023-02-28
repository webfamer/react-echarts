import { FC, useEffect, useState } from 'react';
import { color, EChartsOption } from 'echarts';
import PieChart from '../PieChart';
import { RoseChartProps } from './type';
import { merge } from 'lodash';

const defaultOptions: EChartsOption = {
  textStyle: {
    fontFamily: 'alilight',
    color: '#FFF',
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'vertical',
    left: '70%',
    top: 'center',
    formatter: (name) => {
      return name;
    },
    // height: '80%',
    textStyle: {
      color: '#ffffff',
      fontSize: 16,
      fontFamily: 'PingFangSC-Regular, PingFang SC',
      fontWeight: 400,
      padding: [0, 0, 0, 6],
      // rich: {
      //   tw: {
      //     // width: 100,
      //     fontSize: 20,
      //     fontWeight: 400,
      //     width: 100,
      //     align: 'right',
      //   },
      // num: {
      //   fontFamily: 'Avenir-Medium, Avenir',
      //   fontSize: 32,
      //   fontWeight: 500,
      //   color: '#10FFCA',
      //   width: 80,
      //   align: 'right',
      // },
      // unit: {
      //   fontSize: 20,
      //   fontWeight: 400,
      // },
      // },
    },
    tooltip: {
      show: true,
    },
    itemWidth: 10,
    itemHeight: 10,
    itemGap: 16,
  },
  series: [
    {
      name: '',
      type: 'pie',
      // right: '15%',
      center: ['35%', '50%'],
      radius: ['25%', '80%'],
      startAngle: 225,
      roseType: 'radius',
      label: {
        show: true,
        // position: 'center',
        fontFamily: 'PingFangSC-Semibold, PingFang SC',
        fontWeight: 600,
        color: '#fff',
        fontSize: 16,
        formatter: '{c}',
        // rich: {
        //   num: {
        //     fontFamily: 'Avenir-Medium, Avenir',
        //     fontSize: 20,
        //     fontWeight: 500,
        //     lineHeight: 23,
        //     color: '#fff',
        //     align: 'center',
        //   },
        //   label: {
        //     fontFamily: 'PingFangSC-Regular, PingFang SC',
        //     fontSize: 18,
        //     fontWeight: 400,
        //     lineHeight: 18,
        //     align: 'center',
        //     color: '#fff',
        //   },
        // },
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
    {
      type: 'pie',
      center: ['35%', '50%'],
      radius: ['10%', '15%'],
      showEmptyCircle: true,
      data: [],
    },
  ],
};

const RoseChart: FC<RoseChartProps> = ({ data = [], customOptions, unit }) => {
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
          // legend: data.length
          //   ? {
          //       formatter: (name: string) => {
          //         return `${name}`;
          //       },
          //       itemWidth: 10,
          //       itemHeight: 10,
          //     }
          //   : {},
        },
        customOptions,
      ),
    );
  }, [customOptions]);

  return <PieChart data={data} customOptions={options}></PieChart>;
};

export default RoseChart;
