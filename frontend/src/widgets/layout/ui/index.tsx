import {Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem} from '@heroui/react'
import {BeakerIcon} from '@heroicons/react/24/outline'
import { Outlet, useNavigate } from 'react-router'

export const Layout = () => {
  const navigate = useNavigate()

  return (
  <div className="dark min-h-screen h-full">
  <Navbar className='shadow-sm' shouldHideOnScroll>
    <NavbarBrand>
      <BeakerIcon onClick={() => navigate('/')} className="h-8 w-8 cursor-pointer" color={'#006fee'} />
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
