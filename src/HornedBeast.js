import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfClicks: 0
        }

    }
    numberOfClicks = () => {
        this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
        console.log(this.props.index);
        this.props.showModal(this.props.index);
       
    }

    render() {
        return (
            <div className="Horned Beasts">
                <Card style={{ width: '18rem' }}>
                    <Card.Img
                        onClick={this.numberOfClicks}
                        src={this.props.image}
                        alt={this.props.title}
                    />
                    <Card.Body>
                        <Card.Title>{this.props.title} ❤️  = {this.state.numberOfClicks}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                    </Card.Body>
                </Card>
            </div>


        )

    }
}
export default HornedBeast;