import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addChoiceToChats,
  setCurrentId,
  getWeatherData,
} from '../../actions/chatActions';

const useStyles = makeStyles(() => ({
  button: {
    borderRadius: 0,
    padding: '8px 16px',
  },
}));

const Choice = ({
  content,
  nextId,
  addChoiceToChats,
  setCurrentId,
  getWeatherData,
}) => {
  const classes = useStyles();

  const showNextDataSet = (content, nextId) => {
    // 天気予報の選択肢が押された場合
    if (nextId === 4) {
      getWeatherData(content);
    }

    addChoiceToChats(content);
    setCurrentId(nextId);
  };

  return (
    <Button
      onClick={() => showNextDataSet(content, nextId)}
      variant='contained'
      fullWidth
      className={classes.button}
    >
      ・{content}
    </Button>
  );
};

Choice.propTypes = {
  addChoiceToChats: PropTypes.func.isRequired,
  setCurrentId: PropTypes.func.isRequired,
  getWeatherData: PropTypes.func.isRequired,
};

export default connect(null, {
  addChoiceToChats,
  setCurrentId,
  getWeatherData,
})(Choice);
