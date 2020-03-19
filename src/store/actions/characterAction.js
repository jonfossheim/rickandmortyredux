import {
    SET_CHARACTER_RESULTS, SET_SPECIFIC_CHARACTER_RESULT
} from "./actionTypes";
import {RM_API} from "../../utils/utils";
import axios from 'axios'

export const setCharacterResults = () => {

    return dispatch => {
        axios.get(RM_API)
            .then(result => {
                dispatch({
                    type: SET_CHARACTER_RESULTS,
                    characterResults: result.data.results
                })
            })
    }
}

export const setSpecificCharacterResult = (pageId) => {
    return dispatch => {
        axios.get(RM_API + pageId)
        .then(result => {
            console.log('frm the action', result, 'id is ', pageId );
            dispatch({
                type: SET_SPECIFIC_CHARACTER_RESULT,
                specificCharacterResult: result.data
            })
        })
    }
}

