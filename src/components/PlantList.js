import React from "react";
import Plant from "./Plant";
import PropTypes from "prop-types";
import Row from 'react-bootstrap/Row';

function PlantList(props){
  return (
    <React.Fragment>
      <Row>
        {props.plantList.map((plant) =>
            <Plant 
              whenPlantClicked={props.onPlantSelection}
              scientific={plant.scientific}
              common={plant.common}
              imageURL={plant.imageURL}
              price={plant.price}
              quantity={plant.quantity}
              id={plant.id}
              key={plant.id}/>
        )}
      </Row>
    </React.Fragment>
  );
}

PlantList.propTypes = {
  plantList: PropTypes.array,
  onPlantSelection: PropTypes.func
};

export default PlantList;