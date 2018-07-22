import { render } from "enzyme";

/**
 * @function TestPropTypes
 * @param {React.Component} component the rendered component
 * @param {Number} amount the expected amount of console errors
 *
 * Based on the following SO post:
 * https://stackoverflow.com/a/41885867/6584350
 *
 * This refactors for to forEach (makes the linter happy)
 * and takes an unrendered component + console.error amount as params.
 */

const TestPropTypes = (component, amount) => {
  console.error = jest.fn();
  console.error.mockClear();

  render(component);
  expect(console.error).toHaveBeenCalledTimes(amount);
};

export default TestPropTypes;
