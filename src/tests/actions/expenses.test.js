import {addExpense , editExpense , removeExpense} from '../../actions/expenses';


test('Should set up remove expense', ()=>{
     const action = removeExpense({id: '123abc'});
     expect(action).toEqual({
       type: 'REMOVE_EXPENSE',
       id: '123abc'
     });
});

test('Should set up edit Expense',()=>{
    const action = editExpense('123abc',{note:'New note value'});
    expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates:{
        note: 'New note value'
    }
    });
});

test('Should set up add expense with passed value',()=>{
        const expenseData = {
              description: 'Rent',
              amount: 109500,
              createdAt: 1000,
              note: 'This was last month rent'
        };
        const action = addExpense(expenseData);
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                ...expenseData,
                id:expect.any(String)

            }
        });
});

test('Should set up add expense with default value',()=>{
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount:0,
            createdAt: 0
        }
        

    });

});