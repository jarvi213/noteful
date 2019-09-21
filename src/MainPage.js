import React from 'react';
import Sidebar from './sidebar/sidebar';
import DetailScreen from './detailScreen/detailScreen'
import './MainPage.css'

class MainPage extends React.Component {
    render(props) {
        return (
            <main className='interactiveScreen'>
                < Sidebar 
                    className='navScreen' 
                    folderProps={this.props.folders}/>
                < DetailScreen
                    noteProps={this.props.notes} />
            </main>
        )
    }
}

export default MainPage;