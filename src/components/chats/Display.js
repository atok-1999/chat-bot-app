import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chats, Choices, Loading } from '../index';
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux';
import {
  getDataset,
  addTopicToChats,
  setChoices,
} from '../../actions/chatActions';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    width: 380,
    height: 600,
    margin: '10px 15px',
    backgroundColor: '#424242',
  },
});

const Display = ({
  currentId,
  loading,
  getDataset,
  addTopicToChats,
  setChoices,
}) => {
  const classes = useStyles();

  useEffect(() => {
    getDataset();
  }, [getDataset]);

  // アップデート時のみ実行するための記述
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      addTopicToChats();
      setChoices();
    } else {
      mounted.current = true;
    }
  }, [addTopicToChats, setChoices, currentId]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Card className={classes.root}>
      <Chats />
      <Choices />
    </Card>
  );
};

Display.propTypes = {
  currentId: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  getDataset: PropTypes.func.isRequired,
  addTopicToChats: PropTypes.func.isRequired,
  setChoices: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentId: state.chatBot.currentId,
  loading: state.chatBot.loading,
});

export default connect(mapStateToProps, {
  getDataset,
  addTopicToChats,
  setChoices,
})(Display);
