import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { db } from '../../utils/firebase'
import './SidebarChat.css'
import firebase from 'firebase'

function SidebarChat({addNewChat, name}) {

    const createChat = ()=>{
        const roomName = prompt("Please enter name for room chat")
        if(roomName){
            db.collection('groups').add({
                name:roomName,
                timestamp:firebase.firestore.FieldValue.serverTimestamp()
            })
        }
    }

    return !addNewChat?(
        <div className="sidebar-chat">
            {name && <Avatar src={`https://avatars.dicebear.com/api/human/${name}.svg`} />}
            <div className="sidebar-chat__info">
                <h2>{name}</h2>
                <p>Last message ...</p>
            </div>
        </div>
    ):(
        <div onClick={createChat} className="sidebar-chat">
            <h2>Create new room chat</h2>
        </div>
    )
}

export default SidebarChat
