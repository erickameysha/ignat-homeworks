


const initState = false


type ActionType= loadingACType

export const loadingReducer = (state = initState, action: ActionType) => { // fix any
    switch (action.type) {
        case "LOADING":{

            return state = !state
        }
        default:
            return state
    }
}
type loadingACType = {
    type: 'LOADING',
    payload: { newLoad: boolean }
}
export const loadingAC = (newLoad: boolean): loadingACType => {
    return {
        type: 'LOADING',
        payload: {
            newLoad
        }
    } as const


} // fix any