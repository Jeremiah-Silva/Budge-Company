import React from 'react';

import Expenses from './components/Expenses/Expenses';

/** Alternative way to writte functions in Javascript

** ES6 **
const App = () =>  {
   const expenses = [ 
     .
     .
   ]
}
*/
function App() {
  const expenses = [
    {
      // Properties are the values associated with a JavaScript object.
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      // Properties are the values associated with a JavaScript object.
      id: 'e2',
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      // Properties are the values associated with a JavaScript object.
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      // Properties are the values associated with a JavaScript object.
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>  
    <h2>Let's get started!</h2>
    <Expenses items={expenses} />
    </div>
    );
}

/** Alternative:
  return React.createElement(
  'div', {}, 
   React.createElement('h2', {}, "Let's get started!"), 
   React.createElement(Expenses, { items: expenses })
   );

}
*/
export default App;


/**
--There is no a hard rule how to split.
--Props are our way to passing data from component A to B. 
--Pass data for our component to direct child component.
*/

/** Months:
 * 0 = January
 * 1 = February
 * 2 = March
 * 3 = April 
 * 4 = May
 * 5 = June
 * 6 = July
 * 7 = August 
 * 8 = September
 * 9 = October
 * 10 = November
 * 11 = December
 */