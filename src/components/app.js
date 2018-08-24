import React, { Component } from 'react';
import TableGrid from './TableGrid/TableGrid.js';
import Filters from './Filters/Filters.js';
import {Grid, Row, Col} from 'react-bootstrap';
import DashboardChart from './DashboardChart/DashboardChart.js';
import './app.scss';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      clicked : false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const clicked = !this.state.clicked;
    this.setState({
      clicked
    })
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Exceptions</h1>
        </header>
        <Grid className="GridApp" fluid={true}>
          <Row className="">
            <Col md={12}>
              <DashboardChart />
            </Col>
          </Row>
          <Row>
            <Col>
              <IconButton color="secondary" className={classes.button} aria-label="Add an alarm" onClick={this.handleClick}>
                <Icon>{this.state.clicked ? 'cancel' : 'menu'}</Icon>
              </IconButton>
            </Col>
          </Row>
          {
            this.state.clicked && 
            <Row className="show-grid">
              <Col md={3}>
                <Filters />
              </Col>
              <Col md={9}>
                <TableGrid />
              </Col>
            </Row> 
          }
          {
            !this.state.clicked && 
            <Row className="show-grid">
              <Col md={12}>
                <TableGrid />
              </Col>
            </Row>
          }
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);