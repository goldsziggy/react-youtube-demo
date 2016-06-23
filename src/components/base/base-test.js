import renderComponent from 'helpers/render_component_helper';
import { expect } from 'chai';

import Base from './index';

describe('Component: Base', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(Base);
  });

  it('should render correctly', () =>
    expect(component).to.exist
  );

  it('show the navbar element', () => {
    const el = component.find('nav');
    return expect(el).to.exist;
  });

  it('show the main element', () => {
    const el = component.find('main');
    return expect(el).to.exist;
  });

  it('show the footer element', () => {
    const el = component.find('footer');
    return expect(el).to.exist;
  });
});
