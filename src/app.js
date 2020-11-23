import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 100}));
store.dispatch(addExpense({description: 'Gas bill',createdAt:1000}));
store.dispatch(addExpense({description: 'Rent', amount: 10500}));

store.dispatch(setTextFilter('water'));



const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expense , state.filters);


console.log(visibleExpenses);


const jsx = (
    <Provider store = {store}>
    <AppRouter />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));
