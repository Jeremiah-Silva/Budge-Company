import React from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
    const titleChangeHandler = (event) => {
      console.log(event.target.value);  
    };
 
   return ( 
    <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
              <lable>Title</lable>
              <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
              <lable>Amount</lable>
              <input type='number' min="0.01" step="0.01" />
            </div> 
            <div className="new-expense__control">
              <lable>Date</lable>
              <input type='date' min="2022-01-01" max="2025"  />  
            </div>       
        </div>
        <div className="new-exepense__actions">
            <button type="submit">Add Expennse</button>    
        </div>
    </form>
  );
}

export default ExpenseForm;
