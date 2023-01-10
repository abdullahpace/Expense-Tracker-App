import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
const Transactionlist = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transactions.map((item) => {
          return <Transaction transaction={item} />;
        })}
      </ul>
    </>
  );
};

export default Transactionlist;
