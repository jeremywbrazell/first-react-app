import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';


class FormInfo extends React.Component {
  
  render() {
    return (
      <Dropdown onSelect={this.props.handleSubmit}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" eventKey="all" as="button" onClick={this.props.handleInput}>All</Dropdown.Item>
          <Dropdown.Item href="#/action-1" eventKey="1" as="button" onClick={this.props.handleInput}>1</Dropdown.Item>
          <Dropdown.Item href="#/action-1" eventKey="2" as="button" onClick={this.props.handleInput}>2</Dropdown.Item>
          <Dropdown.Item href="#/action-1" eventKey="3" as="button" onClick={this.props.handleInput}>3</Dropdown.Item>
          <Dropdown.Item href="#/action-1" eventKey="100" as="button" onClick={this.props.handleInput}>100</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
export default FormInfo;