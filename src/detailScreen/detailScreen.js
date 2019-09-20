import React from 'react';
import './detailScreen.css'
import NoteCard from './NoteCard'

class DetailScreen extends React.Component {
    render() {
        return(
            <section className='detailsScreen'>
                < NoteCard />
            </section>
        )
    }
}

export default DetailScreen;