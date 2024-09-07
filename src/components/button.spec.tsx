import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Button } from './button'

describe('Button Component', () => {
  it('renders Root with the default typeStyle and variant classes', () => {
    render(<Button.Root>Click me</Button.Root>)

    const button = screen.getByText('Click me')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('w-52') // Default typeStyle class
    expect(button).toHaveClass('bg-info') // Default variant class
  })

  it('render Root with correct variant class', () => {
    render(<Button.Root variant="success"> Click me </Button.Root>)

    const button = screen.getByText('Click me')
    expect(button).toHaveClass('bg-success')
  })

  it('render Root with correct typeStyle class', () => {
    render(<Button.Root typeStyle="default"> Click me </Button.Root>)

    const button = screen.getByText('Click me')
    expect(button).toHaveClass('w-52')
  })

  it('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn()
    render(<Button.Root onClick={handleClick}>Click me</Button.Root>)

    const button = screen.getByText('Click me')

    await userEvent.click(button)

    expect(handleClick).toHaveBeenCalled()
  })
})
