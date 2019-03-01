import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import Header from "../components/header.js";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

function PaperSheet(props) {
  const { classes } = props;
}
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});
class SchedulePage extends React.Component {
	render() {
		const styles = theme => ({
			root: {
			    ...theme.mixins.gutters(),
			    paddingTop: theme.spacing.unit * 8,
			    paddingBottom: theme.spacing.unit * 8,
				},
			});
		return (
  		<div>
  			<Header />
          <br />
          <br />
          <br />
  			<div id="budget">
  				<header>
  				  <Grid container justify="center">
  					  <Grid item xs={3} >
    						<Paper elevation={8} id="budgetPaper" className="transparent_paper">
    				      <h1>Spring 2019 Schedule</h1>
    				    </Paper>
  					  </Grid>
  					</Grid>
  				</header>
          <div>
            <h3 id="title1w">SAT I &amp; ACT Courses</h3>
          </div>
          <br />
          <br />
          <br />
          <div>
            <h4 id="title2">[Palisades Park] &amp; [ Closter]</h4>
            <p>
              <img id="pics" src="http://mklassusa.com/academy/wp-content/uploads/2016/08/1.-SAT-ACT.jpg" width="1001" height="775" />
            </p>
            <p>
              <strong>&nbsp; &nbsp; &nbsp; &nbsp; * One-time registration fee($25) and technology fee($25) are applied to all new SAT I/ACT&nbsp; registrants.</strong>
            </p>
            <ul>
              <li id="lists">Our SAT I preparatory courses are divided into two levels: lecture-based <strong><u>‘regular’ classes</u></strong> and <strong><u>‘test prep’ classes</u></strong>.</li>
              <li id="lists">We ensure that efficient teaching methods for all levels will be provided using methodically created material <strong><u>we have carefully assembled and prepared for since the announcement of the new SAT format.</u></strong></li>
              <li id="lists">It is highly recommended that the students enrolled in the previous fall semester continue in the spring.</li>
              <li id="lists"><strong><u>The AMG classes assist students to form proper studying habits through consistent and intensified review processes.</u></strong></li>
              <li id="lists">Students will have unique and incomparable learning experiences through the English classes taught by the top of the line instructors.</li>
              <li id="lists">While limiting the use of the calculator, students will learn mathematical principles and how to apply them to various problems simultaneously.</li>
              <li id="lists"><strong><u>We highly recommend our ACT Prep Course to students who are well trained in the SAT Test to distinguish themselves in a short time.</u></strong></li>
            </ul>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
          <div>
            <h3 id="title1">SAT II Subjects </h3>
            <div>
              <h4 id="title2a">
                <strong>[Palisades Park] – </strong>
                <strong>Whole Semester Courses + Easter Special Session (April) Included</strong>
                <strong>&nbsp;</strong>
              </h4>
              <pre id="text">
                <strong>
                  <img id="pics" src="http://mklassusa.com/academy/wp-content/uploads/2016/08/2.-SAT-II-PP.jpg" width="975" height="581" />
                </strong>
              </pre>
              <h4 id="title2b">
                <strong>[Closter] – </strong>
                <strong>Whole Semester Courses + Easter Special Session (April) Included</strong>
              </h4>
              <p>
                <img id="pics" src="http://mklassusa.com/academy/wp-content/uploads/2016/08/3.-SAT-II-CL.jpg" width="982" height="383" />
              </p>
              <ul>
                <li id="lists">All SAT II classes are intended to prepare students for the tests in May, June 2019.</li>
                <li id="lists">All the SAT II <strong><u>Math IIC, Chemistry, and Biology</u></strong> classes require registration <strong><u>of one full semester to be retaken in the next semester</u></strong>. (Payment of one-time non-refundable tuition is necessary. <strong>$100 of continuous fee</strong> is required for retaking the course.)</li>
                <li id="lists"><strong>Pick up and Ride is available </strong>according to the opening branch for <strong><u>SAT II Physics</u></strong>.</li>
                <li id="lists"><strong><u>SAT II Programs and the schedules above are subject to change with or without notice.</u></strong></li>
                <li id="lists">We offer <strong><u>scholarships</u></strong> of <strong><u>$300 (or $400 Master Klass credit)</u></strong> to students who get <strong><u>800 on their first</u></strong> <strong>SAT II.</strong></li>
                <li id="lists">We offer <strong><u>scholarships</u></strong> of <strong><u>$200 (or $300 Master Klass credit)</u></strong> to students who get <strong><u>over 780 on their first</u></strong> <strong>SAT II.</strong></li>
              </ul>
              <p>&nbsp;</p>
            </div>
          </div>
          <div>
            <h3 id="title1">AP Courses</h3>
          </div>
          <div>
            <p>
              <img id="pics" src="http://mklassusa.com/academy/wp-content/uploads/2016/08/4.-AP-Courses.jpg" width="969" height="223" />
            </p>
            <ul>
              <li id="lists"><strong>Through his extended knowledge and lectures, Brian Kim will ensure to maintain the student</strong>\<strong>’</strong><strong>s GPA and even improve it.</strong></li>
              <li id="lists"><strong>The courses have limited seats.</strong></li>
            </ul>
          </div>
          <br />
          <div>
            <h3 id="title1">BA Medical &amp; Science Chemistry [PP/CL]</h3>
          </div>
          <div>
            <p>
              <img id="pics" src="http://mklassusa.com/academy/wp-content/uploads/2016/08/5.-BA-Programs.jpg" width="971" height="197" />
            </p>
            <ul>
              <li id="lists"><strong>All the courses above are exclusively designed to help students boost their GPA and prepare for the SAT II Chem, instructed by Brian Kim.</strong></li>
              <li id="lists"><strong>The courses have limited seats.</strong></li>
            </ul>
          </div>
          <div>
            <h3 id="title1">Recommended Courses by Grade [PP/CL]</h3>
          </div>
          <br />
          <br />
          <div>
            <p>
              <img id="pics" src="http://mklassusa.com/academy/wp-content/uploads/2016/08/6.-Junior-Programs.jpg" width="969" height="287" />
            </p>
            <ul>
              <li id="lists">These structured classes are designed to provide a solid foundation for the preparation of <strong><u>standardized tests (PARCC)</u></strong> as well as <strong><u>tests administered at school</u></strong>.</li>
            </ul>
        </div>
        <br />
        <br />
        <br />
          <div>
            <h3 id="title1">Private Tutor</h3>
          </div>
          <div>
            <p>
              <img id="pics" src="http://mklassusa.com/academy/wp-content/uploads/2016/08/7.-Misc.jpg" width="1014" height="118" />
            </p>
            <ul>
              <li id="lists"><strong>All programs and the schedules above are subject to change with or without notice. Please contact us before registration.</strong></li>
            </ul>
          </div>
        </div>
      </div>
    );
	}
}

export default withStyles(styles)(SchedulePage);
