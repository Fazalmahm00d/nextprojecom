import '@testing-library/jest-dom'

// Example test file: components/Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button Component', () => {
  it('renders button with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})