import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Menu.css';
import List from './List.js';
class IngredientsList extends Component {

  constructor(props){
    super(props);
    this.state = {
      ingredients: []
    }
    this.addToList = this.addToList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }



  addToList(e)  {
    e.preventDefault();
    

  }

  deleteItem(key) {

    let filteredIngredients = this.state.ingredients.filter(function (ingredient){
      return (ingredient.key !== key);
    });
    this.setState({ ingredients: filteredIngredients });
  }

  render() {

    return (
      <Menu >

        <form onSubmit={this.addToList}>
          <input id="searchInput" onChange={this.props.search} className="search" type="text" ref={(a) => this.inputElement = a} />
        </form>

        <List ingredient={this.state.ingredients} delete={this.deleteItem}/>



      </Menu>
    );
  }

}
export default IngredientsList;
