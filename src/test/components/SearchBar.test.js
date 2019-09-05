import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from '../../components/SearchBar';

configure({ adapter: new Adapter() });

describe('SearchBar component', () => {
  let SearchBarComponent;

  beforeEach(() => {
    const props = {
      getMonthlyInstallment: jest.fn(),
      durationChange: jest.fn(),
      amountChange: jest.fn(),
    };
    SearchBarComponent = shallow(<SearchBar {...props} />);
  });

  it('should render SearchBar component', () => {
    expect(SearchBarComponent).toMatchSnapshot();
  });

  it('should render 2 textFields and 1 button', () => {
    const textFields = SearchBarComponent.find('WithStyles(ForwardRef(TextField))');
    const button = SearchBarComponent.find('WithStyles(ForwardRef(Button))');
    expect(textFields.exists()).toBeTruthy();
    expect(textFields.length).toEqual(2);
    expect(button.length).toEqual(1);
  });
});
