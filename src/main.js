import React from 'react';
import HornedBeast from './HornedBeast';
import './style.css';

class Main extends React.Component {
    render() {
        return (
            <HornedBeast
                title='Fred'
                src='./dog2.jpg'
                description='This is a scary beast.'
            />
        )
    }
}

export default Main;