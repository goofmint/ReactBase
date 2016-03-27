import React from 'react'
import Menu from './menu.jsx'
import { Grid, Row, Col } from 'react-bootstrap';

const App = React.createClass({
  getInitialState() {
    return {
      message: "loading..."
    };
  },
  componentDidMount() {
    this.setState({ message: "welcome!" });
  },
  render() {
    /*
    const data = this.props.route ? this.props.route.data : this.props.data;
    var list = data.map(obj => <li key={obj.id}>{obj.id}:{obj.name}</li>);
    // var list = this.props.data.map(obj => <li key={obj.id}>{obj.id}:{obj.name}</li>);
    */
    return (
      <div>
        <Menu />
        <Grid fluid={true}>
          <Row>
            <Col xs={12} md={8}>
              <p>I'm Home</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

module.exports = App
