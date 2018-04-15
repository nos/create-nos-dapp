# Getting Started
* [Installation](#installation)
* [Using the nOS API](#using-the-nos-api)
* [Using `injectNOS`](#using-injectnos)
* [Running your dApp](#running-your-dapp)
  * [Working with fallback](#working-with-fallback)

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

## Running your dApp
You cannot use any nOS functions to communicate with the NEO blockchain outside of the [nOS client](https://github.com/nos/client). If your dApp will be used outside of the nOS client, you will need to provide fallback.

### Working with fallback
Every nOS function that's injected with [the nOS API](#using-the-nos-api) will look for a `fallback` function as in the `options` object that's passed as a final argument. So you can pass your custom fallback implementation along with a `getAddress` call for example. The fallback functions will be called with the same variables as the nOS functions.

For example this example gets the latest NeoBlog post with nOS, but also providing a fallback if the dApp's also used outside of nOS:
```javascript
import { injectNOS } from "../../nos"; // Relative path to where the nOS API is
import { dAppAPI } from "../../dAppAPI"; // Path to your custom API implementation

class DappComponent extends React.Component {
  handleExample = async () => {
    const { nos } = this.props;
    const contract = "85e9cc1f18fcebf9eb8211a128807e38d094542a";
    const key = "post.latest";

    const result = await nos.getStorage(contract, key, { fallback: dAppAPI.getStorage });
    return result;
  }

  render() {
    // handle your rendering here
  }
}

export default injectNOS(DappComponent);
```
