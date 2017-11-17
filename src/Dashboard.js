import React from 'react';
import Pet from './components/pet';
import * as actions from './actions.js';
import { connect } from 'react-redux';

export class DashBoard extends React.Component {

  componentDidMount() {
    this.props.dispatch(actions.fetchCat())
    this.props.dispatch(actions.fetchDog())
  }

  render() {

    return (
      <div>
        <Pet pet={this.props.cat} species="cat"/>
        <Pet pet={this.props.dog} species="dog"/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
  cat: state.cat,
  dog: state.dog
  }
}

export default connect(mapStateToProps)(DashBoard);
