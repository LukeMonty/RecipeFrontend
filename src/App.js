import React, { Component } from 'react';
import './App.css';
import IngredientsList from './IngredientsList.js';
import Cards from './Cards.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      results : [],
      isLoaded: false,
      filteredResults:[]
    }

    this.search = this.search.bind(this);
  }

  componentDidMount() {

    fetch('http://192.168.1.117:8080/api/recipe')
      .then(res => res.json())
      .then(jsonString => {

          this.setState({
            results: jsonString,
            isLoaded: true,
            filteredResults: jsonString
          });

      });
  }
  search(){
      this.setState({filteredResults: this.state.results.filter((recipe) => {
        if(document.getElementById("searchInput").value !== "" || document.getElementById("searchInput").value !== null){
          return JSON.stringify(recipe).includes(document.getElementById("searchInput").value);
        } else {
          return this.setState({filteredResults: this.state.results});
        }

})});

  }

  render() {

      if(this.state.isLoaded){
          return (
          <div className="App">
            <IngredientsList search={this.search} />
            <Cards cardProps={this.state.filteredResults} />

        </div>
        );
      }
      else {
        return(
          <div className="load">Loading...</div>
        );
      }

  }
}

export default App;
