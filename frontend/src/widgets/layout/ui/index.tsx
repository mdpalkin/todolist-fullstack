import {Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem} from '@heroui/react'
import {BeakerIcon} from '@heroicons/react/24/outline'
import { Outlet } from 'react-router'

export const Layout = () => {
  return (
  <div className="dark min-h-screen bg-left bg-gradient-to-r from-neutral-700 to-black">
  <Navbar className='shadow-sm' shouldHideOnScroll>
    <NavbarBrand>
      <BeakerIcon className="h-8 w-8" color={'#006fee'} />
    </NavbarBrand>
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link href="#">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="#" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
  <Outlet />
  </div>
  )  
}