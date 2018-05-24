import React from "react";
import { render } from "enzyme";

import App from "./../App";

describe("Components", () => {
  describe("Header", () => {
    test("should render", () => {
      const wrapper = render(<App />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
