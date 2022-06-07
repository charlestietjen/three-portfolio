import { useReducer } from "react"
import {
    TOGGLE_PROJECTS
} from './actions'

export const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_PROJECTS:
            return {
                ...state,
                projectsVisible: action.projectsVisible,
            }
        default:
            return state
    }
}

export function useListReducer(initialState){
    return useReducer(reducer, initialState)
}