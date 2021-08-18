
const initialState = {
    num: 0,
    minValue: 0,
    maxValue: 1,
    error: false,
    mode: false,
}

export const counterReducer = (state = initialState, action: ActionType): typeof initialState => {
    switch (action.type) {
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
                error: action.error
            }
        case "SET-NUM-FROM-LOCAL-STORAGE":
            return {
                ...state,
                num: action.num
            }
        case "SET-MIN-VALUE-FROM-LOCAL-STORAGE":
            return {
                ...state,
                minValue: action.minValue
            }
        case "SET-MAX-VALUE-FROM-LOCAL-STORAGE":
            return {
                ...state,
                maxValue: action.maxValue
            }
        default:
            return state
    }
}

export const increaseIncrementAC = (maxValue: number) => ({type: 'INCREASE-INCREMENT', maxValue} as const)
export const setInNumMinValueAC = (minValue: number) => ({type: 'SET-IN-NUM-MIN-VALUE', minValue} as const)
export const changeModeHandlerAC = (mode: boolean) => ({type: 'CHANGE-MODE-HANDLER', mode} as const)
export const setMinValueAC = (value: number) => ({type: 'SET-MIN-VALUE', value} as const)
export const setMaxValueAC = (value: number) => ({type: 'SET-MAX-VALUE', value} as const)
export const setErrorAC = (error: boolean) => ({type: 'SET-MIN-ERROR', error} as const)
export const setNumFromLocalStorageAC = (num: number)=> ({type: 'SET-NUM-FROM-LOCAL-STORAGE', num} as const)
export const setMinValueFromLocalStorageAC = (minValue: number) => ({type: 'SET-MIN-VALUE-FROM-LOCAL-STORAGE', minValue} as const)
export const setMaxValueFromLocalStorageAC = (maxValue: number) => ({type: 'SET-MAX-VALUE-FROM-LOCAL-STORAGE', maxValue} as const)

//types
type ActionType = ReturnType<typeof increaseIncrementAC>
    |  ReturnType<typeof setInNumMinValueAC>
    |  ReturnType<typeof changeModeHandlerAC>
    |  ReturnType<typeof setMinValueAC>
    |  ReturnType<typeof setMaxValueAC>
    |  ReturnType<typeof setErrorAC>
    |  ReturnType<typeof setNumFromLocalStorageAC>
    |  ReturnType<typeof setMinValueFromLocalStorageAC>
    |  ReturnType<typeof setMaxValueFromLocalStorageAC>
