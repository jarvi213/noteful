import React from 'react';
import './sidebar.css'
import FolderCard from './FolderCard'

class Sidebar extends React.Component {

    render(props) {
        return (
            <nav className="sidebarNav">
            < FolderCard 
                folderPropPass={this.props.folderProps}
             />
            </nav> 
        ) 
    } 
} 

export default Sidebar;