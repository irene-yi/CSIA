import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

class Calc_Nav extends React.Component {
	constructor(props) {
    super(props);
  }
  render(){
		return(
			<div class="linecss" id="calcs">
        <Link to="/calc_one">
          <button class="buttonCss1">1</button>
        </Link>
        <Link to="/calc_two">
          <button class="buttonCss">2</button>
        </Link>
        <Link to="/calc_three">
          <button class="buttonCss">3</button>
        </Link>
        <Link to="/calc_four">
          <button class="buttonCss">4</button>
        </Link>
        <Link to="/calc_five">
          <button class="buttonCss">5</button>
        </Link>
     </div>
		);
	}
}
export default compose(
    firebaseConnect(),
    connect(({firebase: {auth}}) => ({auth}))
)(Calc_Nav);
