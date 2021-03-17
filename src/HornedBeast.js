import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numberOfClicks: 0
        }
    
    }
    numberOfClicks = () => {
        this.setState({numberOfClicks: this.state.numberOfClicks + 1});
    }
    render() {
        return(
            <div className="Horned Beasts">
            <Card style={{ width: '18rem' }}>
                <Card.Img src={this.props.image} alt = {this.props.title} onClick = {this.numberOfClicks}/>
                <Card.Body>
                    <Card.Title>{this.props.title} ❤️  = {this.state.numberOfClicks}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                </Card.Body>
            </Card>
            </div>

        //     <div id='Horned Beast'>
        //     <h2>{this.props.title}</h2>
        //     <img onClick = {this.numberOfClicks} alt = {this.props.title} src={this.props.image}>
        //     </img>
        //     <p>{this.props.description}</p>
            
        //     </div>
        )
        
    }
}       
export default HornedBeast;