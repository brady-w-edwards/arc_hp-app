import React from "react";
import {  
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,  
    NavbarMenuItem 
} from "@nextui-org/navbar";
import { Button, Link } from "@nextui-org/react";


export default function NavBar() {
    return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">ARC HP</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Pricing
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    )
}
