import renderComponent from 'helpers/render_component_helper';
import { expect } from 'chai';

import Search from '../search';

describe('Component: Search', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Search);
  });

  it('should render correctly', () =>
    expect(component).to.exist
  );

  it('show hello world', () => {
    const el = component.getElementsByTagName('h3')[0].textContent;
    return expect(el).to.equal('Hello World!');
  });
});
