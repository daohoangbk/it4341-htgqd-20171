import React from 'react';
import Menu, { MenuItem } from 'material-ui/Menu';
import { Button} from 'material-ui'
import {AccountCircle} from 'material-ui-icons'
import {NavLink} from "react-router-dom"

class ProfileMenu extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = event => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button fab color="primary" style={{size: 5, marginLeft: 10}} onClick={this.handleClick}>
          <AccountCircle />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <MenuItem onClick={this.handleRequestClose}><NavLink to="/profile">Profile</NavLink></MenuItem>
          <MenuItem onClick={this.handleRequestClose}>My account</MenuItem>
          <MenuItem onClick={this.handleRequestClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default ProfileMenu;
