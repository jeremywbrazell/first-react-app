import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfClicks: 0
        };
    }
    numberOfClicks = () => {
        this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
        // console.log(this.props.index);
        // this.props.showModal(this.props.index);

    };

    enLargePhoto = () => {
        this.props.showModal(this.props.index);
    };

    render() {
        console.log(this.props);
        return (
            <div>
                <Card className="card" bg="primary" text="white" border="primary" style={{ width: '18rem' }}>
                    <Card.Img src={this.props.src} onClick={this.enLargePhoto}/>
                    <Card.Body onClick={this.numberOfClicks}>
                        <Card.Title>{this.props.title} {this.state.numberOfClicks}</Card.Title>
                        <Card.Text>
                            ❤️  =  {this.state.numberOfClicks}
                        </Card.Text>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            Number of Horns: {this.props.horns}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default HornedBeast;