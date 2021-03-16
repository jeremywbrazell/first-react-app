import React from 'react';

class HornedBeast extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render() {
        return(
            <div id='Horned Beast'>
            <h2>{this.props.title}</h2>
            <img alt = {this.props.alt} src={this.props.src}></img>
            <p>{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeast;