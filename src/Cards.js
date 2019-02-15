import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import './Card.css';
import AlertBox from './AlertBox.js';

class Cards extends Component {

  render() {


    let output = this.props.cardProps.map((recipe) => {


      return(
        <Card key={recipe.key}>
          <Card.Img variant="top" src={recipe.pictureLink} />
          <Card.Body>
            <Card.Title>{recipe.title}</Card.Title>
            <AlertBox recipeData={recipe} handleHide={(key) => this.handleHide(key)}  />

          </Card.Body>
        </Card>
      );
    });


    return (
      <CardColumns>

          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous"/>
          {output}

      </CardColumns>
    );
  }
}

export default Cards;
