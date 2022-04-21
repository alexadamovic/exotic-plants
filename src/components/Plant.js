import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';

function Plant(props){
  return (
    <React.Fragment>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imageURL} />
        <Card.Body>
          <Card.Title>{props.scientific}</Card.Title>
          <Card.Text>
            <p>{props.common}</p>
            <p><em>${props.price}</em></p>
            <p><em>Quantity: {props.quantity}</em></p>
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

Plant.propTypes = {
  scientific: PropTypes.string.isRequired,
  common: PropTypes.string.isRequired,
  image: PropTypes.string,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
};

export default Plant;