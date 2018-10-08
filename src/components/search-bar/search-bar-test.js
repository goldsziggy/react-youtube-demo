import renderComponent from 'helpers/render_component_helper';
import { expect } from 'chai';
import SearchBar from './index';

describe('Component: Search Bar', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(SearchBar);
  });

  it('should render correctly', () =>
    expect(component).to.exist,
  );

  it('should display an input field', () => {
    const el = component.find('input');
    return expect(el).to.exist;
  });
  it('should display a button', () => {
    const el = component.find('button');
    return expect(el).to.exist;
  });

  describe('Enters some text', () => {
    beforeEach(() => {
      component.find('input').simulate('change', 'new comment');
    });

    it('shows inputted text in text area', () => {
      expect(component.find('input')).to.have.value('new comment');
    });
  });
});
