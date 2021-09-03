import { Avatar, IconButton } from '@material-ui/core'
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { StateContext } from '../../provider/StateProvider'
import { db } from '../../utils/firebase'
import SidebarChat from '../sidebarChat/SidebarChat'
import './Sidebar.css'

function Sidebar() {

    const [groupChat, setGroupChat] = useState([])
    const [{user}, dispatch] = useContext(StateContext)
  
    useEffect(()=>{
        const unsubscribe = db.collection('groups').onSnapshot(snapshot=>{
            setGroupChat(snapshot.docs.map(group=>({
                id: group.id,
                data:group.data()
            })))
        })

        return ()=>{
            unsubscribe()
        }
    },[])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user.photoURL} />
                <div className="sidebar__header-right">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__search-container">
                    <SearchOutlined className="sidebar__search-icon" />
                    <form>
                        <input placeholder="Search group" type="text" />
                    </form>
                </div>
            </div>

            <div className="sidebar__chat">
                <SidebarChat addNewChat={true} />
                {
                    groupChat.map(group=>(
                        <Link key={group.id} to={`/groups/${group.id}`}>
                            <SidebarChat name={group.data.name} idGroup={group.id} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar
