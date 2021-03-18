import React from 'react';
import HornedBeast from './HornedBeast';
import './style.css';
import CardDeck from 'react-bootstrap/CardDeck';

class Main extends React.Component {

    render() {
        return (
            <>

                <CardDeck>
                    {this.props.cards.map((item, index) =>
                        <div key={index}>
                            <HornedBeast
                                title={item.title}
                                image={item.image_url}
                                description={item.description}
                                showModal={this.props.showModal}
                                index={index}
                            />
                        </div>
                    )}
                </CardDeck>

            </>
        )

    }

}
export default Main;