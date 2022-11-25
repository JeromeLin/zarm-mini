import React from 'react';
import { render } from '@testing-library/react';
import Button from '../index';

describe('Button', () => {
  it('renders correctly', () => {
    const { container } = render(<Button>foo</Button>);
    expect(container).toMatchSnapshot();
  });

});
