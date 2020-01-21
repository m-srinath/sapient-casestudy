import * as Actions from './actionConstant';

export function sortById (data) {
    return {
        type: Actions.SORT_BY_ID,
        payload: data
    }
}

export function sortByAsc (data) {
    return {
        type: Actions.SORT_BY_ASC,
        payload: data
    }
}

export function sortByDesc (data) {
    return {
        type: Actions.SORT_BY_DESC,
        payload: data
    }
}

export const storeLoginErrorData = (err) => {
    return {
        type: types.LOGIN_ERROR,
        err: err.data
    }
}

export const storeRegisterSucessData = (data) => {
    return {
        type: types.REGISTER_SUCCESS,
        data
    }
}