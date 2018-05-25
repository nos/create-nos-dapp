import React from "react";
import nos from "@nosplatform/api-functions/es6";

const { Provider, Consumer } = React.createContext(nos);

const injectNOS = Component => props => (
  <Consumer>{context => <Component nos={context} {...props} />}</Consumer>
);

export { Provider, Consumer, injectNOS };
