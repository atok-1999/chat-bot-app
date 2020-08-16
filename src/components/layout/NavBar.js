import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const NavBar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Title>Chat Bot App</Title>
      </Toolbar>
    </AppBar>
  );
};

const Title = styled.h3`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
`;

export default NavBar;
