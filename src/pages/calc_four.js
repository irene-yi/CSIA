import {Redirect} from 'react-router';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Header from "../components/header.js";
import React from 'react';
import Priorities from "./Priorities.js";

class CalcFourPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        topThree:[],
        done: false
  }
}

  handleChange(event, field){
    this.setState({
      [field]: event.target.value
    });
  }

  navigateAway(event) {
    event.preventDefault();
    let uid = this.props.auth.uid;
    this.props.firebase.update(`/users/${uid}/calc_four`, this.state.topThree)
    .then((response) => {
        this.setState({
          done: true
        });
      })
  }

  priorPage(newArray){
    for(let i=0;i<3;i++){
      this.state.topThree[i] = newArray[i];
    }
  }

  render(){
    let payload;
    if(!isLoaded(this.props.calc_four)){
      payload = null;
    }
    if(isLoaded(this.props.calc_four) && !isEmpty(this.props.calc_four)){
      payload = Object.keys(this.props.calc_four).map((key) => {
        let calc_four = this.props.calc_four[key];
      });
    }

    if(this.state.done){
      return(<Redirect to='calc_five' />);
    }

  return(
      <div>
        <Header />
          <br />
          <br />
          <br />
          <br />
        <form onSubmit={event => {this.navigateAway(event);}}>

          <div class="linecss" id="calcs">
          <Link to="/calc_one">
          <button class="buttonCss1">1</button>
          </Link>

          <Link to="/calc_two">
          <button class="buttonCss1">2</button>
          </Link>

          <Link to="/calc_three">
          <button class="buttonCss1">3</button>
          </Link>

          <Link to="/calc_four">
          <button class="buttonCss1">4</button>
          </Link>

          <Link to="/calc_five">
          <button class="buttonCss">5</button>
          </Link>
          </div>
            <br />                     
            <br />
            <br />
         <font size="20" color="#2c3646"> Order Your Priorities </font>
         <br />
         <br />
         <br />

            <Priorities callBack={(newArray) => {this.priorPage(newArray);}}/>
          
          <br />
          <br/>

      
          <Link to="/calc_three">
            <Button
              variant="contained"
              color="primary">
                Back
            </Button>
          </Link>

          <Button 
            type="submit"
            variant="contained"
            color="primary">
            Next
          </Button>
        </form>
        <br />
        <br />
      </div>
    )
  }
}



export default compose(
  firebaseConnect(props => [{ path: "calc_four" }]),
  connect(({firebase: {auth}}) => ({auth})),
  connect((state, props) => ({
    calc_four: state.firebase.data.calc_four
  })),
  connect(({firebase: {profile}}) => ({profile}))
)(CalcFourPage)
