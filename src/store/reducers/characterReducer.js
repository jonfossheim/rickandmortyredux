import {
    SET_CHARACTER_RESULTS, 
    SET_SPECIFIC_CHARACTER_RESULT
} from "../actions/actionTypes";

const initialState = {
    characterResults: [],
    specificCharacterResult: {}
}

const CharacterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTER_RESULTS:
            return {
                ...state,
                characterResults: action.characterResults
            }
        case SET_SPECIFIC_CHARACTER_RESULT:
            return {
                ...state,
                specificCharacterResult: action.specificCharacterResult
            }
        default:
            return state
    }
}

export default CharacterReducer
