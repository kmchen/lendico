import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Result from './components/Result';
import {MONTHLY_INSTALLMENT_REQUEST, SET_DURATION, SET_AMOUNT} from './actions/actions';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export function AppComponent(props) {
  const classes = useStyles();
  const { dispatch, monthlyInstallment, amount, duration } = props;
  const getMonthlyInstallment = () => {
    dispatch({ type: MONTHLY_INSTALLMENT_REQUEST, payload: {amount, duration} });
  };
  const durationChange = duration => {
    dispatch({ type: SET_DURATION, payload: duration });
  };
  const amountChange = amount => {
    dispatch({ type: SET_AMOUNT, payload: amount });
  };
  const searchBarProps = {getMonthlyInstallment, durationChange, amountChange };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main>
        <SearchBar {...searchBarProps} />
        <Result monthlyInstallment={monthlyInstallment}/>
      </main>
      <Footer />
    </div>
  );
}

function mapStateToProps(state) {
  const { duration, amount, monthlyInstallment } = state;
  return { duration, amount, monthlyInstallment };
}


/* eslint-disable react/forbid-prop-types */
AppComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  monthlyInstallment: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

export const App = connect(mapStateToProps)(AppComponent);
