/* eslint-disable @stylistic/max-len */
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { TextArea } from './text-area'

describe('Heading Title Component', () => {
  it('renders Input with label use prop title and name and id use prop id',
    () => {
      render(<TextArea title="description" id="id" />)

      const label = screen.getByLabelText('description')
      expect(label).toBeInTheDocument()

      const textArea = screen.getByRole('textbox')
      expect(textArea).toBeInTheDocument()

      expect(textArea).toHaveAttribute('id', 'id')

      expect(textArea).toHaveAttribute('name', 'id')
    })

  it('renders Input with error show errorMessage use prop error and default class',
    () => {
      render(<TextArea title="description" id="id" error="error" />)

      const errorMessage = screen.getByText('error')
      expect(errorMessage).toBeInTheDocument()
      expect(errorMessage).toHaveClass('text-danger text-xs')
    })
})
