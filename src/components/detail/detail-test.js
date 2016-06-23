import renderComponent from 'helpers/render_component_helper';
import { expect } from 'chai';

import Detail from './index';

describe('Component: Detail', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(Detail);
  });

  it('should render correctly', () =>
    expect(component).to.exist
  );
});
