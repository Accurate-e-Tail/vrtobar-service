import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Search from '../components/search/search';

Enzyme.configure({ adapter: new Adapter() });

describe('<Search />', () => {
  it('renders one <Search /> components', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('.v_search-section')).toHaveLength(1);
  });
  it('renders one select element', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('select')).toHaveLength(1);
  });
});
