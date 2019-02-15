import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
class AlertBox extends Component {
  constructor(props) {
    super(props);

    this.state = {show:false}

    this.handleHide = this.handleHide.bind(this);
    this.handleShow = this.handleShow.bind(this);


  }
  handleHide(){

    this.setState({show:false});
  }
  handleShow(){
    this.setState({show:true});
  }

  render(){
    let ingre;
    try{
      ingre = this.props.recipeData.ingredients.map((ing) => {
        return(
          <li key={ing} >{ing}</li>
        );
      });
    } catch {

    }



    return(
      <div>

      <Alert show={this.state.show} variant="light">
      <button onClick={() => this.handleHide()}>Hide</button>
        <Alert.Heading>Ingredients:</Alert.Heading>
        <ul>{ingre}</ul>
        <hr />
        <Alert.Heading>Instructions</Alert.Heading>
        <p>{this.props.recipeData.instructions}</p>
        <div className="d-flex justify-content-end">
          <button onClick={() => this.handleHide()}>Hide</button>
        </div>
      </Alert>
      {!this.state.show && <button onClick={() => this.handleShow()} >More Info</button>}
      </div>
    );

  }
}
export default AlertBox;
