import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
/** Alternative way to write functions in Javascript.

** ES6 **
const App = () =>  {
   const expenses = [ 
     .
     .
   ]
}
*/

const Expenses = (props) => {
const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler =  selectedYear => {
    setFilteredYear(selectedYear);
    // console.log('Expenses.js');
    // console.log(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear; 
  });
  
  return (
      <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} 
                        onChangeFilter={filterChangeHandler} 
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
         </Card>
      </div>
  );
};

export default Expenses;

  /**
  return (
      <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} 
                        onChangeFilter={filterChangeHandler} 
        />
        {filteredExpenses.length === 0 && <p>No expanses found.</p>}
        {filteredExpenses.length > 0 && 
          filteredExpenses.map((expense) => (
        <ExpenseItem 
              key={expense.id} //special prop
              title={expense.title} 
              amount={expense.amount} 
              date={expense.date} 
              />
             ))} 
         </Card>
      </div>
  );
};

<ExpenseItem    
            /** When we chance the name of props we need to change here as well; for example Expenses.js line 19.
            title={props.items[0].title} 
            amount={props.items[0].amount} 
            date={props.items[0].date}
            />
            <ExpenseItem 
            title={props.items[1].title} 
            amount={props.items[1].amount} 
            date={props.items[1].date}
            />
            <ExpenseItem 
            title={props.items[2].title} 
            amount={props.items[2].amount} 
            date={props.items[2].date}
            />
            <ExpenseItem 
            title={props.items[3].title} 
            amount={props.items[3].amount} 
            date={props.items[3].date}
            /> 
*/