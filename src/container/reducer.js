import * as types from './actionConstant';

let charactersInitialState = {
    speciesList: [],
    genderList: [],
    originList: [],
    characterList: []
}

export const charsReducer = (prevState = charactersInitialState, action) => {
    switch (action.type) {
        case types.GET_CHAR_LIST:
            return {
                ...prevState,
                characterList: action.payload
            }
        default:
            return prevState
    }
}
