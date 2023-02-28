import { FC, useEffect, useRef } from 'react';
import * as Highcharts from 'highcharts';
import Highcharts3D from 'highcharts/highcharts-3d';
import Funnel3d from 'highcharts/modules/funnel3d';
import Cylinder from 'highcharts/modules/cylinder';

Highcharts3D(Highcharts);
Funnel3d(Highcharts);
Cylinder(Highcharts);
interface Iprops {
  data: any[];
}
const FunnelChart3D: FC<Iprops> = ({
  data = [
    ['50岁以上', 45],
    ['35-50', 25],
    ['20-35', 20],
    ['20以下', 10],
  ],
}) => {
  const options = {
    chart: {
      type: 'funnel3d',
      options3d: {
        enabled: true,
        alpha: 10,
        depth: 50,
        // viewDistance: 50,
      },

      backgroundColor: 'transparent',
    },
    colors: ['#399AFE', '#5BF7FA', '#6ED3A0'],
    title: {
      text: '',
    },
    plotOptions: {
      series: {
        dataLabels: {
          align: 'right',
          borderColor: '#fff',
          enabled: true,
          format: '{point.name}：{point.y}%',
          //   allowOverlap: true,
          y: 10,
          style: {
            color: '#fff',
            fontSize: 16,
          },
        },
        neckWidth: '25%',
        neckHeight: '25%',
        width: '70%',
        height: '80%',
        // center: ['50%, 50%'],
      },
    },
    series: [
      {
        name: '',
        data: data,
      },
    ],
  };

  useEffect(() => {
    Highcharts.chart('container', options);
  }, [data]);
  return <div id="container" style={{ width: '100%', height: '100%' }}></div>;
};

export default FunnelChart3D;
