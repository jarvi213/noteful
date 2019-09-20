import React from 'react';
import Sidebar from './sidebar/sidebar';
import DetailScreen from './detailScreen/detailScreen'
import './MainPage.css'

class MainPage extends React.Component {
    render() {
        return (
            <main className='interactiveScreen'>
                < Sidebar className='navScreen' />
                < DetailScreen />
            </main>
        )
    }
}

export default MainPage;