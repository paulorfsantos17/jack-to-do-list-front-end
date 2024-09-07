import { List, ListChecks, X } from '@phosphor-icons/react'
import { useCallback, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'

import useWindowSize from '../hooks/useWindowSize'
import { Button } from './button'

export function SideBar() {
  const cookies = useCookies(['accessToken'])
  // O removeCookie é a terceira função retornada pelo
  // hook useCookies (cookies, setCookie, removeCookie)
  const removeCookies = cookies[2]

  const navigate = useNavigate()
  const { width } = useWindowSize()
  const [isViewSideBar, setIsViewSideBar] = useState(false)

  const hasSideBarView = !isViewSideBar && 'hidden'

  function handleToggleViewSideBar() {
    setIsViewSideBar(!isViewSideBar)
  }

  function handleNavigateManagerTask() {
    navigate('/')
  }

  function handleLogoutUser() {
    removeCookies('accessToken', { path: '/' })
    navigate('/auth')
  }

  const VerifySizeWidthWindow = useCallback(() => {
    if (width > 1024) {
      setIsViewSideBar(true)
    }
  }, [width])

  useEffect(() => {
    VerifySizeWidthWindow()
  }, [VerifySizeWidthWindow])

  return (
    <div className="lg:min-w-64">
      <div className="flex px-4 lg:hidden">

        <Button.Root
          typeStyle="icons"
          variant="outline"
          onClick={handleToggleViewSideBar}
        >
          <List size={40} className="text-gray-700" />
        </Button.Root>

        <div className="w-full flex justify-end">
          <Button.Root
            variant="outline"
            typeStyle="closed"
            onClick={handleNavigateManagerTask}
          >
            <X
              fontSize={40}
              weight="bold"
              className="text-gray-700"
            />
          </Button.Root>
        </div>

      </div>
      <div
        data-testid="side-bar"
        className={`fixed top-0 h-full min-w-64 bg-gray-700
          flex flex-col items-center  p-8 pt-2 pr-1
          ${hasSideBarView}`}
      >
        <div className="w-full flex justify-end lg:hidden">
          <Button.Root
            typeStyle="icons"
            variant="outline"
            onClick={handleToggleViewSideBar}
          >
            <X size={40} className="text-white" />
          </Button.Root>
        </div>

        <span className="text-2xl text-white font-bold">
          Paulo
        </span>

        <nav className=" w-full h-[80%] mt-10 flex flex-col">
          <Link
            to="/"
            className="flex gap-1 items-center
            text-white hover:text-gray-400"
          >
            <ListChecks size={24} />
            <span
              className="text-lg"
            >
              Suas Tarefas
            </span>
          </Link>

          <div className="mt-auto">
            <Button.Root
              variant="outline"
              onClick={handleLogoutUser}
            >
              <span className="text-danger text-xl hover:opacity-80">Sair</span>
            </Button.Root>
          </div>
        </nav>
      </div>
    </div>
  )
}
