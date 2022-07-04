import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
/** We moved these const to the file ExpenseDate.js */
//Aplying a dynaminc written in JavaScript
  
  return(
    /** This router <Card> send this "information for my Card.js file." */
      /** This <Card classeName... received supports from constante that's content a .props attribute */
      <Card className="expense-item">
        {/** These <ExpenseDate> until </div> are the "information" content here will be show in my '.props' from './Card.js */} 
        <ExpenseDate date={props.date} /> 
        <div className="expense-item__description">  
        {/*<h2>{*instead of expenseTitle we put props}</h2>*/}
        <h2>{props.title}</h2> 
       {/*When we chance the .title to .name we need to chance de name of attribute in App.js line 30 */}
       {/**The way to adapted props instead of expenseAmount.toISOString */}
       <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

/** We use props all the time when we building a app */
