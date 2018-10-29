import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle,  CardDeck } from 'reactstrap';

class portfolioCard extends Component {

  render(){
  return (
    <div>
      <CardDeck>
      <Card>
        <CardImg top width="100%"  src={`${this.props.workCards.img}`} alt="Card image cap" /> 
        <CardBody>
          <CardTitle style={{textAlign:'center'}}>{this.props.workCards.name}</CardTitle>  
        </CardBody>
      </Card>
      </CardDeck>
    </div>
  );
};
}

export default portfolioCard;


//{`${this.props.workCards.img}`}