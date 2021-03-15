import './App.css';
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Table } from './components/Table/Table';
import { Pages } from './components/Pages/Pages';
import { Filter } from './components/SearchForm/Filter';

export const App = () => (
  <Provider store={store}>
    <div className="App">
      <Filter />
      <Table />
      <Pages />
    </div>
  </Provider>
);
