import React from 'react';
import NewPlantForm from './NewPlantForm';
import PlantList from './PlantList';
import PlantDetail from './PlantDetail';

class PlantControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPlantList: [],
      selectedPlant: null
    };
  }

  handleClick = () => {
    if (this.state.selectedPlant != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPlant: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewPlantToList = (newPlant) => {
    const newMainPlantList = this.state.mainPlantList.concat(newPlant);
    this.setState({mainPlantList: newMainPlantList, formVisibleOnPage: false });
  }

  handleChangingSelectedPlant = (id) => {
    const selectedPlant = this.state.mainPlantList.filter(plant => plant.id === id)[0];
    this.setState({selectedPlant: selectedPlant});
  }

  handleDeletingPlant = (id) => {
    const newMainPlantList = this.state.mainPlantList.filter(ticket => ticket.id !== id);
    this.setState({mainPlantList: newMainPlantList, selectedPlant: null});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedPlant != null) {
      currentlyVisibleState = <PlantDetail plant = {this.state.selectedPlant} />
      buttonText = "Return to Plant List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPlantForm onNewPlantCreation = {this.handleAddingNewPlantToList}/>
      buttonText = "Return to Plant List";
    } else {
      currentlyVisibleState = 
      <PlantList plantList = {this.state.mainPlantList}
        onPlantSelection = {this.handleChangingSelectedPlant} />
      buttonText = "Add Plant";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default PlantControl;