import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props)=>(
    <div>
    <h1>Expense list</h1>
    {props.expense.map((expense)=>{
        return <ExpenseListItem key={expense.id} {...expense}/>
    })}
    </div>
);

const mapStateToprops = (state)=>{
    return {
        expense: selectExpenses(state.expense , state.filters)
    };
};


export default  connect(mapStateToprops)(ExpenseList);

