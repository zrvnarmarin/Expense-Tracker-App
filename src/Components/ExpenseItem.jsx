import React, {useState} from 'react';
import '../Styles/ExpenseItem.css'
import Card from './Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({title, amount, date}) => {

    const [expenseItemTitle, setExpenseItemTitle] = useState(title)

    const clickHandler = () => {
        setExpenseItemTitle('updated')
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{expenseItemTitle}</h2>
                <div className='expense-item__price'>{amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
        )
};

export default ExpenseItem;
