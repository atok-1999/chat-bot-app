import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { addChoiceToChats, setCurrentId } from '../../actions/chatActions';

const useStyles = makeStyles(() => ({
  button: {
    borderRadius: 0,
    padding: '8px 16px',
  },
}));

const Choice = ({ content, nextId, addChoiceToChats, setCurrentId }) => {
  const classes = useStyles();

  const showNextDataSet = (content, nextId) => {
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

export default connect(null, { addChoiceToChats, setCurrentId })(Choice);
