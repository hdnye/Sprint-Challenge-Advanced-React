import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const PlayerCard = props => {
    return (
      <div>
        {/* {this.state.players.filter(player => {
          return ( */}
           <Card body inverse style={{ backgroundColor: '#0000', borderColor: '#333'}} key={props.id}>
          <CardTitle>Player: {props.name}</CardTitle>
           <CardText>Country: {props.country}</CardText>
           <CardText>Number of Times Searched For: {props.searches}
          </CardText>
          
        </Card> 
        {/* ); */}
      {/* })};  */}
     </div>
    );
  };


export default PlayerCard;