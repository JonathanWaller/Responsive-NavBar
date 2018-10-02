import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      initialClass: "nav_dropdown"
    };
  }

  handleToggle = () => {
    this.setState({ initialClass: "nav_dropdown_show" });
  };

  render() {
    return (
      <div>
        <nav className="nav">
          <div className="nav_left">
            <img
              className="nav_logo"
              src="https://theultralinx.com/.image/t_share/MTI5MDI0NzQ4NTQwNjY4NTQ3/owlpod-microphone.jpg"
            />
          </div>
          <div className="nav_right">
            <img
              src="https://www.sumydesigns.com/wp-content/uploads/2015/08/hamb.png"
              className="nav_burger"
              onClick={this.handleToggle}
            />
            <a className="nav_links">Home</a>
            <a className="nav_links">About</a>
            <a className="nav_links">Contact</a>
            <a className="nav_links">Location</a>
          </div>
        </nav>
        {/* <div className="nav_dropdown"> */}
        <div className={this.state.initialClass}>
          <a className="dropdown_links">Home</a>
          <a className="dropdown_links">About</a>
          <a className="dropdown_links">Contact</a>
          <a className="dropdown_links">Location</a>
        </div>
      </div>
    );
  }
}

export default NavBar;
