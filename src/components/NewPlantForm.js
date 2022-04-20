import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewPlantForm(props){
  return (
    <React.Fragment>
      <form onSubmit={handleNewPlantFormSubmission}>
        <input
          type='text'
          name='scientific'
          placeholder='Scientific Name' />
        <input
          type='text'
          name='common'
          placeholder='Common Name' />
        <input
          type='text'
          name='imageURL'
          placeholder='Link to Image' />
        <input
          type='number'
          name='price'
          step='.01'
          placeholder='Price' />
        <input
          type='number'
          name='quantity'
          placeholder='Quantity Available' />  
        <button type='submit'>Add Plant</button>
      </form>
    </React.Fragment>
  );

  function handleNewPlantFormSubmission(event) {
    event.preventDefault();
    props.onNewPlantCreation({scientific: event.target.scientific.value, common: event.target.common.value, imageURL: event.target.imageURL.value, price: event.target.price.value, quantity: event.target.quantity.value, id: v4()});
  }
}

NewPlantForm.propTypes = {
  onNewPlantCreation: PropTypes.func
};

export default NewPlantForm;