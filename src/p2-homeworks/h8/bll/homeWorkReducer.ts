import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let endSTATE = [...state].sort((a, b)=> {
                if (a.name >= b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            } )
      return action.payload === 'up' ? endSTATE : endSTATE.reverse()
        }
        case 'check': {
            // need to fix
            return [...state].filter(el=> el.age >= action.payload)
        }
        default:
            return state
    }
}


type ActionType = { type: 'sort', payload: 'up' |'down'} | { type: 'check', payload: number}

