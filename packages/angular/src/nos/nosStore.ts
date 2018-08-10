import {
  claimGas,
  getAddress,
  getBalance,
  getStorage,
  invoke,
  send,
  testInvoke
} from '@nosplatform/api-functions/es6/bindings';
import { exists } from '@nosplatform/api-functions/lib';

const nos = {
  exists,
  claimGas,
  getAddress,
  getBalance,
  getStorage,
  invoke,
  send,
  testInvoke
};

export default nos;
