import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../utils/firebase'
import firebase from 'firebase'
import bgWaChat from '../../assets/img/bg-wa-chat.jpg'
import './Chat.css'
import { StateContext } from '../../provider/StateProvider'

function Chat() {

    const [inputMessage, setInputMessage] = useState('')
    const [chats, setChats] = useState([])
    const [roomName, setRoomName] = useState('')
    const {id} = useParams()
    const [{user}, dispatch] = useContext(StateContext)

    useEffect(_=>{
        const chatUnsubscribe = db.collection('groups').doc(id).collection('chats').orderBy('timestamp','asc').onSnapshot(snapshot=>{
            setChats(snapshot.docs.map(chat=>({
                id: chat.id,
                data: chat.data()
            })))
        })

        const roomUnsubscribe = db.collection('groups').doc(id).onSnapshot(snapshot=>{
            setRoomName(snapshot.data().name)
        })

        return ()=>{
            chatUnsubscribe()
            roomUnsubscribe()
        }
    },[id])

    const onSubmitMessageHandler = event=>{
        if(inputMessage.trim()){
            db.collection('groups').doc(id).collection('chats').add({
                message: inputMessage,
                authorName:user.displayName,
                authorEmail: user.email,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
        setInputMessage('')
        event.preventDefault()
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${roomName}.svg`} />
                <div className="chat__header-info">
                    <h3>{roomName}</h3>
                    <p>{chats.length>0 && new Date(chats[chats.length-1]?.data?.timestamp?.toDate()).toLocaleDateString()}</p>
                </div>

                <div className="chat__header-right">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body" style={{background:bgWaChat}}>
                {
                    chats.map(chat=>(
                        <div key={chat.id} className={`chat__message-container ${chat.data.authorEmail==user.email && 'chat__message-container-receiver'}`}>
                            <div className="chat__message-wrapper">
                                <span className="chat__name">{chat.data.authorName}</span>
                                <p className="chat__message">{chat.data.message}</p>
                                <span className="chat__timestamp">{new Date(chat.data?.timestamp?.toDate()).toLocaleDateString()}</span>
                            </div>
                        </div>  
                    ))
                }
            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <form onSubmit={onSubmitMessageHandler}>
                    <input value={inputMessage} onChange={event=> setInputMessage(event.target.value)} placeholder="message" type="text" />
                </form>
                <IconButton>
                    <Mic />
                </IconButton>

            </div>
        </div>
    )
}

export default Chat
