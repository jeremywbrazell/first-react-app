import React from 'react';

class HornedBeast extends React.Component {

    render() {
        return(
            <div id='Horned Beast'>
            <h2>{this.props.title}</h2>
            <img src={this.props.src}></img>
            <p>{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeast;