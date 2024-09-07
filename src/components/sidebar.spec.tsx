import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter, BrowserRouterProps, LinkProps } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'

import { SideBar } from './sidebar'

// Mock do hook useWindowSize
vi.mock('../hooks/useWindowSize', () => ({
  __esModule: true,
  default: () => ({ width: 650 }),
}))

const removeCookiesMock = vi.fn()
vi.mock('react-cookie', () => ({
  useCookies: () => [null, null, removeCookiesMock],
}))

const navigateMock = vi.fn()
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => navigateMock,
  BrowserRouter: (props: BrowserRouterProps) => <div>{props.children}</div>,
  Link: (props: LinkProps) => <a {...props}>{props.children}</a>,
}))

describe('SideBar Component', () => {
  it('renders the sidebar with correct elements', () => {
    render(
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>,
    )

    expect(screen.getByText('Paulo')).toBeInTheDocument()

    expect(screen.getByText('Suas Tarefas')).toBeInTheDocument()

    expect(screen.getByText('Sair')).toBeInTheDocument()
  })

  it('toggles sidebar visibility when button is clicked', async () => {
    render(
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>,
    )
    const sideBar = screen.getByTestId('side-bar')

    const toggleButton = screen.getAllByRole('button')[0]
    expect(sideBar).toHaveClass('hidden')

    fireEvent.click(toggleButton)

    await waitFor(() => {
      expect(sideBar).not.toHaveClass('hidden')
    })
  })

  it('calls handleLogoutUser and removes cookies on logout', () => {
    render(
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>,
    )

    const logoutButton = screen.getByText('Sair')
    fireEvent.click(logoutButton)

    expect(removeCookiesMock).toHaveBeenCalledWith('accessToken', { path: '/' })
    expect(navigateMock).toHaveBeenCalledWith('/auth')
  })
})
