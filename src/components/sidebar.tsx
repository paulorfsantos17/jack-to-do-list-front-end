import { List, X } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

import useWindowSize from '../hooks/useWindowSize'
import { Button } from './button'

export function SideBar() {
  const { width } = useWindowSize()
  const [isViewSideBar, setIsViewSideBar] = useState(false)

  const hasSideBarView = isViewSideBar && 'hidden'

  function toggleViewSideBar() {
    setIsViewSideBar(!isViewSideBar)
  }

  function VerifySizeWidthWindow() {
    if (width < 768) {
      setIsViewSideBar(false)
    } else {
      setIsViewSideBar(true)
    }
  }

  useEffect(() => {
    VerifySizeWidthWindow()
  }, [])

  return (
    <div>
      <div className="lg:hidden">
        <Button.Root
          typeStyle="icons"
          variant="outline"
          onClick={toggleViewSideBar}
        >
          <List size={40} className="text-gray-700" />
        </Button.Root>
      </div>
      <div className={`fixed top-0 h-full min-w-64 bg-gray-400
          flex flex-col items-center  p-8 pt-2 pr-1
          ${hasSideBarView}`}

      >
        <div className="w-full flex justify-end lg:hidden">
          <Button.Root
            typeStyle="icons"
            variant="outline"
            onClick={toggleViewSideBar}
          >
            <X size={40} className="text-white" />
          </Button.Root>
        </div>

        <span className="text-2xl text-white font-bold">
          Paulo
        </span>
      </div>
    </div>
  )
}
