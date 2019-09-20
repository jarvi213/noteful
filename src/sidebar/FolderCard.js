import React from 'react';
import DUMMYSTORE from './dummyStore.js';

 /* class FolderCard extends React.Component {
  render() {
    return (
      <section className='Folder'>
        <h2>Folder Name</h2>
        <button>Add Folder</button>
      </section>
    )
  }
} */

export default function FolderCard(props) {
  const folderName = DUMMYSTORE.find(p =>
    p.id === props.match.params.FolderNameId
  )
  return (
    <section className='Folder'>
      <h2>{folderName.name}</h2>
    </section>
  )
}