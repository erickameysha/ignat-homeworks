import React from 'react'
import s from './Message.module.css'
import './engle.svg'
import HW1 from '../h1/HW1'
type messageDataProps={
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props: messageDataProps) {
    return (
        <div>
         <div className={s.wrapper}>
             <img className={s.img} src={props.avatar} alt=""/>
             <div className={s.egle}>
                 <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M0.153427 18.6688L23.474 0.982594L23.4055 18.9652L0.153427 18.6688Z" fill="#871010"/>
                 </svg>
             </div>
             <div className={s.content}>

                 <div className={s.name}>{props.name}</div>
                 <div className={s.message}>{props.message}</div>
                 <div className={s.time}>{props.time}</div>
             </div>
         </div>
        </div>
    )
}

export default Message
