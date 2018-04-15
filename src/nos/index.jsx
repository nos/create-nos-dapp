import React from "react";
import PropTypes from "prop-types";

const nos = window.NOS && window.NOS.V1 ? window.NOS.V1 : {};
const exists = !!window.NOS && !!window.NOS.V1;

const { Provider, Consumer } = React.createContext({
  // Check whether nOS exists in your window
  exists,

  // Wallet Actions
  getAddress: options => (exists ? nos.getAddress() : options.fallback()),
  getBalance: (scriptHash, options) =>
    exists ? nos.getBalance(scriptHash) : options.fallback(scriptHash),
  claimGas: options => (exists ? nos.claimGas() : options.fallback()),
  send: (asset, amount, receiver, options) =>
    exists
      ? nos.send(asset, amount, receiver)
      : options.fallback(asset, amount, receiver),

  // Smart Contract Actions
  testInvoke: (scriptHash, operation, args, options) =>
    exists
      ? nos.testInvoke(scriptHash, operation, args)
      : options.fallback(scriptHash, operation, args),
  invoke: (scriptHash, operation, args, options) =>
    exists
      ? nos.invoke(scriptHash, operation, args)
      : options.fallback(scriptHash, operation, args),
  getStorage: (scriptHash, key, options = { encode: true }) =>
    exists
      ? nos.getStorage(scriptHash, key, options)
      : options.fallback(scriptHash, key, options)
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
