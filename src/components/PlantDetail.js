import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function PlantDetail(props){
  const { plant } = props;

  const plantCardStyles = {
    backgroundColor: '#dff0ea',
    width: '18rem',
    border: 'solid 1px'
  }

  return (
    <React.Fragment>
      <h1>Plant Detail</h1>
      <Col>
        <Card style={plantCardStyles}>
          <Card.Img variant="top" src={plant.imageURL} />
          <Card.Body>
            <Card.Title>{plant.scientific}</Card.Title>
            <Card.Text>
              <p>{plant.common}</p>
              <p><em>${plant.price}</em></p>
              <p><em>Quantity: {plant.quantity}</em></p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
}

PlantDetail.propTypes = {
  plant: PropTypes.object
}

export default PlantDetail;