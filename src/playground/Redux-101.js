import {createStore} from 'redux';

const store = createStore((state={ count:0 },action)=>{
     switch (action.type){
         case 'INCREMENT' :
             const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + 1 + incrementBy
            };

          case 'DECREMENT': 
          const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
          return {
              count : state.count -1 - decrementBy
          }  
          case 'RESET':
              return {
                  count: 0
              }
            default: 
            return state;
     }
});

 store.subscribe (()=>{
    console.log(store.getState());
})

//Action simple an object that gets passed to store
store.dispatch(
{
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch(
    {
        type: 'DECREMENT',
        decrementBy : 10
    });
 store.dispatch(
        {
            type: 'RESET'
        });
           
        