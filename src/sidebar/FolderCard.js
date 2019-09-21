import React from 'react';
import './FolderCard.css';

 class FolderCard extends React.Component {
  
  render(props) {
    console.log(this.props)
    return (
      
      <section className='Folder'>
        { this.props.folderPropPass.map(folder => { return <h2 className="folderLink" key={folder.id}>
        {folder.name}</h2> 
            }) 
        }
        <button>Add Folder</button>
      </section>
    )
  }
} 

export default FolderCard;