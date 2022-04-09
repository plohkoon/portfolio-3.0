/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  CodeIcon,
  HomeIcon,
  MailIcon,
  MenuIcon,
  PencilIcon,
  XIcon,
} from '@heroicons/react/outline'

const sidebarNavigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: false },
  { name: 'Projects', href: '/projects', icon: CodeIcon, current: false },
  { name: 'Blog', href: '/blog', icon: PencilIcon, current: false },
  { name: 'Contact', href: '/contact', icon: MailIcon, current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Logo = () => {
  return (
    <div className="flex-shrink-0 flex items-center w-16">
      <img
        className="h-8 w-auto m-auto"
        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
        alt="Workflow"
      />
    </div>
  )
}

const SideBar = () => {
  return (
    <div className="hidden w-28 bg-indigo-700 overflow-y-auto md:block">
      <div className="w-full py-6 flex flex-col items-center">
        <Logo />
        <div className="flex-1 mt-6 w-full px-2 space-y-1">
          {sidebarNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
                'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              <item.icon
                className={classNames(
                  item.current ? 'text-white' : 'text-indigo-300 group-hover:text-white',
                  'h-6 w-6'
                )}
                aria-hidden="true"
              />
              <span className="mt-2">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

interface TopBarProps {
  open: () => void
}

const TopBar = ({ open }: TopBarProps) => {
  return (
    <nav className="md:hidden bg-indigo-700 h-16 w-full flex justify-between">
      <div className="flex align-middle h-full">
        <Logo />
          <h1 className="text-3xl font-bold text-white mx-2 pt-3">Blog</h1>
      </div>

      <div className='mr-4 flex align-middle'>
        <button
          type="button"
          className="bg-indigo-700 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white my-auto"
          onClick={open}
        >
          <span className="sr-only">View notifications</span>
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </nav>
  )
}

interface MobileMenuProps {
  open: boolean
  close: () => void
}

const MobileMenu = ({ open, close }: MobileMenuProps) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="md:hidden" onClose={close}>
        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-indigo-700 pt-5 pb-4 flex-1 flex flex-col">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-1 right-0 -mr-14 p-1">
                  <button
                    type="button"
                    className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={close}
                  >
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    <span className="sr-only">Close sidebar</span>
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 px-4 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                  alt="Workflow"
                />
              </div>
              <div className="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                <nav className="h-full flex flex-col">
                  <div className="space-y-1">
                    {sidebarNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-indigo-800 text-white'
                            : 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
                          'group py-2 px-3 rounded-md flex items-center text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <item.icon
                          className={classNames(
                            item.current ? 'text-white' : 'text-indigo-300 group-hover:text-white',
                            'mr-3 h-6 w-6'
                          )}
                          aria-hidden="true"
                        />
                        <span>{item.name}</span>
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

interface Props {
  children: React.ReactElement
}

const Menus = ({ children }: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="h-full flex">
        <SideBar />
        <MobileMenu open={mobileMenuOpen} close={() => setMobileMenuOpen(false)}/>

        <div className="flex-1 flex flex-col overflow-y-hidden">
          <TopBar open={() => setMobileMenuOpen(true)}/>
          <div className="flex-1 flex flex-col overflow-y-scroll h-full">
            { children }
          </div>
        </div>
      </div>
    </>
  )
}

export default Menus
