import React from 'react';
import HornedBeast from './HornedBeast';
import './style.css';
import CardDeck from 'react-bootstrap/CardDeck';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <CardDeck>
                    {this.props.cards.map((item, index) =>
                        <div key={index}>
                            <HornedBeast
                                index={index}
                                src={item.image_url}
                                description={item.description}
                                keyword={item.keyword}
                                horns={item.horns}
                                showModal={() => this.props.showModal(index)}
                            />
                        </div>
                    )}
                </CardDeck>
            </div>
            );
    }
}

export default Main;