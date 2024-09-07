import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Heading } from './heading'

describe('Heading Title Component', () => {
  it('renders Heading value class default', () => {
    render(<Heading title="Title" subTitle="description" />)
    const title = screen.getByText('Title')
    const subTitle = screen.getByText('description')
    expect(title).toBeInTheDocument()
    expect(subTitle).toBeInTheDocument()

    expect(title)
      .toHaveClass('font-bold text-4xl text-gray-700')
    expect(subTitle)
      .toHaveClass('text-gray-700 text-center text-md')
  })
})
