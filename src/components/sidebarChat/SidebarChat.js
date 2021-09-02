import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import { useEffect } from 'react'
import './SidebarChat.css'

function SidebarChat({addNewChat}) {

    const [seed, setSeed] = useState('')

    useEffect(_=>{
        setSeed(Math.floor(Math.random()*5000))

    },[])

    const createChat = ()=>{
        const roomName = prompt("Please enter name for room chat")
        if(roomName){
            console.log(roomName)
        }
    }

    return !addNewChat?(
        <div className="sidebar-chat">
            {seed && <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />}
            <div className="sidebar-chat__info">
                <h2>Room Name</h2>
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
