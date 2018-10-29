import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import Header from "../components/header.js";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class DebtPage extends React.Component {
  render() {
    return (
<div>
  <Header />
  <br />
  <br />
  <br />
  <div id="debt">
    <header>
      <Grid container justify="center">
        <Grid item xs={3} >
          <Paper elevation={8} id="debtPaper" className="transparent_paper">
            <h1>Debt</h1>
          </Paper>
        </Grid>
      </Grid>
    </header>

    <section class="about">
        <Grid container justify="flex-left">
          <Grid item xs={6} >
            <Paper elevation={8} id="debtAbout1" className="transparent_paper">
            <h1>What is Debt?
              <br />
              <br />

              <strong>Debt</strong> is when one user owes money to another,
              typically used

              as a method for making larger purchases. Handled
              properly,

              debt can allow you to experience products you otherwise

              could not afford. However, when unmanaged, debt

              can quickly spiral out of control. Luckily, there are

              quick and easy tips to help any user control their

              debts.</h1>
            </Paper>
          </Grid>
        </Grid>
    </section>


    <section class="about2">
        <Grid container justify="flex-left">
          <Grid item xs={6} >
            <Paper elevation={8} id="debtAbout2" className="transparent_paper">
            <h1>The Debt Snowball
            <br />
            <br />
              The <strong>Debt Snowball</strong> organizes multiple debts by
              starting with the smallest balance
              <br />
              <br />
              1. Pay minimums on all your debts.
            <br />
            <br />
              2. Use any leftover money to eliminate the smallest
            <br />
              debt
            <br />
            <br />
              3. After the smallest debt is paid, you repeat this process with the next smallest debt.
            </h1>
          </Paper>
        </Grid>
      </Grid>

    </section>

    <section class="about3">
      <Grid container justify="flex-end">
        <Grid item xs={6} >
          <Paper elevation={8} id="debtAbout3" className="transparent_paper">
              <h1>The Debt Avalanche
              <br />
              <br />
                The <strong>Debt</strong> Avalanche regulates multiple debts

              by starting with the highest interest debt.
             <br />
             <br />
                1. Pay minimums on all your debts
              <br />
              <br />
                2. Use any leftover money to eliminate the debt with the
                highest
              interest
              <br />
              <br />
                3. After the highest interest debt is paid,
                you repeat this process with the next
                highest interest debt.
            </h1>
          </Paper>
        </Grid>
      </Grid>
    </section>

    <section class="about4">
      <Grid container justify="center">
        <Grid item xs={3} >
          <Paper elevation={8} id="debtPaper" className="transparent_paper">
            <h1>Student Loans</h1>
          </Paper>
        </Grid>
      </Grid>
    </section>

     <section class="about5">
        <Grid container justify="flex-left">
          <Grid item xs={6} >
            <Paper elevation={8} id="debtAbout5" className="transparent_paper">
            <h1>The Standard Repayment Plan
            <br />
            <br />
              Students are given a six month grace
              period after college graduation to choose
              a college repayment plan. If you do not
              choose a plan, you are automatically
            assigned to <strong>
                The Standard RepaymentPlan.
              </strong> While this plan requires
              higher monthly payments, it ultimately
              saves money. College loans increase
              exponentionally over time, and can
              build up significantly. Consequently,
               many users pay thousands of dollars
              more than they initially borrowed. By
              requiring more money per month, The
              Standard Repayment Plan pays off college
              loans before they escalate.</h1>
          </Paper>
        </Grid>
      </Grid>
    </section>

    <section class="about6">
        <Grid container justify="center">
          <Grid item xs={6} >
            <Paper elevation={8} id="debtAbout6" className="transparent_paper">
            <h1>The Power of 50
            <br />
            <br />
              <strong>
                The Power of 50 </strong> recommends you pay an extra
                fifty dollars every month in addition to the
                required payment. This method helps eliminate
              debts at a faster yet managable rate, preventing
              future debt from accumulating.</h1>
            </Paper>
          </Grid>
        </Grid>
    </section>

    <section class="about7">
        <Grid container justify="flex-left">
          <Grid item xs={6} >
            <Paper elevation={8} id="debtAbout7" className="transparent_paper">
            <h1>Direct Consolidation Loans
            <br />
            <br />
              If you have multiple student
            loans, try combining all your loans
            into a <strong>
                 Direct Consolidation Loan.
              </strong>
              This financial plan enables you to
              make one monthly payment at the
              same interest rate instead of
            having to organize multiple
            loans.</h1>
          </Paper>
        </Grid>
      </Grid>
    </section>


<section className ="about5">
            <Grid container>
              <Grid item xs={6}>
              <Paper elevation={8} id="paperPara4" className="transparent_paper">
                  <h1>Recommended Sites:
                  <br />
                  <br />
                  <a href="https://bettermoneyhabits.bankofamerica.com/en/saving-budgeting/ways-to-save-money">8 Ways to Better Save Your Money </a>
                  <br />
                  <br />

                  <a href="https://www.independent.co.uk/money/loans-credit/seven-tips-for-dealing-with-debt-1876040.html">Seven tips for dealing with debt</a>
                  </h1>
                </Paper>
              </Grid>
            </Grid>
          </section>
 </div>
</div>
     );
  }
}

export default compose(
  firebaseConnect(props => [{ path: "debt" }]),
  connect((state, props) => ({
    debt: state.firebase.data.debt
  }))
)(DebtPage);
