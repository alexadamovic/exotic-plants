import React from "react";
import PropTypes from "prop-types";

function Plant(props){
  return (
    <React.Fragment>
      <h3>{props.scientific} - {props.common}</h3>
      <p><em>{props.price}</em></p>
      <img src="{props.imageURL}" alt="Picture Not Available" />
      <hr/>
    </React.Fragment>
  );
}

Plant.propTypes = {
  scientific: PropTypes.string.isRequired,
  common: PropTypes.string.isRequired,
  image: PropTypes.string,
  price: PropTypes.number.isRequired
};

export default Plant;