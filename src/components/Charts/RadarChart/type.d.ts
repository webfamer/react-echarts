import { EChartsOption } from 'echarts';

type RadarProps = {
  data: RadarData[];
  customOptions?: EChartsOption | undefined;
};
export type PieChartProps = RadarProps;
export type RadarData = {
  name: string;
  value: number[];
};
