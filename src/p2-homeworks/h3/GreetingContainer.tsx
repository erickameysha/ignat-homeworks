import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void  // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('обязательное поле') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        let setEvent = e.currentTarget.value.trim()
        //console.log('setEvent: ',setEvent)
        if (setEvent){

            setName(setEvent)
            error && setError('')
        } else {

            name && setName('')
            setError('обязательное поле')
        }

        console.log(error)

    }
    const addUser = () => {
        
        addUserCallback(name)
        alert(`Hello  ${name} !`)

        setName('')
        setError('обязательное поле')

    }
    const onClickEnter = (e: KeyboardEvent<HTMLInputElement>) => {
      if(e.key ==='Enter'){
       addUser()
      }
    }

    let totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            onClickEnter={onClickEnter}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
