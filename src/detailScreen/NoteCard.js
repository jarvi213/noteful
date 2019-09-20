import React from 'react';
import './NoteCard.css'

class NoteCard extends React.Component {
    render() {
        return(
            <section className="noteCardSection">
            <h2>Note title</h2>
            <p>Here's where the details will be!</p>
            <button className="deleteButton">Delete note</button>
            </section>
        )
    }
}

export default NoteCard;