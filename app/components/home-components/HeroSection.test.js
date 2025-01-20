// HeroSection.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import HeroSection from './HeroSection';

// Mock the next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn()
  })
}));

// Mock the Button component
jest.mock('../reused-components/Button', () => ({
  __esModule: true,
  default: function MockButton(props) {
    return (
      <button
        onClick={props.onClick}
        data-testid="buy-button"
        className={props.className}
      >
        {props.text}
      </button>
    );
  }
}));

describe('HeroSection Component', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useRouter.mockImplementation(() => ({
      push: mockPush
    }));
  });

  it('renders hero section with all elements', () => {
    render(<HeroSection />);
    
    // Check headings
    expect(screen.getByText('New Arrival')).toBeInTheDocument();
    expect(screen.getByText('Discover Our')).toBeInTheDocument();
    expect(screen.getByText('New Collection')).toBeInTheDocument();
    
    // Check image
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '/assets/scandinavian-interior-mockup-wall-decal-background 1.png');
    
    // Check button
    expect(screen.getByTestId('buy-button')).toBeInTheDocument();
  });

  it('navigates to shop page when button is clicked', () => {
    render(<HeroSection />);
    
    const button = screen.getByTestId('buy-button');
    fireEvent.click(button);
    
    expect(mockPush).toHaveBeenCalledWith('/shop');
  });

  it('applies correct styling classes', () => {
    render(<HeroSection />);
    
    const container = screen.getByRole('img').parentElement;
    expect(container).toHaveClass('relative');
    
    const contentWrapper = screen.getByText('New Arrival').parentElement.parentElement;
    expect(contentWrapper).toHaveClass('absolute');
    expect(contentWrapper).toHaveClass('flex');
  });
});