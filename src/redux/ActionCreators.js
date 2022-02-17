import * as ActionTypes from './ActionTypes';
import { STAFFS, DEPARTMENTS } from '../shared/staffs';

export const fetchStaffs = () => (dispatch) => {
    dispatch(staffsLoading(true));

    setTimeout(() => {
        dispatch(addStaffs(STAFFS))
    }, 2000)
}

export const  staffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING
});

export const  staffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
});

export const  addStaffs = (staffs) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staffs
});

export const fetchDepartments = () => (dispatch) => {
    dispatch(departmentsLoading(true));

    setTimeout(() => {
        dispatch(addDepartments(DEPARTMENTS))
    }, 2000)
}

export const  departmentsLoading = () => ({
    type: ActionTypes.DEPARTMENTS_LOADING
});

export const  departmentsFailed = (errmess) => ({
    type: ActionTypes.DEPARTMENTS_FAILED,
    payload: errmess
});

export const  addDepartments = (departments) => ({
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: departments
});