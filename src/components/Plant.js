import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Plant(props){

  const plantCardStyles = {
    backgroundColor: '#dff0ea',
    width: '18rem',
    border: 'solid 1px'
  }

  return (
    <React.Fragment>
      <Col>
        <div onClick = {() => props.whenPlantClicked(props.id)}>
          <Card style={plantCardStyles}>
            <Card.Img variant="top" src={props.imageURL} />
            <Card.Body>
              <Card.Title>{props.scientific}</Card.Title>
              <Card.Text>
                <p>{props.common}</p>
                <p><em>${props.price}</em></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>  
      </Col>
    </React.Fragment>
  );
}

Plant.propTypes = {
  scientific: PropTypes.string.isRequired,
  common: PropTypes.string.isRequired,
  image: PropTypes.string,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  whenPlantClicked: PropTypes.func
};

export default Plant;