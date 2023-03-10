import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form id='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input type='text' name='text' value={text} onChange={handleChange} placeholder='Enter text...' />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type='number' name='amount' value={amount} onChange={handleChangeAmount} placeholder='Enter amount...' />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
