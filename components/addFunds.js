import React, { useRef } from "react";
import { useState, useEffect } from "react";
import DePay from "../ethereum/DePay";
import web3 from "../ethereum/web3";
import classes from "./addFunds.module.css";
import Modal from "../UI/Modal";
import Loader from "../UI/Loader";
const addFunds = (props) => {
  const [accounts, setAccounts] = useState("#");
  const [msg, setMsg] = useState({ value: "", status: 1 });
  const [processing,setProcessing]=useState(false);
  const amountRef = useRef();
  useEffect(() => {
    const load = async () => {
      const accounts = await web3.eth.getAccounts();
      setAccounts(accounts);
    };
    load();
  }, []);
  setInterval(() => {
    const load = async () => {
      const accounts = await web3.eth.getAccounts();
      setAccounts(accounts);
    };
    load();
  }, 5000);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setProcessing(true);
    const func = async () => {
      try {
        await DePay.methods
          .addFund()
          .send({ from: accounts[0], value: amountRef.current.value });
        amountRef.current.value = 0;
        setMsg({value:"Success",status:1});
        setProcessing(false);
      } catch (err) {
        setMsg({value:err.message,status:0});
        setProcessing(false);
      }
      return(<></>);
    };
    func();
  };
  const onClickHandler = () => {
    setMsg({value:"",status:1});
    return(<></>);
  };
  return (
    <Modal dontShow={props.dontShow}>
      <h1>ADD FUNDS</h1>
      {accounts!='#'&&<h3>Account Connected : {accounts[0]}</h3>}
      <div className={classes.loadBox}>
     {accounts=='#'&&<Loader></Loader>}
     </div>
      <form onSubmit={onSubmitHandler}>
        {accounts!='#'&&<div className={classes.input}>
          <label htmlFor="amount">Enter The Amount : </label>
          <input
            onClick={onClickHandler}
            ref={amountRef}
            type="number"
            placeholder="Weis"
          ></input>
        </div>}
        <div>
          {!processing&&accounts!='#'&&<button className={classes.button}>Submit</button>}
          {<button className={classes.button} onClick={props.dontShow}>Close</button>}
        </div>
        <h4 className={`${msg.status==1&&classes.success} ${msg.status==0&&classes.failure}`}>{msg.value}</h4>
      </form>
    </Modal>
  );
};

export default addFunds;
