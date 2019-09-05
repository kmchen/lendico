import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AppComponent } from '../App';

configure({ adapter: new Adapter() });

describe('App component', () => {
  let appComponent;

  beforeEach(() => {
    const props = {
      dispatch: jest.fn(),
      monthlyInstallment: "1",
      duration: "2",
      amount: "3",
    };
    appComponent = shallow(<AppComponent {...props} />);
  });

  it('should render App component', () => {
    expect(appComponent).toMatchSnapshot();
  });
});
