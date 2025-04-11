
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export function Nav() {
  return (
    <Navbar fluid rounded className="bg-white shadow-md dark:bg-gray-800">
      <NavbarBrand >
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Internzone</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink  href="/internships">
          Internships
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="/terms">Terms</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
