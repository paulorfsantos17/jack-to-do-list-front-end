import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Input } from './input'

describe('Heading Title Component', () => {
  it('renders Input with label use prop title and name and id use prop id',
    () => {
      render(<Input title="Title" id="id" />)

      const label = screen.getByLabelText('Title')
      expect(label).toBeInTheDocument()

      const input = screen.getByRole('textbox')
      expect(input).toBeInTheDocument()

      expect(input).toHaveAttribute('id', 'id')

      expect(input).toHaveAttribute('name', 'id')
    })

  it('renders Input with error show error use prop error and default class',
    () => {
      render(<Input title="Title" id="id" error="error" />)

      const error = screen.getByText('error')
      expect(error).toBeInTheDocument()
      expect(error).toHaveClass('text-danger text-xs')
    })
})
