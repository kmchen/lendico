import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Result from '../../components/Result';

configure({ adapter: new Adapter() });

describe('Results component', () => {
  let ResultsComponent;

  beforeEach(() => {
    const props = {
      monthlyInstallment: '2'
    };
    ResultsComponent = shallow(<Result {...props} />);
  });

  it('should render Results component', () => {
    expect(ResultsComponent).toMatchSnapshot();
  });

  it('should render Card component', () => {
    const cardComponent = ResultsComponent.find('WithStyles(ForwardRef(Card))');
    expect(cardComponent.exists()).toBeTruthy();
  });
});

