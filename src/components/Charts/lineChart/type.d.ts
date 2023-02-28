import { ChartProps } from '../type';

type LineData = {
  name: string | number;
  value: number;
};
export type LineChartProps = ChartProps & {
  data: LineData[];
  isArea?: boolean;
};
