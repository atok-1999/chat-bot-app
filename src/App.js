import React, { Fragment } from 'react';
import './App.css';
import styled from 'styled-components';
import { NavBar, Display } from './components/index';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <NavBar />
        <Wrapper>
          <Display />
        </Wrapper>
      </Fragment>
    </Provider>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
