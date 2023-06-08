import { render, screen } from '@testing-library/preact';

import { App } from './app';

describe('App', () => {
  test('should render', () => {
    render(<App />);
    expect(screen.getByTestId('myTestId')).toHaveTextContent('MyTestContent');
  });
});
