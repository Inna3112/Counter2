export type InitialStateType = typeof initialState
type IncreaseIncrementAT = {
    type: 'INCREASE-INCREMENT'
    maxValue: number
}
type SetInNumMinValueAT = {
    type: 'SET-IN-NUM-MIN-VALUE'
    minValue: number
}
type ChangeModeHandlerAT = {
    type: 'CHANGE-MODE-HANDLER'
    mode: boolean
}
type SetsMinValueAT = {
    type: 'SET-MIN-VALUE'
    value: number
}
type SetsMaxValueAT = {
    type: 'SET-MAX-VALUE'
    value: number
}
type setMinErrorAT = {
    type: 'SET-MIN-ERROR'
    error: boolean
}
type setMaxErrorAT = {
    type: 'SET-MAX-ERROR'
    error: boolean
}
type ActionType = IncreaseIncrementAT | SetInNumMinValueAT | ChangeModeHandlerAT
    | SetsMinValueAT | SetsMaxValueAT | setMinErrorAT | setMaxErrorAT
const initialState = {
    num: 0,
    minValue: 0,
    maxValue: 1,
    minError: '',
    maxError: '',
    mode: false,
}

export const counterReducer = (state = initialState, action: ActionType)=> {
    switch (action.type){
        case "INCREASE-INCREMENT":
            return {
                ...state,
                num: state.num < action.maxValue ? state.num + 1 : action.maxValue
            }
        case "SET-IN-NUM-MIN-VALUE":
            return {
                ...state, num: action.minValue
            }
        case "CHANGE-MODE-HANDLER":
            return {
                ...state, mode: action.mode
            }
        case "SET-MIN-VALUE":
            return {
                ...state,
                minValue: action.value
            }
        case "SET-MAX-VALUE":
            return {
                ...state,
                maxValue: action.value
            }
        case "SET-MIN-ERROR":
            return {
                ...state,
                minError: action.error
            }
        case "SET-MAX-ERROR":
            return {
                ...state,
                maxError: action.error
            }
        default:
            return state
    }
}

 export const increaseIncrementAC = (maxValue: number): IncreaseIncrementAT => {
    return {
        type: 'INCREASE-INCREMENT',
        maxValue
    }
}
export const setInNumMinValueAC = (minValue: number): SetInNumMinValueAT => {
    return {
        type: 'SET-IN-NUM-MIN-VALUE',
        minValue
    }
}
export const changeModeHandlerAC = (mode: boolean): ChangeModeHandlerAT => {
    return {
        type: 'CHANGE-MODE-HANDLER',
        mode
    }
}
export const setMinValueAC = (value: number): SetsMinValueAT => {
    return {
        type: 'SET-MIN-VALUE',
        value
    }
}
export const setMaxValueAC = (value: number): SetsMaxValueAT => {
    return {
        type: 'SET-MAX-VALUE',
        value
    }
}
export const setMinErrorAC = (error: boolean): setMinErrorAT => {
    return {
        type: 'SET-MIN-ERROR',
        error
    }
}
export const setMaxErrorAC = (error: boolean): setMaxErrorAT => {
    return {
        type: 'SET-MAX-ERROR',
        error
    }
}