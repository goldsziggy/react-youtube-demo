import renderComponent from 'helpers/render_component_helper';
import { expect } from 'chai';

import Footer from './index';

describe('Component: Footer', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(Footer);
  });

  it('should render correctly', () =>
    expect(component).to.exist
  );

  it('should display the current year and creator name for the copywrite', () => {
    const el = component.find('p');
    return expect(el).text(`Anthony Grove © ${new Date().getFullYear()}`);
  });
});
