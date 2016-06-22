import renderComponent from 'helpers/render_component_helper';
import { expect } from 'chai';

import NavBar from './index';

describe('Component: NavBar', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(NavBar);
  });

  it('should render correctly', () =>
    expect(component).to.exist
  );

  it('should display logo text', () => {
    const el = component.getElementsByTagName('span')[0].textContent;
    return expect(el).to.equal('YouTube Explorer');
  });
});
