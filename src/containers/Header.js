import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Toolbar, AppBar, IconButton} from 'material-ui';
import { Menu, Home} from 'material-ui-icons';

class Header extends Component {
  render() {
    return (

        <AppBar position="static">
          <Toolbar>
            <IconButton>
              <Menu />
            </IconButton>
            <NavLink to="/" style={{marginRight: 10}}>
              <Home/>
            </NavLink>
            <span style={{flex: 1}}></span>

          </Toolbar>
        </AppBar>

    );
  }
}

export default Header;
