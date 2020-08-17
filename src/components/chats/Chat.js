import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';
import Grow from '@material-ui/core/Grow';
import ShibaInuPic from '../../static/shiba_inu.jpg';

const useStyles = makeStyles({
  reverse: {
    display: 'flex',
    flexDirection: 'row-reverse',
    margin: 0,
    padding: 0,
  },
});

const Chat = ({ content, type }) => {
  const classes = useStyles();

  const [rendered, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <div>
      {type === 'topic' ? (
        <Grow in={rendered}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt='shiba inu looking at you' src={ShibaInuPic} />
            </ListItemAvatar>
            <ChatBubbleLeft>
              <div>{content}</div>
            </ChatBubbleLeft>
          </ListItem>
        </Grow>
      ) : (
        <Grow in={rendered}>
          <ListItem className={classes.reverse}>
            <ListItemAvatar>
              <Avatar>
                <FaceIcon />
              </Avatar>
            </ListItemAvatar>
            <ChatBubbleRight>
              <div>{content}</div>
            </ChatBubbleRight>
          </ListItem>
        </Grow>
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
    left: -20px;
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
    right: -17px;
    border: 8px solid transparent;
    border-right: 18px solid #30e852;
    transform: rotate(180deg);
  }
`;

export default Chat;
