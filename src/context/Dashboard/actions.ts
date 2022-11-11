import { Dispatch } from 'react'

import { ActionTypes, Action } from './types';

export const initDashboardAction = (dispatch: Dispatch<Action>) => async () => {
    dispatch ({type:ActionTypes.DASHBOARD_INIT_PENDING});
    try{
        const result = "ther2e";
        dispatch ({type:ActionTypes.DASHBOARD_INIT_SUCCESS, payload: result});

    }catch(error){
        dispatch ({type:ActionTypes.DASHBOARD_INIT_ERROR});

    }
}