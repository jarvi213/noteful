import React from 'react';
import './detailScreen.css'
import NoteCard from './NoteCard'

class DetailScreen extends React.Component {
    render() {
        return(
            <section className='detailsScreen'>
                < NoteCard 
                    notePropPass={this.props.noteProps} />
            </section>
        )
    }
}

export default DetailScreen;