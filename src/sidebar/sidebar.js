import React from 'react';
import './sidebar.css'
import FolderCard from './FolderCard'

class Sidebar extends React.Component {
    render() {
        return (
            <nav className="sidebarNav">
            < FolderCard />
            </nav>
        )
    }
}

export default Sidebar;