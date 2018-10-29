import React from "react";
import calcTwoPage from "../styles/calc_two.js";
import calcThreePage from "../styles/calc_three.js";
import Chart from "react-google-charts";

   const pieOptions = {
    title: 'My Daily Activities',
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
    paddingTop:0
  },
  backgroundColor: '#d7e1e5',
      is3D: true,
};


class graphSetting extends React.Component {

  render(){
  	return(
  	  <calcTwoPage pieOptions={pieOptions}/>
  	  <calcThreePage pieOptions={pieOptions}/>
      <ResultsPage pieOptions={pieOptions}/>
    )
  }
}