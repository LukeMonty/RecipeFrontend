import React, {Component} from 'react';
import './Menu.css'
class List extends Component {
  constructor(props) {
    super(props);
    this.createList = this.createList.bind(this);
  }

  createList(item) {
    return <li className="list" onClick={ () => this.delete(item.key) } key={item.key} >{item.text}</li>
  }
  delete(key){
    this.props.delete(key);
  }

  render(){

    let entries = this.props.ingredient;
    let listItems = entries.map(this.createList);
    return(
      <ul id="listOfIngredients">{listItems}</ul>
    );
  }
}
export default List;
