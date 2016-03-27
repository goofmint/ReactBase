import React from 'react'
import { Navbar, Nav, ListGroup, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import {Link} from 'react-router'
import {ReactRouterBootstrap, LinkContainer} from 'react-router-bootstrap'

const Menu = React.createClass({
  getInitialState() {
    return null;
    /*
    return {
      message: "loading..."
    };
    */
  },
  componentDidMount() {
    // this.setState({ message: "welcome!" });
  },
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link href="/" to="/">React-Bootstrap</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav activeHref={this.props.path}>
        <LinkContainer href="/about" to="/about">
          <NavItem>About</NavItem>
        </LinkContainer>
        <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
});

/*
<LinkContainer to="/destination/some-params">
</LinkContainer>

*/
module.exports = Menu
