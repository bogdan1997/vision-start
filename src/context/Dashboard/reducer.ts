import { ActionTypes, Action } from "./types";
import { DashboardState } from "./state";

export const initialDashboadState: DashboardState = {
    locals: "here2",
}

export const DashboardReducer = (state: DashboardState, action: Action) => {
    switch (action.type) {
        case ActionTypes.DASHBOARD_INIT_PENDING:
            return {
                ...state,
                pending: true,
                error: false
            }
        case ActionTypes.DASHBOARD_INIT_SUCCESS:
            return {
                ...state,
                locals: action.payload,
                pending: false,
                error: false
            }
        case ActionTypes.DASHBOARD_INIT_ERROR:
            return {
                ...state,
                pending: false,
                error: true
            }
            default:
                return state;
    }
}