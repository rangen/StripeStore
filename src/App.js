import React from 'react';
import Store, { StoreProvider } from './store';
import MainContainer from './containers/MainContainer';
import UselessTimerUpdateComponent from './components/UselessTimerUpdateComponent';

const store = new Store();

const App = () => {
  return (
    <StoreProvider store={store}>
      <MainContainer/>
      <UselessTimerUpdateComponent />
    </StoreProvider>
  );
};

export default App;
