import React from 'react';
import HornedBeast from './HornedBeast';
import './style.css';
import Data from './beastData.json';

class Main extends React.Component {
    
    render() {
        return (
            <div>
                <ul>
                    {Data.map((item) =>{
                        return (
                        <>
                        <li keyword={item.title}>{item.image_url}
                        {item.description}</li>
                        < />
                    )
                    })
                }
                </ul>
            </div>
        )


    }
}


export default Main;