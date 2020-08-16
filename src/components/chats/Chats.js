import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Chat } from '../index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Chats = ({ chats }) => {
  useEffect(() => {
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [chats]);

  return (
    <Wrapper id={'scroll-area'}>
      {chats.map((chat) => (
        <Chat content={chat.content} type={chat.type} key={chat.id} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 410px;
  padding: 0 10px;
  margin: 15px 0 0 0;
  text-align: right;
  font-size: 14px;
  background: #7da4cd;
  overflow: auto;
`;

const mapStateToProps = (state) => ({
  chats: state.chatBot.chats,
});

Chats.propTypes = {
  chats: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Chats);
