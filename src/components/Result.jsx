import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function Result({ monthlyInstallment }) {
  const classes = useStyles();
  const result = `Monthly Installment: ${monthlyInstallment}`;
  return (
    <Container className={classes.cardGrid} maxWidth="sm">
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography>{result}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

/* eslint-disable react/forbid-prop-types */
Result.propTypes = {
  monthlyInstallment: PropTypes.string.isRequired,
};
