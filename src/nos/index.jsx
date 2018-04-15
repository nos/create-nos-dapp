import React from "react";
import PropTypes from "prop-types";

const nos = window.NOS && window.NOS.V1 ? window.NOS.V1 : {};

const { Provider, Consumer } = React.createContext({
  // Check whether nOS exists in your window
  exists: !!window.NOS && !!window.NOS.V1,

  // Wallet Actions
  getAddress: () => nos.getAddress(),
  getBalance: scriptHash => nos.getBalance(scriptHash),
  claimGas: () => nos.claimGas(),
  send: (asset, amount, receiver) => nos.send(asset, amount, receiver),

  // Smart Contract Actions
  testInvoke: (scriptHash, operation, args) =>
    nos.testInvoke(scriptHash, operation, args),
  invoke: (scriptHash, operation, args) =>
    nos.invoke(scriptHash, operation, args),
  getStorage: (scriptHash, key, options = { encode: true }) =>
    nos.getStorage(scriptHash, key, options)
});

const injectNOS = Component => props => (
  <Consumer>{context => <Component nos={context} {...props} />}</Consumer>
);

const NOSTypes = PropTypes.shape({
  exists: PropTypes.bool.isRequired,
  getAddress: PropTypes.func.isRequired,
  getBalance: PropTypes.func.isRequired,
  claimGas: PropTypes.func.isRequired,
  send: PropTypes.func.isRequired,
  testInvoke: PropTypes.func.isRequired,
  invoke: PropTypes.func.isRequired,
  getStorage: PropTypes.func.isRequired
});

export { Provider, Consumer, injectNOS, NOSTypes };
