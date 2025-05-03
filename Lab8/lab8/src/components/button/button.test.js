import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';
import { ThemeContext } from '../../App';

const renderWithTheme = (ui, { theme = 'light', ...options } = {}) => {
  const Wrapper = ({ children }) => (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
  return render(ui, { wrapper: Wrapper, ...options });
};

describe('Button Component', () => {
  test('renders with default props', () => {
    renderWithTheme(<Button />);
    
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Button')).toBeInTheDocument();
    expect(screen.getByText('[Description]')).toBeInTheDocument();
  });

  test('applies correct theme class', () => {
    renderWithTheme(<Button />, { theme: 'dark' });
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('dbtn_dark');
    
  });

  test('displays custom name and info', () => {
    const customName = 'Submit';
    const customInfo = 'Click to submit form';
    
    renderWithTheme(<Button Name={customName} Info={customInfo} />);
    
    expect(screen.getByText(customName)).toBeInTheDocument();
    expect(screen.getByText(customInfo)).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    
    renderWithTheme(<Button OnClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('has correct structure', () => {
    renderWithTheme(<Button />);
    
    const button = screen.getByRole('button');
    expect(button).toContainElement(screen.getByRole('heading', { level: 2 }));
    expect(button).toContainElement(screen.getByText('[Description]'));
  });
});