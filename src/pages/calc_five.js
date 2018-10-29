import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Header from "../components/header.js";
import Chart from "react-google-charts";

const pieOptions = {
  slices: [
    {
      color: "#2c3646"
    },
    {
      color: "#7c8491"
    },
    {
      color: "#102D4A"
    },
    {
      color: "#1365A5"
    },
    {
      color: "#181156"
    },
    {
      color: "#1B9CB0"
    },
    {
      color: "#9F8AD2"
    },
    {
      color: "#D6DBDF"
    },
    {
      color: "#EBEDEF"
    }
  ],
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "#233238",
      fontSize: 14
    }
  },
  tooltip: {
    showColorCode: true
  },
  chartArea: {
    left: 0,
    top: 0,
    width: "100%",
    height: "80%",
  },
  backgroundColor: '#d7e1e5',
      is3D: true,
};

class CalcFivePage extends React.Component{
  constructor(props){
	  super(props);
	  this.state = {
	    Monthly_Salary: '$',
	  }
  }

  handleChange(event, field){
	  this.setState({
	    [field]: event.target.value
	  });
  }

  handleSubmit(event){
	  event.preventDefault();
	  this.props.firebase.update('calc_five', this.state)
	  .then((response) => {
  		this.setState({
  		  Monthly_Salary: '$',
  		});
	  })
	  .catch((error) => {
		  switch(error.code){
			  default:
		  }
	  });
  }


  render(){
	  let payload;
	  if(!isLoaded(this.props.calc_five)){
	    payload = null;
	  }
  	if(isLoaded(this.props.calc_five) && !isEmpty(this.props.calc_five)){
  	  payload = Object.keys(this.props.calc_five).map((key) => {
  		  let calc_five = this.props.calc_five[key];
  		  //return <li key={key}>
      		//<strong>{calc_five.salary}</strong>
          //<b>{calc_five.ingredients}</b><br />
      	  //<i>{calc_five.reason}</i>
    	  //</li>
  	  });
  	}
  

            
    if(!isLoaded(this.props.profile)){
  // not ready to be ready
  //LOADING PAGE
}

if(isLoaded(this.props.profile) && isEmpty(this.props.profile)){
  // assume user is not logged in
  //MESSAGE THAT SAYS USER MUST LOG IN TO SEE CALCULATOR
}
/////////////////////


var charteducation=[["Education", "Cost"]];
if(isLoaded(this.props.profile) && !isEmpty(this.props.profile)){

/* && typeof this.props.profile.calc_one !== "undefined" && typeof this.props.profile.calc_two !== "undefined" && typeof this.props.profile.calc_three !== "undefined" && typeof this.props.profile.calc_four !== "undefined"){*/
    var totalEducation = this.props.profile.calc_one.Monthly_Salary;
for (var i=0; i <this.props.profile.calc_two.length; i++){
      charteducation.push([this.props.profile.calc_two[i].Name,this.props.profile.calc_two[i].Cost])
      totalEducation -= this.props.profile.calc_two[i].Cost;

    }
    for (var i=0; i<this.props.profile.calc_three.length; i++){
      charteducation.push([this.props.profile.calc_three[i].Name,this.props.profile.calc_three[i].Cost])
      totalEducation -= this.props.profile.calc_three[i].Cost;
    }
    charteducation.push(["Remaining Income",totalEducation]);
      payload = <div>

     <button class="numCss">
                {this.props.profile.name}'s Monthly Salary: {this.props.profile.calc_one.Monthly_Salary}
        </button>

                <button class="numCss1">

                  {this.props.profile.name}'s Remaining Income: {totalEducation}
          </button>
          </div>
        }


/*
        */

  	return(
  	  <div>
          <br />
        <Header></Header>
          <br />
    			<br />
          <br />
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
          <button class="buttonCss1">5</button>
          </Link>
              </div>

<br />
<br />
 <br />
              
    <form onSubmit={(event) => {this.handleSubmit(event);}}>
      <font size="20">  Review
        Your Budget </font>
                <br />
                  <br />
        
    {payload}
    <div className="CalcThreePage">
        <Chart
          style={{display: isLoaded(this.props.profile) && !isEmpty(this.props.profile) ? 'block' : 'none'}}
          chartType="PieChart"
          graph_id="PieChart"
          options={pieOptions}
          data={charteducation}
          width={"100%"}
          height={"400px"}
        />

      </div>


          <br />
         
        
<Link to="/calc_four"><Button type="submit"
            variant="contained"
            color="primary">
    Back          </Button></Link>
  		    <Link to="results"><Button type="submit"
    				variant="contained"
    				color="primary">
            Next Page
    		  </Button></Link>
  		  </form>
        <br />
        <br />

        {/* <ul>
    		{payload}
    		</ul> */}
  	  </div>
  	)
  }
}

export default compose(
  firebaseConnect((props) => [
    { path: 'calc_five' }
  ]),
  connect((state, props) => ({
    calc_five: state.firebase.data.calc_five
  })),
    connect(({firebase: {profile}}) => ({profile})),
      connect(({firebase: {auth}}) => ({auth}))
)(CalcFivePage)
