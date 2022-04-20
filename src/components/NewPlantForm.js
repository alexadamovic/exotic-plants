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
          placeholder='Price' />
        <button type='submit'>Add Plant</button>
      </form>
    </React.Fragment>
  );

  function handleNewPlantFormSubmission(event) {
    event.preventDefault();
    props.onNewPlantCreation({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4()});
  }
}

NewPlantForm.propTypes = {
  onNewPlantCreation: PropTypes.func
};

export default NewPlantForm;