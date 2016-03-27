import React from 'react'
import Menu from './menu.jsx'

var Page = React.createClass({
  render() {
    console.log("I'm page.");
    const props = this.props.route ? this.props.route : this.props;
    console.log(props)
    return (
      <div>
        <Menu active={['/about']} path={props.path}/>
        <p>Test</p>
      </div>
    );
  }
});

module.exports = Page
