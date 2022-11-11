import { useEffect, useReducer } from 'react';
import { DashboardContext, DashboardReducer as reducer, initDashboardAction, initialDashboadState } from 'context/Dashboard';

import styles from './styles.module.scss';

export const Dashboard = () => {
  const [state, dispatch] = useReducer(reducer, initialDashboadState)
  useEffect(() => {
    initDashboardAction(dispatch)();
  }, [])
  
  return (
  <div className={styles.dashboardWrapper}>
    <DashboardContext.Provider value={{state, dispatch}}>
      ${state.locals}
    </DashboardContext.Provider>
  </div>
  );
};
