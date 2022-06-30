import './ExpenseItem.css';

function ExpenseItem() {
 const expenseDate = new Date(2022, 5, 29);
 // This const is applied at line number 14.
 const expenseTitle = 'Car Insurace'; 
 const expenseAmount = 295.79;

 //Aplying a dynaminc written in JavaScript
  return (
    <div>
     <div><h1>Company Budget</h1></div>
      <div className="expense-item">
       <div>{expenseDate.toISOString()} </div>
        <div className="expense-item__description">   
         <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
       </div>
      </div>
     </div>
    );
}

export default ExpenseItem;
