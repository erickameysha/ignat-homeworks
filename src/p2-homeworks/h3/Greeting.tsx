import React, {ChangeEvent, KeyboardEvent,} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onClickEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onClickEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div>
            <div>
                <input
                    value={name}
                    onChange={setNameCallback}
                    onKeyPress={onClickEnter}
                    className={inputClass}
                />
                <button disabled={!!error} onClick={addUser}>add</button>

                <span>{totalUsers}</span>
            </div>
            <span>{error}</span>

        </div>
    )
}

export default Greeting
