import PieChart from '@/components/Charts/PieChart';
import { pieChardata,funnyChartData,funny3DData,radardata,rateOptions } from './components/data';
import ColumnBarChart from '@/components/Charts/ColumnBarChart';
import BarChar from '@/components/Charts/BarChart';
import LineChart from '@/components/Charts/lineChart';
import FunnelChart from '@/components/Charts/FunnelChart';
import FunnelChart3D from '@/components/Charts/FunnelChart3D';
import RadiusBarChart from '@/components/Charts/RadiusBarChart';
import RoseChart from '@/components/Charts/RoseChart';
import ScatterChart from '@/components/Charts/ScatterChart';
import RadarChart from '@/components/Charts/RadarChart';
import styles from './index.less'
const HomePage = () => {
  return (
    <div>
      <div className={styles.chartBox}>
        <PieChart data={pieChardata} />
      </div>
      <div className={styles.chartBox}>
        <ColumnBarChart data={pieChardata} showBg />
      </div>
      <div className={styles.chartBox}>
        <BarChar data={pieChardata} showBg />
      </div>
      <div className={styles.chartBox}>
        <LineChart data={pieChardata} />
      </div>
      <div className={styles.chartBox}>
        <FunnelChart data={funnyChartData} />
      </div>
      <div className={styles.chartBox}>
        <FunnelChart3D data={funny3DData} />
      </div>
      <div className={styles.chartBox}>
        <RadiusBarChart data={funnyChartData} />
      </div>
      <div className={styles.chartBox}>
        <RoseChart data={funnyChartData} />
      </div>
      <div className={styles.chartBox}>
        <ScatterChart />
      </div>
      <div className={styles.chartBox}>
        <RadarChart  data={radardata} customOptions={rateOptions}/>
      </div>
    </div>
  );
}
export default HomePage;
