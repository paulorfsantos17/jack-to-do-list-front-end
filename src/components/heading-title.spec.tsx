import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { HeadingTitle } from './heading-title'

describe('Heading Title Component', () => {
  it('renders HeadingTitle value size default and class default', () => {
    render(<HeadingTitle title="Title" />)

    const headingTitle = screen.getByText('Title')
    expect(headingTitle).toBeInTheDocument()
    expect(headingTitle)
      .toHaveClass('text-[32px]') // value default size regular
    expect(headingTitle)
      .toHaveClass('text-gray-700 font-bold') // value default  class
  })

  it('renders HeadingTitle value size small using class', () => {
    render(<HeadingTitle title="Title" size="small" />)
    const headingTitle = screen.getByText('Title')
    expect(headingTitle)
      .toHaveClass('text-2xl') // value default size regular
  })
})
