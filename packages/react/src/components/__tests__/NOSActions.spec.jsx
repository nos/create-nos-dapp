import React from "react";
import { render } from "enzyme";
import NOSActions from "./../NOSActions";

describe("Components", () => {
  describe("NOSActions", () => {
    test("should render", () => {
      const wrapper = render(<NOSActions />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
