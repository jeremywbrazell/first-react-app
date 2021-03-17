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
                        <HornedBeast
                        title={item.title}
                        image={item.image_url}
                        description={item.description}
                        />
                    )
                    })
                }
                </ul>
            </div>
        )

    }
   
}


export default Main;