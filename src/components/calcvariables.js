import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
class CalcVar extends React.Component{
constructor(props){

  super(props);
  this.state={

  }
}





}

export default compose(
    firebaseConnect(),
    connect(({firebase: {auth}}) => ({auth})),connect(({firebase: {profile}}) => ({profile}))
)(CalcVar);
