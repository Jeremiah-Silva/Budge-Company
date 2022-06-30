import './ExpenseItem.css';

function ExpenseItem(props) {
    /** Month - props.date.toLocaleString(we can put two arguments - 1) Language 2)Date should be formated "  ")
     We can define the size of the month display using for example 'long'*/
    const month = props.date.toLocaleString('en-US', { month: 'long' })
    /** How to setup the day of month propety */
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })
    /** How to setup the year with 4 digits */
    const year = props.date.getFullYear()


 //Aplying a dynaminc written in JavaScript
  return (
    <div>
      <div className="expense-item">
      {/**The way to adapted props instead of expenseDate.toISOString */}
      {/** <div>{props.date.toISOString()} </div>*/}
      
      {/** To maintaing the code cleaned we need to put it on const and apply this function to our <div>  */}
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    
      {/** developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString */}
      

       <div className="expense-item__description">  

        {/*<h2>{*instead of expenseTitle we put props}</h2>*/}
        <h2>{props.title}</h2> 
        {/*When we chance the .title to .name we need to chance de name of attribute in App.js line 30 */}

       {/**The way to adapted props instead of expenseAmount.toISOString */}
       <div className="expense-item__price">${props.amount}
            </div>
          </div>
        </div>
     </div>
    );
}

export default ExpenseItem;

/** We use props all the time when we building a app */
