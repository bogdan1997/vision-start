export enum ActionTypes {
    DASHBOARD_INIT_PENDING = 'DASHBOARD_INIT_PENDING',
    DASHBOARD_INIT_SUCCESS = 'DASHBOARD_INIT_SUCCESS',
    DASHBOARD_INIT_ERROR = 'DASHBOARD_INIT_ERROR',
}
export type Action = {
    readonly type : ActionTypes;
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    readonly payload?:any;
}