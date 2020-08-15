import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles({
  reverse: {
    display: 'flex',
    flexDirection: 'row-reverse',
    padding: 0,
    margin: 0,
  },
});

const Chat = ({ content, type }) => {
  const classes = useStyles();

  return (
    <div>
      {type === 'topic' ? (
        <ListItem>
          <ListItemAvatar>
            <Avatar alt='icon' />
          </ListItemAvatar>
          <ChatBubbleLeft>{content}</ChatBubbleLeft>
        </ListItem>
      ) : (
        <ListItem className={classes.reverse}>
          <ListItemAvatar>
            <Avatar>
              <FaceIcon />
            </Avatar>
          </ListItemAvatar>
          <ChatBubbleRight>{content}</ChatBubbleRight>
        </ListItem>
      )}
    </div>
  );
};

const ChatBubbleLeft = styled.div`
  position: relative;
  max-width: 200px;
  margin: 10px 0;
  padding: 10px;

  font-size: 14px;
  text-align: left;
  border-radius: 12px;
  background: #edf1ee;
  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 47%;
    left: -10%;
    border: 8px solid transparent;
    border-right: 18px solid #edf1ee;
  }
`;

const ChatBubbleRight = styled.div`
  position: relative;
  max-width: 200px;
  margin: 10px 20px;
  padding: 10px;
  font-size: 14px;
  text-align: left;
  border-radius: 12px;
  background: #30e852;
  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 47%;
    border: 8px solid transparent;
    border-right: 18px solid #30e852;
    transform: rotate(180deg);
  }
`;

export default Chat;
