import React from 'react';
import './NoteCard.css'

class NoteCard extends React.Component {

render(props) {

    return (
            <div>
                { 
                    this.props.notePropPass.map(note => 
                        { 
                            return (
                                <section className="noteCardSection">
                                <h2 key={note.id}>{note.name}</h2> 
                                <p>{note.content}</p>
                                <button className="deleteButton">Delete note</button>
                            </section> )
                        }
                    ) 
                }
                <button>Add Note</button>
            </div>
        )
    }
}

export default NoteCard;