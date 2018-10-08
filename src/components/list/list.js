import renderComponent from 'helpers/render_component_helper';
import { expect } from 'chai';

import List from './index';

describe('Component: List', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(List);
  });

  it('should render correctly', () =>
    expect(component).to.exist,
  );

  it('should contain the search bar', () => {
    const el = component.find('input');
    return expect(el).to.exist;
  });

  it('should contain an ul', () => {
    const el = component.find('ul');
    return expect(el).to.exist;
  });
});
