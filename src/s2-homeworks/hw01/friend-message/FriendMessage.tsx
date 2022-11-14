import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";
import App from "../../../s1-main/App";
import {Avatar} from "@mui/material";

// создать тип вместо any и отобразить приходящие данные
type FriendMessagePropsType ={
    message:  MessageType
}
const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                <img
                    style={{width: 48, height: 48}}
                    id={'hw1-friend-avatar-' + props.message.id}
                    alt="Ivan" src={props.message.user.avatar}
                />

                {props.message.message.time}
                {/**/}
            </div>
            <div className={s.friendImageAndText}>

                <div className={s.friendImageAndTextContainer}>
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {props.message.user.name}

                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                      {props.message.message.text}

                        {/**/}
                    </pre>
                </div>
                </div>
            </div>

        </div>
    )
}

export default FriendMessage
