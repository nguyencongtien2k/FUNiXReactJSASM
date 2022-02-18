import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchStaffs = () => (dispatch) => {
    dispatch(staffsLoading(true));

    return fetch(baseUrl + 'staffs')
        .then(response => response.json())
        .then(staffs => dispatch(addStaffs(staffs)))
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

    return fetch(baseUrl + 'departments')
        .then(response => response.json())
        .then(departments => dispatch(addDepartments(departments)))
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

export const fetchPayrolls = () => (dispatch) => {
    dispatch(payrollsLoading(true));

    return fetch(baseUrl + 'payrolls')
        .then(response => response.json())
        .then(payrolls => dispatch(addPayrolls(payrolls)))
}

export const  payrollsLoading = () => ({
    type: ActionTypes.PAYROLLS_LOADING
});

export const  payrollsFailed = (errmess) => ({
    type: ActionTypes.PAYROLLS_FAILED,
    payload: errmess
});

export const  addPayrolls = (payrolls) => ({
    type: ActionTypes.ADD_PAYROLLS,
    payload: payrolls
});