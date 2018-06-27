import {
  claimGas,
  getAddress,
  getBalance,
  getStorage,
  invoke,
  send,
  testInvoke
} from "@nosplatform/api-functions/es6/bindings";
import { exists } from "@nosplatform/api-functions/es6/lib";

const nos = {
  claimGas,
  exists,
  getAddress,
  getBalance,
  getStorage,
  invoke,
  send,
  testInvoke
};

export default nos;
