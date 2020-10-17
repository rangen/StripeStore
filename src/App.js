import React from 'react';
import Store, { StoreProvider } from './store';
import MainContainer from './containers/MainContainer';

const store = new Store();

const App = () => {
  return (
    <StoreProvider store={store}>
      <MainContainer/>
    </StoreProvider>
  );
};

export default App;
