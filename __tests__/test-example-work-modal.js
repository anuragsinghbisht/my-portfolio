import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal  from '../js/example-work-modal';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const myWork = {
    'title': 'Portfolio Boilerplate 1',
    'href': "https://example.com",
    "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': 'A Serverless Portfoliocp',
      'src': 'images/example1.png',
      'comment': ''
    }
};

describe("ExampleWorkModal component", () => {
  let mockCloseModalFn = jest.fn();
  let component = shallow(<ExampleWorkModal example={myWork} open={false} closeModal={mockCloseModalFn}/>);
  let openComponent = shallow(<ExampleWorkModal example={myWork} open={true} />);
  let anchors = component.find('a');

  it("Should contain a single 'a' element", () => {
    expect(anchors.length).toEqual(1);
  });

  it("Should link to our project", () => {
    expect(anchors.prop("href")).toEqual(myWork.href);
  });

  it("Should have the modal class set correctly", () => {
    expect(component.find('.background--skyBlue').hasClass('modal--closed')).toBe(true);
    expect(openComponent.find('.background--skyBlue').hasClass('modal--open')).toBe(true);
  });

  it("Should close the modal when closeModal is clicked", () => {
    component.find(".modal__closeButton").simulate("click");
    expect(mockCloseModalFn).toHaveBeenCalled();
  });

});
