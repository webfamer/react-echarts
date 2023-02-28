import { Link, Outlet } from 'umi';
import styles from './index.less';
import FullScreenContainer from '@/components/FullScreenContainer';
export default function Layout() {
  return (
    <div className={styles.indexPage}>
      <FullScreenContainer>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Outlet />
        </div>
      </FullScreenContainer>
    </div>
  );
}
