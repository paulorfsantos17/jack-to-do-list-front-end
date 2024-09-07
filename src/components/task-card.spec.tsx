import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter, BrowserRouterProps, LinkProps } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'

import { TaskCard } from './task-card'

const removeTaskMock = vi.fn()
const completedTaskMock = vi.fn()
vi.mock('../hooks/useTasksContext', () => ({
  useTasksContext: () => ({
    removeTask: removeTaskMock,
    completedTask: completedTaskMock,
  }),
}))
const navigateMock = vi.fn()
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => navigateMock,
  BrowserRouter: (props: BrowserRouterProps) => <div>{props.children}</div>,
  Link: (props: LinkProps) => <a {...props}>{props.children}</a>,
}))

describe('TaskCard Component', () => {
  it('renders the TaskCard with correct elements', () => {
    render(
      <BrowserRouter>
        <TaskCard id="1" title="Test Task" />
      </BrowserRouter>,
    )

    expect(screen.getByText('Test Task')).toBeInTheDocument()
  })

  it('marks task as completed when button is clicked', async () => {
    render(
      <BrowserRouter>
        <TaskCard id="1" title="Test Task" />
      </BrowserRouter>,
    )

    const checkButton = screen.getByRole('button', { name: /check/i })
    fireEvent.click(checkButton)

    await waitFor(() => {
      expect(completedTaskMock).toHaveBeenCalledWith('1')

      expect(screen.getByText('Test Task'))
        .toHaveClass('text-gray-400 line-through')
    })
  })

  it('navigates to edit task page when edit button is clicked', () => {
    render(
      <BrowserRouter>
        <TaskCard id="1" title="Test Task" />
      </BrowserRouter>,
    )

    const editButton = screen.getByRole('button', { name: /edit/i })
    fireEvent.click(editButton)

    expect(navigateMock).toHaveBeenCalledWith('/edit-task/1')
  })

  it('removes task when remove button is clicked', () => {
    render(
      <BrowserRouter>
        <TaskCard id="1" title="Test Task" />
      </BrowserRouter>,
    )

    const removeButton = screen.getByRole('button', { name: /remove/i })
    fireEvent.click(removeButton)

    expect(removeTaskMock).toHaveBeenCalledWith('1')
  })
})
