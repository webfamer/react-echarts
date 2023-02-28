import { init, EChartsType, EChartsOption } from 'echarts';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { merge } from 'lodash';
import { BaseChartProps } from './type';
import styles from './index.less';

const defaultOptions: EChartsOption = {
  textStyle: {
    fontFamily: 'alilight',
    color: '#fff',
    fontWeight: 400,
    fontSize: 22,
  },
  color: ['#00DAAA', '#49D0F5', '#FDC715', '#9759E4', '#ABED75'],
  grid: {
    right: 70,
  },
};

const BaseChart: FC<BaseChartProps> = ({ options }) => {
  const echart = useRef<EChartsType | null>(null);
  const echartRef = useRef<HTMLDivElement | null>(null);
  //init
  useEffect(() => {
    if (echartRef.current) {
      echart.current = init(echartRef.current, { renderer: 'svg' });
    }
    return () => {
      echart.current?.dispose();
    };
  }, []);

  // update
  useEffect(() => {
    echart.current?.setOption(merge({}, defaultOptions, options));
  }, [options]);

  return <div className={styles.container} ref={echartRef}></div>;
};

export default BaseChart;
