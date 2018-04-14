# Getting Started
* [Installation](#installation)
* [Using the nOS API](#using-the-nos-api)
* [Using `injectNOS`](#using-injectnos)

## Installation
You're ready to get started with NEO's smart economy, smart contracts and want to build on nOS' platform.
So, you cloned this repo and are looking for some next steps! As in the `README` is detailed, the first thing you should do is load in all dependencies with `yarn` or `npm install`.

You can go for a testrun of the application and test the example functions by enterin `yarn start` or `npm start` in your terminal, and entering `localhost:1234` in the nOS browser.

## Using the nOS API
In `src/nos`, you can see a React Context that can expose and inject all nOS functions in your React component.
If you're just using it in the UI, you can use the `Consumer`.
But you're probably going to extend your component with handlers, that is why you can also directly inject it to your component's props with the `injectNOS` function.

Aside from all functions available (Check the nOS [API documentation](https://github.com/nos/client/blob/master/docs/api.md) for reference),
an `exists` boolean is also available to check whether nOS is loaded in your window.

## Using `injectNOS`
If you're using nOS in one of your handler or lifecycle functions, you can inject all functions to `this.props.nos` with the `injectNOS` higher-order component.

```javascript
import { injectNOS } from "../../nos"; // Relative path to where the nOS API is

class DappComponent extends React.Component {
  handleExample = () => {
    const { nos } = this.props;
    console.log(nos.exists);
  }

  render() {
    // handle your rendering here
  }
}

export default injectNOS(DappComponent);
```
