import React from 'react';

import './ExpenseDate.css';

/** Alternative way to writte functions in Javascript

** ES6 **
const App = () =>  {
   const expenses = [ 
     .
     .
   ]
}
*/

function ExpenseDate(props) {
    //The way to adapted props instead of expenseDate.toISOString
    //<div> {props.date.toISOString()} </div>*/}
    //Month - props.date.toLocaleString(we can put two arguments - 1) Language 2)Date should be formated "  ")
    //We can define the size of the month display using for example 'long'*/
     const month = props.date.toLocaleString('en-US', { month: 'long' });
     //How to setup the day of month propety
     const day = props.date.toLocaleString('en-US', { day: '2-digit' });
     //How to setup the year with 4 digits.
     const year = props.date.getFullYear();
/** To maintaing the code cleaned we need to put it on const and apply this function to our <div>  */
return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;

/** developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString */