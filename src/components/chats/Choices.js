import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { Choice } from '../index';
import { connect } from 'react-redux';

const Choices = ({ choices }) => {
  return (
    <Wrapper>
      {choices.map((choice) => (
        <Choice
          content={choice.content}
          nextId={choice.nextId}
          key={uuidv4()}
        ></Choice>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 160px;
  font-size: 14px;
  background: #7da4cd;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const mapStateToProps = (state) => ({
  choices: state.chatBot.choices,
});

export default connect(mapStateToProps)(Choices);
