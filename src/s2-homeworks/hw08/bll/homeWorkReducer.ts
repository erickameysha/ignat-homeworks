import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let endSTATE = [...state].sort((a, b)=> {
                if (a.name >= b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up'? endSTATE: endSTATE.reverse() // need to fix
        }
        case 'check': {

            return [...state ].filter(el=>el.age >=action.payload) // need to fix
        }
        default:
            return state
    }
}
// type ActionType = { type: 'sort', payload: 'up' |'down'} | { type: 'check', payload: number}