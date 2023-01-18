const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdACType): typeof initState => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':{
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}

type changeThemeIdACType = {
type: 'SET_THEME_ID', id:number
}



export const changeThemeId = (id: number): changeThemeIdACType => {
    return {type: 'SET_THEME_ID', id}as const
}

 // fix any
