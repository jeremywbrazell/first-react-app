import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


class FormInfo extends React.Component{
  render () {
    return(
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>How Many Horns Do You Prefer?</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </Form>
    )
  }
}
export default FormInfo;