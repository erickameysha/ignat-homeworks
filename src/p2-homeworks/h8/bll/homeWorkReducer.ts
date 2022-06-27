import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    if (action.type === 'sort') {
        {
            let endSTATE = [...state].sort((a, b) => {
                if (a.name >= b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? endSTATE : endSTATE.reverse()
        }
    } else if (action.type === 'check') {
        {
            // need to fix
            return [...state].filter(el => el.age >= action.payload)
        }
    } else {
        return state
    }
}


type ActionType = { type: 'sort', payload: 'up' |'down'} | { type: 'check', payload: number}

