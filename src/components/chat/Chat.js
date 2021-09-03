import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../utils/firebase'
import firebase from 'firebase'
import './Chat.css'

function Chat() {

    const [inputMessage, setInputMessage] = useState('')
    const [chats, setChats] = useState([])
    const {id} = useParams()

    useEffect(_=>{
        db.collection('groups').doc(id).collection('chats').onSnapshot(snapshot=>{
            setChats(snapshot.docs.map(chat=>({
                id: chat.id,
                data: chat.data()
            })))
        })
    },[])

    const onSubmitMessageHandler = event=>{
        if(inputMessage.trim()){
            db.collection('groups').doc(id).collection('chats').add({
                message: inputMessage,
                author:'rian',
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
        setInputMessage('')
        event.preventDefault()
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src="https://avatars.dicebear.com/api/human/123.svg" />
                <div className="chat__header-info">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
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

            <div className="chat__body">
                {
                    chats.map(chat=>(
                        <div key={chat.id} className={`chat__message-container ${true &&'chat__message-container-receiver'}`}>
                            <div className="chat__message-wrapper">
                                <span className="chat__name">{chat.data.author}</span>
                                <p className="chat__message">{chat.data.message}</p>
                                {/* <span className="chat__timestamp">{chat.data.timestamp.toDate()}</span> */}
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
