import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./App.css";


class Person extends Component {

    constructor(props) {
      super(props);

      this.state = {
        color: this.props.color
      };
}

changeColor = () => {
        this.setState({color: this.props.boxClick(this.props.index)})
    }

  render() {
    return (
        <div className="person">
        <Card>
            <Card.Img bsPrefix="custom-img" src={this.props.img} />
            <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              Description: {this.props.description}<br/>
              Rating: {this.props.rating} <br/>
              Tags: {this.props.tags.map(function(d, idx){
              return (<ul key={idx}>{d}</ul>)})}
              Number of people Who've Tried: {this.props.numTried}
            </Card.Text>
            <Button onClick={this.changeColor} style={{backgroundColor: this.state.color}}>Favorite</Button>
            </Card.Body>
        </Card>
        </div>
    );
  }
}

export default Person;
