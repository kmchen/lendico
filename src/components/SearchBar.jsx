import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  textField: {
    marginRight: 20,
  },
  heroContent: {
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(8, 0, 6),
  },
}));

function SearchBar({ durationChange, amountChange, getMonthlyInstallment }) {
  const [duration, setDuration] = useState(1);
  const [amount, setAmount] = useState(1);
  const [hasDurationError, setDurationError] = useState(false);
  const [hasAmountError, setAmountError] = useState(false);
  const handleDurationChange = event => {
    const { value: newDuration } = event.target;
    if (newDuration < 1) {
      setDurationError(true);
    } else {
      setDurationError(false);
    }
    setDuration(newDuration);
    durationChange(newDuration);
  };
  const handleAmountChange = event => {
    const { value: newAmount } = event.target;
    if (newAmount < 1) {
      setAmountError(true);
    } else {
      setAmountError(false);
    }
    setAmount(newAmount);
    amountChange(newAmount);
  };
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <div className={classes.root}>
          <TextField
            required
            id="standard-number"
            label={hasAmountError ? 'Amount has to be > 1' : 'Amount'}
            value={amount}
            onChange={handleAmountChange}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            error={hasAmountError}
          />
          <TextField
            required
            id="standard-number"
            label={hasDurationError ? 'Duration has to be > 1' : 'Duration'}
            value={duration}
            onChange={handleDurationChange}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            error={hasDurationError}
          />
          <Button
            disabled={hasAmountError || hasDurationError}
            variant="contained"
            component="span"
            className={classes.button}
            onClick={getMonthlyInstallment}
          >
            OK
          </Button>
        </div>
      </Container>
    </div>
  );
}

SearchBar.propTypes = {
  getMonthlyInstallment: PropTypes.func.isRequired,
  durationChange: PropTypes.func.isRequired,
  amountChange: PropTypes.func.isRequired,
};

export default SearchBar;
