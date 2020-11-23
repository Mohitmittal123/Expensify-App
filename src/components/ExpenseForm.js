import React from 'react';
import moment from 'moment';
import { SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            description: props.expense ? props.expense.description : '',
            note:props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderfocused:false,
            error:''
     }
    }
   
    OnDescriptionChange =(e)=>{
         const description = e.target.value;
         this.setState (() => ({description}));
    };
    OnNoteChange =(e)=>{
        const note  = e.target.value;
        this.setState (()=>({note}));
    };
    OnAmountChange =(e)=>{
        const amount = e.target.value;

        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}));
        }
    };
    onDateChange=(createdAt)=>{
        if(createdAt){
        this.setState(()=>({createdAt}));
        }
    };
    onFocusChange=({focused})=>{
      this.setState(()=>({
               calenderfocused: focused
      }));
    };
    onSubmit = (e)=>{
        e.preventDefault();

          if(!this.state.description || !this.state.amount){
                  this.setState(()=>({error: 'Please provide description and amount.'}));
          }
          else{
              this.setState(()=>({error: 'B&S expenses'}));
               this.props.onSubmit({
                     description: this.state.description,
                     amount: parseFloat(this.state.amount,10),
                     createdAt: this.state.createdAt.valueOf(),
                     note: this.state.note
               });

          }

    };
    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
              <form onSubmit = {this.onSubmit}>
                 <input
        type ="text"
        placeholder="Desription"
        autoFocus
        value ={this.state.description}
        onChange={this.OnDescriptionChange} />
        
        <input
        type ="text"
        placeholder="Amount"
        value = {this.state.amount}
        onChange={this.OnAmountChange}
        />
        <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderfocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=>false}
        />
        <textarea
        placeholder ="Add a Note For Your Expense(Optional)"
        value = {this.state.note}
        onChange={this.OnNoteChange}
        >
        </textarea>
       <button>Add Expense</button>

        </form>
            </div>
        )
    }


}