import React, { Component } from "react";
import {Button, Navbar, NavDropdown} from "react-bootstrap";
import "./App.css";

// Header is the top bar containing all the buttons and the text
// of the equality vote search
class Header extends Component {
    constructor(props) {
      super(props);

      this.state = {
        us_state_color: "",
        fav_color: ""
      };
}

// changes the color of the state button on click
usStateChange = () => {
      if (this.state.us_state_color === "") {
          this.setState({us_state_color: "#23395d"})
      } else {
          this.setState({us_state_color: ""})
      }
      this.props.sortByState();
}

// changes the color of the fav button on click
favButton = () => {
    if (this.state.fav_color === "") {
        this.setState({fav_color: "#23395d"})
    } else {
        this.setState({fav_color: ""})
    }
    this.props.onClickFav();
}

render() {
    return (
        <div className="header">
        <h1>BucketList</h1>
        <p>Bucket list is a social network to find cool activities around your college.<br/><br/>
        Don't miss out on your friends!</p>
        
        {/* drop down item allows choices of sort and filters */}
        <Navbar bg="light" expand="lg">
        <NavDropdown title={this.props.party} id="dropdown-basic-button">
          <NavDropdown.Item eventKey="Party" onSelect={this.props.onSelectFilterTypeParty}>
            Party
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="Democrat" onSelect={this.props.onSelectFilterTypeParty}>
          Democrat
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="Republican" onSelect={this.props.onSelectFilterTypeParty}>
          Republican
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title={this.props.vote} id="dropdown-basic-button">
          <NavDropdown.Item eventKey= "Vote" onSelect={this.props.onSelectFilterTypeVote}>
            Vote
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="Yes" onSelect={this.props.onSelectFilterTypeVote}>
          Yes
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="No" onSelect={this.props.onSelectFilterTypeVote}>
          No
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="Abstained" onSelect={this.props.onSelectFilterTypeVote}>
          Abstained
          </NavDropdown.Item>
        </NavDropdown>

        <Button onClick={this.usStateChange} style={{backgroundColor: this.state.us_state_color}}>Sort by US State (A-Z)</Button>
        <Button onClick={this.favButton} style={{backgroundColor: this.state.fav_color}}>Favorite List</Button>
        </Navbar>

        </div>
    );
  }
}

export default Header;
