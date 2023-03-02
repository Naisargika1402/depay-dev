import web3 from "./web3";
import DePayContract from "./build/DePay.json";
 
const instance = new web3.eth.Contract(
  DePayContract.abi,
  "0x40d02A79306Ed2162fB752F73dfE9cD0e55e0002"
);
 
export default instance;