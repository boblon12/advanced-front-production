import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';
describe('Button test', () => {
  test('render button with text', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('render button with specific class', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
