import renderComponent from 'helpers/render_component_helper';
import { expect } from 'chai';

import ListItem from './index';

describe('Component: List Item', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(ListItem);
  });

  it('should render correctly', () =>
    expect(component).to.exist,
  );
});
