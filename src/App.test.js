import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
// import Enzyme from "enzyme";
// import Enzyme, { shallow, mount, render, configure } from "enzyme";
// import Enzyme, { mount } from "enzyme-adapter-react-16";
// Enzyme.configure({ adapter: new Adapter() });

import { shallow, mount, render } from "enzyme";

const wrapper = shallow(<App />);

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// describe("My component", () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = mount(<App />);
//   });

//   it("renders", () => {
//     console.log(wrapper.debug());
//     expect(wrapper).not.toBeNull();
//   });

//   it("default text", () => {
//     expect(wrapper.find("div").text()).toEqual("count: 0");
//   });
//   it("increments value", () => {
//     wrapper.find("button").simulate("click");
//     expect(wrapper.find("div").text()).toEqual("count: 1");
//   });
// });
