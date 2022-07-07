//!Store the value and make sure it's "survives" functions can be works property! 
import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
    
  //* These three const is read separetaly. 

    //! a) First const: Title
    const [enteredTitle, setEnteredTitle] = useState(''); //*Inicial string!  
    //! b) Second const: Amount
    const [enteredAmount, setEnteredAmount] = useState(''); 
    //! c) Third contst: 
    const [enteredDate, setEntered] = useState(''); 
    
  //* Create one object with these three const.
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

    // a) 1. First Function:
    const titleChangeHandler = (event) => { 
      // The lines; 11 and 29 works together.
      // console.log(event.target.value); 
      //?            (Argument content to execute "setEnteredTitle");
      setEnteredTitle(event.target.value);
      // setUserInput({
      //   ...userInput,
      //   enteredTitle: event.target.value
      // });
      // setUserInput((prevState) => {
      //   return {...prevState, enteredTitle: event.target.value};
      // }); 
    };
 
    // b) 2.Second Function:
    const amountChangeHandler = (event) => {
      // The lines; 37 and 62 works together.
      // console.log(event.target.value); 
      //?            (Argument content to execute "setEnteredTitle");
      setEnteredAmount(event.target.value);    
      // setUserInput({
      //   ...userInput,
      //   enteredAmount: event.target.value,
      // });
    };
    
    // c) 3.Third Function:
    const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //   setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // });
  };
    return ( 
    <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
              <lable>Title</lable>
              <input type="text" onChange={titleChangeHandler} /> {/** LISTENER {titleChangeHandler} */}
            </div>
            <div className="new-expense__control">
              <lable>Amount</lable>
              <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} /> {/** LISTENER {amountChangeHandler} */}
            </div> 
            <div className="new-expense__control">
              <lable>Date</lable>
              <input type='date' min="2022-01-01" max="2025" onChange={dateChangeHandler} /> {/** LISTENER {dateChangeHandler} */}
            </div>       
        </div>
        <div className="new-exepense__actions">
            <button type="submit">Add Expense</button>    
        </div>
    </form>
  );
}

export default ExpenseForm;

