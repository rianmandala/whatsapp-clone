import { Avatar, IconButton } from '@material-ui/core'
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons'
import React from 'react'
import SidebarChat from '../sidebarChat/SidebarChat'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
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
                <SidebarChat addNewChat={false} />
                <SidebarChat addNewChat={false} />
            </div>
        </div>
    )
}

export default Sidebar
