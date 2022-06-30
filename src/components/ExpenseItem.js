import './ExpenseItem.css';

function ExpenseItem(props) {

 //Aplying a dynaminc written in JavaScript
  return (
    <div>
      <div className="expense-item">

       {/**The way to adapted props instead of expenseDate.toISOString */}
       <div>{props.date.toISOString()} </div>

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
