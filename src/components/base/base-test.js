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
    const el = component.getElementsByTagName('nav')[0];
    return expect(el).to.exist;
  });

  it('show the main element', () => {
    const el = component.getElementsByTagName('main')[0];
    return expect(el).to.exist;
  });

  it('show the footer element', () => {
    const el = component.getElementsByTagName('footer')[0];
    return expect(el).to.exist;
  });
});
