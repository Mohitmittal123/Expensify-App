import filterReducer from '../../reducers/filters';
import moment from 'moment';
import { sortByDate } from '../../actions/filters';

test('should setup default filter values',()=>{
    const state = filterReducer(undefined,{type: '@@INIT'});
    expect(state).toEqual({
          text: '',
          sortBy: 'date',
          startDate : moment().startOf('month'),
          endDate : moment().endOf('month')
    });
});

test('should set sortBy amount',()=>{
    const state = filterReducer(undefined,{type: 'SORT_BY_AMOUNT'});
    expect(state).toEqual({
        ...state,
        sortBy: 'amount'
    });
});

test('should set sort by to date',()=>{
    const currentState = {
        text: '',
        startDate : undefined,
        endDate: undefined,
        sortBy: 'amount'

    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filterReducer(currentState,action);
    expect(state.sortBy).toBe('date');

});

test('should set text filter ',()=>{
    const text= 'This is my text filter'
    const action = {
        type: 'SET_TEXT_FILTER',
        text
        
    };
    const state = filterReducer(undefined,action);
    expect(state.text).toEqual(text);
});

test('should set startDate Filter',()=>{
        const startDate = moment();
        const action = {
            type: 'SET_START_DATE',
            startDate
        };
        const state = filterReducer(undefined,action);
        expect(state.startDate).toEqual(startDate);
});

test('should set endDate Filter',()=>{
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filterReducer(undefined,action);
    expect(state.endDate).toEqual(endDate);
    
});

