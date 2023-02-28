import { EChartsOption } from 'echarts';

export type ChartData = {
  name: string;
  value: number;
};

export type ChartProps = {
  data: ChartData[];
  customOptions?: EChartsOption;
};
