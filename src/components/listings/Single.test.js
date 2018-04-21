import React from 'react';
import renderer from 'react-test-renderer';

import Single from './Single';


const fakeItem = jest.fn();

describe('Single snapshots', () => {
  it('Single snapshot test', () => {
    const component = renderer.create(<Single item={fakeItem} />);
    const tree = component.toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});
