import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";
import {Avatar} from "@mui/material";

// нужно создать правильный тип вместо any
export type MessagePropsType ={
    message: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>



                <div className={s.text}>
                    <span id={'hw1-name-' + props.message.id} className={s.name}>
                        {props.message.user.name}
                    </span>
                    <span id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {props.message.message.text}
                    </span>
                </div>
            </div>
            <div className={s.angle}> </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                <Avatar sx={{width: 48, height: 48}}  id={'hw1-avatar-' + props.message.id} alt="Ivan" src={props.message.user.avatar} />
                {props.message.message.time}
            </div>
        </div>
    )
}

export default Message
